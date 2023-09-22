function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();
  
    if (taskText === '') {
      alert('Please enter a task.');
      return;
    }
  
    const taskList = document.getElementById('taskOutput');
    const li = document.createElement('li');
    li.innerHTML = `<input type="checkbox" onchange="toggleTask(this)">
      <span>${taskText}</span>
      <button onclick="removeTask(this)">Delete</button>
    `;
  
    taskList.appendChild(li);
    taskInput.value = '';
  }
  
  function removeTask(button) {
    const taskList = document.getElementById('taskOutput');
    const li = button.parentElement;
    taskList.removeChild(li);
  }
  function toggleTask(checkbox) {
    const taskText = checkbox.nextElementSibling;
    if (checkbox.checked) {
        taskText.style.textDecoration = 'line-through';
    } else {
        taskText.style.textDecoration = 'none';
    }
}
