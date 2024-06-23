let tasks = [];

function addTask() {
    const taskText = document.getElementById('textInput').value.trim();
    if (!taskText) return;

    tasks.push({ task: taskText, completed: false });
    document.getElementById('textInput').value = '';
    renderTask();
}

function renderTask() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';

    tasks.forEach((task, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${index + 1}</td>
            <td id="task-${index}" onclick="toggleComplete(${index})" style="cursor:pointer; ${task.completed ? 'text-decoration: line-through;' : ''}">
                ${task.task}
            </td>
            <td>
                <button class="btn btn-success btn-sm" onclick="editTask(${index})">Edit</button>
                <button class="btn btn-primary btn-sm" onclick="toggleComplete(${index})">${task.completed ? 'Undo' : 'Complete'}</button>
                <button class="btn btn-danger btn-sm" onclick="deleteTask(${index})">Delete</button>
            </td>
        `;
        taskList.appendChild(row);
    });
}

function editTask(index) {
    const newTask = alert('Enter new task :', tasks[index].task);
    if (newTask !== null) {
        tasks[index].task = newTask.trim();
        renderTask();
    }
}

function toggleComplete(index) {
    tasks[index].completed = !tasks[index].completed;
    renderTask();
}

function deleteTask(index) {
    tasks.splice(index, 1);
    renderTask();
}

// Initial rendering of tasks
renderTask();