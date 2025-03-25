


function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();
  
    if (taskText === "") {
      alert("Please enter a task!");
      return;
    }
  
    const taskList = document.getElementById("taskList");
  
    const li = document.createElement("li");
    li.innerHTML = `
      <span class="task-text">${taskText}</span>
      <div class="task-actions">
        <button class="edit-btn" onclick="editTask(this)">Edit</button>
        <button class="delete-btn" onclick="deleteTask(this)">Delete</button>
      </div>
    `;
  
    taskList.appendChild(li);
    taskInput.value = "";
  }
  
  function editTask(button) {
    const taskItem = button.parentElement.parentElement;
    const taskSpan = taskItem.querySelector(".task-text");
  
    const newTask = prompt("Edit your task:", taskSpan.textContent);
    if (newTask !== null && newTask.trim() !== "") {
      taskSpan.textContent = newTask.trim();
    }
  }
  
  function deleteTask(button) {
    const taskItem = button.parentElement.parentElement;
    taskItem.remove();
  }

  