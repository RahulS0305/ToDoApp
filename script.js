function addTask() {
    const input = document.getElementById("newTask");
    const taskList = document.getElementById("taskList");

    if (input.value.trim() !== "") {
        const li = document.createElement("li");
        li.innerHTML = `
            <input type="checkbox">
            <span>${input.value}</span>
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
