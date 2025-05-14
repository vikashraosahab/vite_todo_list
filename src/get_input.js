// THIS FUNCTION GETS THE VALUE FO THE INPUT FIELD 
import database from './database.js';
import taskUpdate  from './task_ui.js';
const getInput = () => {
    const input = document.querySelector ('#input');
    const addButton = document.querySelector ("#add");
   
    addButton.addEventListener ('click', () => {
        let task = input.value; // GET VALUE OF THE TASK INPUT BY USER
        let taskArray = task.split (',');
        let dataobject = {
            id:database.length,
            date: new Date().getDay(),
            time : new Date().toLocaleTimeString(),
            tasks : taskArray
        }

        database.push (dataobject);
        taskUpdate ();
        input.value = '';
    })
}


export default getInput;

