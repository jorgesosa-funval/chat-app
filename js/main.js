import {showUsers, searchUser} from './utilities.js';
import   {conversaciones, users} from './data.js'

const user_list = document.querySelector('#user_list');
const searchInput = document.querySelector('#search');

/* llamada showusers */
showUsers(users, user_list);
 


/* Events */
function search() {
    searchUser(users, user_list, searchInput.value)
}
searchInput.addEventListener('input', search)