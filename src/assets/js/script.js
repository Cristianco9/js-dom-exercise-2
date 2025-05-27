const addTaskBtn = document.getElementById('addTaskBtn');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');
const counter = document.getElementById('counter');

function updateCounter() {
    const total = taskList.children.length;
    const completed = document.querySelectorAll('#taskList .completed').length;
    counter.textContent = `Tareas: ${total} | Completadas: ${completed}`;
}

// Función para agregar una nueva tarea
function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        const li = document.createElement('li');
        li.innerHTML = `
      <span class="task-text">${taskText}</span>
      <button class="delete-btn">Eliminar</button>
    `;
        taskList.appendChild(li);
        taskInput.value = "";
        updateCounter();
    }
}

// Evento click en el botón Agregar
addTaskBtn.addEventListener('click', addTask);

// Evento tecla Enter en el input
taskInput.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
        addTask();
    }
});

// Delegación de eventos para eliminar y marcar tareas
taskList.addEventListener('click', function (e) {
    if (e.target.classList.contains('delete-btn')) {
        e.target.parentElement.remove();
        updateCounter();
    }

    if (e.target.classList.contains('task-text')) {
        e.target.classList.toggle('completed');
        updateCounter();
    }
});
