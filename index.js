document.addEventListener('DOMContentLoaded', function() {
    let displayedTasks = [];

    const addButton = document.getElementById('add');
    const sortButton = document.getElementById('sorting');
    const todoListContainer = document.getElementById('todo-list');
    const taskNameInput = document.getElementById('to-do');

    addButton.addEventListener('click', function() {
        const taskName = taskNameInput.value.trim();

        if (taskName) {
            const newTask = {
                id: displayedTasks.length + 1,
                name: taskName,
                createdDate: new Date(), 
                completed: false 
            };
            displayedTasks.push(newTask);
            addTaskToDisplay(newTask);
            taskNameInput.value = '';
        }
    });

    function addTaskToDisplay(task) {
        const listItem = document.createElement('li');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.className = 'checkbox';
        checkbox.dataset.taskId = task.id;

        const label = document.createElement('label');
        label.htmlFor = 'task-' + task.id;
        label.textContent = `${task.name} - Created: ${task.createdDate.toLocaleString()}`;

        listItem.appendChild(checkbox);
        listItem.appendChild(label);
        todoListContainer.appendChild(listItem);

        checkbox.addEventListener('change', function() {
            task.completed = this.checked;
            label.style.textDecoration = this.checked ? 'line-through' : 'none';
        });
    }

    function displayTasks() {
        todoListContainer.innerHTML = ''; 
        displayedTasks.forEach(function(task) {
            addTaskToDisplay(task);
        });
    }

    sortButton.addEventListener('click', function() {
       
        displayedTasks.sort(function(a, b) {
            const nameA = a.name.toLowerCase();
            const nameB = b.name.toLowerCase();
            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }
            return 0;
        });
        displayTasks();
    });
});
  

  

  
  
