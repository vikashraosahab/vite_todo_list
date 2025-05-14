import database from "./database";
import taskUpdate from './task_ui.js';

const editTask = () =>{
    let editBtn = document.querySelectorAll ('.edit');
    editBtn.forEach ((button)=>{
        button.addEventListener ('click', (e)=>{
            console.log (database[e.target.id].tasks);
            let newTask = prompt ('Enter the new task (seperate with , ): ');
            a = database[e.target.id].tasks = newTask.split(',');
            taskUpdate();
            alert ("Task is updated now !");
        })
    })
}

export default editTask;