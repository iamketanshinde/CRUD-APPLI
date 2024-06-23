let tasks=[];
  
function addTask(){
    const TaskText=document.getElementById('textInput').Value.trim();
    if(!TaskText) return;
    
   tasks.push({ tasks : TaskText, completed : false});
   document.getElementById('taskInput').value='';
   renderTask();
}
function renderTask(){
    const TaskInput=document.getElementById('taskInput');
    TaskInput.innerHTML='';

    tasks.forEach((task,index)=>{
        const row=document.createElement('tr');
        row.innerHTML=`
        <td>${index+1}</td>
        <td id="${task} onclick="tooglecomplete(${index})" style="cursor:pointer; ${task.completed?'text-decoration:line-through;':''}">${task.task}</td>
        <td>
        
         <button class="btn btn-success mr-1 btn-sm" onclick="editTask(${index})">Edit</button>
         <button class="btn btn-success mr-1 btn-sm" onclick="tooglecomplete(${completeTask})">${task.completed?'undo':'complete'}complete</button>
         <button class="btn btn-success mr-1 btn-sm" onclick="deleteTask(${index})">delete</button>
        </td>
        `;
        TaskInput.appendChild(row);
    }).join();
}