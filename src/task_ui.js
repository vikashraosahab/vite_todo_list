import database from './database.js'

import deleteTask from './delete_task.js';
import editTask from './edit_task.js';
 
const taskUpdate = ()=> {
    let taskList = document.querySelector ('#tasks');
     let tasks = database.map ((task,index)=>{
        return `
           <div class = 'task'>
              <div class = 'task_header'>
               <h4> Task Id : ${task.id} </h4>
                <h5>${DayName(task.date)}</h5>
                <h5>${task.time} </h5>
              </div>
              <div class = 'task-body'>
                <h3> Dodo List task - </h3>
                <ul type = 'circle'>
                   ${task.tasks.map ((task)=>{
                    return `
                         <li> ${task} </li>
                       `;
                   }).join(' ')}
                </ul>
              </div>
              <div class = 'task-footer'>
                <button class = 'delete' id = ${task.id}> Delete </button>
                <button class = 'edit' id = ${task.id}> Edit </button>
              </div>
           </div>
        `;
     }).join (' ');
     if (database.length === 0) {
        taskList.innerHTML = 'No TODOs yet added';
     }
     else taskList.innerHTML = tasks;
     deleteTask ();
     editTask ();
}

const DayName  = (day) => {
   switch (day) {
      case 0:
         return 'Sunday';
         break;
      case 1:
         return 'Monday';
         break;
      case 2:
         return 'Tuesday';
         break;
      case 3:
         return 'Wednesday';
         break;
      case 4:
         return "Thursday";
         break;
      case 5:
         return 'Friday';
         break;
      case 6:
         return 'Saturday';
         break;
   }
}

export default taskUpdate;
