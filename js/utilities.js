
/**
 * @description funcion para iterar y mostrar los usuarios en el DOM.
 * @param Array[object] users 
 * @param node list 
 */
function showUsers(users, list) {
    list.innerHTML = ''

    users.forEach(function (user) {
        let template_user = `
        <li class="user_item" id="${user.userId}">
            <img src="https://robohash.org/138.36.78.${user.userId}.png" alt="Random robot" width="60">
            <h5>${user.username}</h5>
        </li>
        `
        list.innerHTML += template_user;
    });

}
/**
 * @description filtro de busqueda para los usuarios
 * @param Array[object] users 
 * @param node list 
 * @param string searchValue 
 */
function searchUser(users, list, searchValue) {
    const rs = users.filter(function (user) {
        return user.username.toLowerCase().includes(searchValue.toLowerCase())
    })
    showUsers(rs, list)
}
/**
 * @description Funcion para crear elemento li con mensaje y fecha.
 * @param {Number, array} chat 
 * @param node list 
 */
function showChats(chat, list) {
    list.innerHTML = ''
    chat.conversacion.forEach((message, index) => {
        let own_messages = ''

        if(message.remitente === 'Miguel Salinas'){
            own_messages = 'own_messages'
        }
         
        const li = document.createElement('li');
        li.id = index
        li.setAttribute('class', `chat_item ${own_messages}`)
     
        const p = document.createElement('p');
        p.textContent = message.mensaje;

        const span = document.createElement('span');
        span.textContent = message.fechaEnvio

        li.append(p, span);
        list.appendChild(li);
    })

}





export { showUsers, searchUser, showChats }
 