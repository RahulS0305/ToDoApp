function addTask() {
    const input = document.getElementById("newTask");
    const taskList = document.getElementById("taskList");

    if (input.value.trim() !== "") {
        const li = document.createElement("li");
        li.innerHTML = `
            <input type="checkbox">
            <span class="task-text">${input.value}</span>
            <button class="task-remove" onclick="removeTask(this)">Remove</button>
        `;
        taskList.appendChild(li);
        input.value = "";
    }
}

function removeTask(button) {
    const li = button.parentElement;
    li.remove();
}

function toggleComplete(checkbox) {
    const taskText = checkbox.nextElementSibling;
    if (checkbox.checked) {
        taskText.style.textDecoration = "line-through";
        taskText.style.color = "#aaa";
    } else {
        taskText.style.textDecoration = "none";
        taskText.style.color = "#333";
    }
}

function clearCompleted() {
    const checkboxes = document.querySelectorAll("input[type='checkbox']");
    checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
            const li = checkbox.parentElement;
            li.remove();
        }
    });
}
