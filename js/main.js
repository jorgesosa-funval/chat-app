import { showUsers, searchUser, showChats } from './utilities.js';
import { conversaciones, users } from './data.js'

const user_list = document.querySelector('#user_list');
const searchInput = document.querySelector('#search');
const chat_list = document.querySelector('#chat_list');
const mic = document.querySelector('.message_input_container');
const chatHeader = document.querySelector('#chat_header');
const messageInput = document.querySelector('#new_message');

/* global variable */
let activeConversation = null

/* llamada showusers */
showUsers(users, user_list);


/* Events */
searchInput.addEventListener('input', () => {
    searchUser(users, user_list, searchInput.value)
})

user_list.addEventListener('click', (e) => {

    const id = parseInt(e.target.closest('li').id);
    const conversacion = conversaciones.find((data) => data.userId === id);
    activeConversation = conversacion;
    let  destinatario = users.find(user => user.userId === id).username

    /* for (let i = 0; i < conversacion.conversacion.length; i++) {
        
            if(conversacion.conversacion[i].remitente !== 'Miguel Salinas'){
                destinatario= conversacion.conversacion[i].remitente;  
            }
        
    } */

    /* users.forEach(user => {
        if(user.userId === id){
            destinatario = user.username
        }
    }); */

    showChats(conversacion, chat_list);
    mic.style.display = 'flex';
    chatHeader.style.display = 'flex';
   
    showDestinatarioName(destinatario, id, chatHeader)
    /* mic.classList.add('show') */

    /* 
    let conversacion = ''
    for (let i = 0; i < conversaciones.length; i++) {
  
         if(conversaciones[i].userId === id){
            conversacion = conversaciones[i]
            break;
         }
    }
 */
})

messageInput.addEventListener('keydown', (e)=>{

    if(e.code === 'Enter'){// validando cuando el usuario presiona enter
   
        newMessage(activeConversation , messageInput.value); // llamada o ejecucion de la funcion newMessage
        showChats(activeConversation, chat_list); //Recargar lista de mensajes
        messageInput.value = '' // limpiar el input
    }
})

function showDestinatarioName(name, id, header) {
    let template = `
    <div class="destinatario">
      <img src="https://robohash.org/138.36.78.${id}.png" alt="Random robot" width="60">
      <h5>${name}</h5>
    </div>
    `
    header.innerHTML = template
}


function newMessage(conversacion, message) {

    let obj =  {
        fechaEnvio: new Date(),//genera fecha actual
        mensaje: message, //mensaje desde el input
        remitente: "Miguel Salinas", // quien envia el mensaje
    }

    conversacion.conversacion.push(obj) // agregar el nuevo mensaje al array
}