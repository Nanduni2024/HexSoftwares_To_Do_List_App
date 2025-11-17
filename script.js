function addTask() {
    let input = document.getElementById("taskInput");
    let taskText = input.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    let li = document.createElement("li");
    li.className = "task";

    li.innerHTML = `
        <span class="name">${taskText}</span>
        <div>
            <button class="btn btn-complete" onclick="toggleComplete(this)">✓</button>
            <button class="btn btn-delete" onclick="deleteTask(this)">X</button>
        </div>
    `;

    document.getElementById("taskList").appendChild(li);
    input.value = "";
}

function deleteTask(btn) {
    btn.parentElement.parentElement.remove();
}

function toggleComplete(btn) {
    let task = btn.parentElement.parentElement.querySelector(".name");
    task.classList.toggle("completed");
}
