// script.js
document.getElementById('addBtn').addEventListener('click', function() {
    let taskInput = document.getElementById('newTask');
    let taskText = taskInput.value.trim();

    if (taskText !== "") {
        // Create a new list item
        let li = document.createElement('li');
        li.textContent = taskText;

        // Create a "mark as completed" button
        let completeBtn = document.createElement('button');
        completeBtn.textContent = '✔️';
        completeBtn.addEventListener('click', function() {
            li.classList.toggle('completed');
        });

        // Create a "delete" button
        let deleteBtn = document.createElement('button');
        deleteBtn.textContent = '❌';
        deleteBtn.addEventListener('click', function() {
            li.remove();
        });

        // Append buttons to the list item
        li.appendChild(completeBtn);
        li.appendChild(deleteBtn);

        // Append the list item to the task list
        document.getElementById('taskList').appendChild(li);

        // Clear the input field
        taskInput.value = "";
    }
});
