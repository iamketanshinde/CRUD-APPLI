let tasks=[];
  
function addTask(){
    const TaskText=document.getElementById('textInput').Value.trim();
    if(!TaskText) return;
    
   tasks.push({ tasks : TaskText, completed : false});
   document.getElementById('taskInput').value='';
   renderTask();
}
function renderTask(){
    const TaskInput=document
}