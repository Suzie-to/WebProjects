const addTask = document.getElementById('add-task');
const taskContainer = document.getElementById('task-container');
const inputTask = document.getElementById('input-task');

//EVENT LISTENER FOR ADD BUTTON
addTask.addEventListener("click", function() {

    // create a task
    //create a div element that will house the task, delete/check button
    let task = document.createElement('div');
    task.classList.add('task');

    //insert a list item for the task
    let li = document.createElement('li');
    li.innerText = `${inputTask.value}`;
    task.appendChild(li);

    //create a check button / icon
    let checkButton = document.createElement("button");
    checkButton.innerHTML = '<i class="fa-solid fa-check"></i>';
    checkButton.classList.add('checkTask');
    //include button into div
    task.appendChild(checkButton);

    //create a delete button /icon
    let deleteButton = document.createElement("button");
    deleteButton.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
    deleteButton.classList.add('deleteTask');
    task.appendChild(deleteButton);


    if(inputTask.value === "") {
        alert('Please enter actual tasks');
    }
    else {
        taskContainer.appendChild(task);
    }

    // revert back to placeholder once task is adde3d to the list
    inputTask.value = "";

    //cross over checked tasks
    checkButton.addEventListener('click', function(){
        checkButton.parentElement.style.textDecoration = "line-through"
    });

    //delete task (event object -e) from task list
    deleteButton.addEventListener("click", function(e) {
        // refers to the actual element being clicked
        let target = e.target;

        //more from the element -> 
        target.parentElement.parentElement.remove();
    })
});