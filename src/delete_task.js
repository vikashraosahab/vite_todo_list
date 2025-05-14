import database from './database.js';
import taskUpdate from './task_ui.js';

const deleteTask = () => {
    if (database.length !== 0) {
        const deleteButton = document.querySelectorAll ('.delete');
        deleteButton.forEach ((button)=> {
            console.log (button);
            button.addEventListener ('click', (e) =>{
                let id = e.target.id;
                database.splice (id, 1);
                database.forEach ((task,index) =>{
                    task.id = index;
                })
                taskUpdate ();
                alert ('Task deleted successfully');
            })
        })
    }   
    else {
        console.log ('No Todos yet added');
    }
}

export default deleteTask;