const form = document.querySelector('#task-form')
const taskList = document.querySelector('.collection')
const clearBtn = document.querySelector('.clear-tasks')
const filter = document.querySelector('#filter')
const taskInput = document.querySelector('#task')

//DOM loaded invent

document.addEventListener('DOMContentLoaded', getTasks);

form.addEventListener('submit', addTask);
taskList.addEventListener('click', removeTask);
clearBtn.addEventListener('click', clearTasks);
filter.addEventListener('keyup', filterTasks);

function getTasks() {
    let tasks;
    if (localStorage.getItem('tasks') === null) {
        tasks = []
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'))
    }

    tasks.forEach(task => {
        const li = document.createElement('li')
        li.className = 'collection-item';
        //Create text node and append
        li.appendChild(document.createTextNode(task));
        //Create new link element
        const link = document.createElement('a')
        //Add class
        link.className = 'delete-item secondary-content';
        //add icon html
        link.innerHTML = '<i class="fa fa-remove"></i>'
        //append the link to li
        li.appendChild(link);

        //append li to ul
        taskList.appendChild(li);
    })
}


//Add Task
function addTask(e) {
    if (taskInput.value === '') {
        alert('add a task')
    }

    const li = document.createElement('li')
    li.className = 'collection-item';
    //Create text node and append
    li.appendChild(document.createTextNode(taskInput.value));
    //Create new link element
    const link = document.createElement('a')
    //Add class
    link.className = 'delete-item secondary-content';
    //add icon html
    link.innerHTML = '<i class="fa fa-remove"></i>'
    //append the link to li
    li.appendChild(link);

    //append li to ul
    taskList.appendChild(li);

    storeTaskInLocalStorage(taskInput.value);

    //Clear input
    taskInput.value = '';

    e.preventDefault();
}

function storeTaskInLocalStorage(task) {
    let tasks;
    if (localStorage.getItem('tasks') === null) {
        tasks = []
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'))
    }

    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks))
}


//remove task
function removeTask(e) {
    debugger;
    if (e.target.parentElement.classList.contains('delete-item')) {
        if (confirm('Are u sure?')) {
            e.target.parentElement.parentElement.remove();

            //Remove from LS
            removeTaskFromLocalStorage();
        }
    }
}

//Remove from LS
function removeTaskFromLocalStorage(taskItem){
    let tasks;
    if (localStorage.getItem('tasks') === null) {
        tasks = []
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'))
    }

    tasks.forEach((task,index) => {
        if(taskItem.textContent === task){
            tasks.splice(index, 1);
        }
    });

    localStorage.setItem('tasks', JSON.stringify(tasks))
}

//Clear Tasks
function clearTasks() {
    // taskList.innerHTML = '';

    //Faster
    while (taskList.firstChild) {
        taskList.removeChild(taskList.firstChild)
    }

    //Clear from LS
    clearTasksFromLocalStorage();
}

function clearTasksFromLocalStorage(){
    localStorage.clear();
}

function filterTasks(e) {
    debugger;
    const text = e.target.value;

    document.querySelectorAll('.collection-item').forEach(
        function (task) {
            const item = task.firstChild.textContent;
            if (item.toLowerCase().indexOf(text) !== -1) {
                task.style.display = 'block';
            } else {
                task.style.display = 'none';
            }
        }
    )
}