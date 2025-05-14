import  {UI} from './ui.js';
import getInput  from './get_input.js';
import taskUi from './task_ui.js';
import database from './database.js';
import deleteTask from './delete_task.js';

document.addEventListener ('DOMContentLoaded',()=>{
    const root = document.querySelector ('#app');
    root.innerHTML = UI;
    getInput ();
    deleteTask ();
})