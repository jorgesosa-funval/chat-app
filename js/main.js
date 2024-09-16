import { showUsers, searchUser, showChats } from './utilities.js';
import { conversaciones, users } from './data.js'

const user_list = document.querySelector('#user_list');
const searchInput = document.querySelector('#search');
const chat_list = document.querySelector('#chat_list');

/* llamada showusers */
showUsers(users, user_list);


/* Events */
searchInput.addEventListener('input', () => {
    searchUser(users, user_list, searchInput.value)
})

user_list.addEventListener('click', (e) => {

    const id = parseInt(e.target.closest('li').id);
    const conversacion = conversaciones.find((data) => data.userId === id)
    showChats(conversacion, chat_list);


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