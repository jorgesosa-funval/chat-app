
/**
 * @description funcion para iterar y mostrar los usuarios en el DOM.
 * @param Array[object] users 
 * @param node list 
 */
function showUsers(users, list) {
    list.innerHTML  = ''

    users.forEach(function (user) {
        let template_user = `
        <li class="user_item">
            <img src="https://robohash.org/138.36.78.1.png" alt="Random robot" width="60">
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
   const rs = users.filter(function(user) {
        return user.username.toLowerCase().includes(searchValue.toLowerCase())
   })
    showUsers(rs, list)
}



export { showUsers, searchUser }