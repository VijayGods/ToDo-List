document.addEventListener("DOMContentLoaded", function () {
    const taskForm = document.getElementById("taskForm");
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");

    taskForm.addEventListener("submit", function (e) {
        e.preventDefault();
        addTask();
    });


    taskList.addEventListener("click", function (e) {
        if (e.target.tagName === "BUTTON") {
            removeTask(e.target.parentElement);
        } else if (e.target.tagName === "LI") {
            toggleTask(e.target);
        }
    });

    function addTask() {
        const newTask = taskInput.value.trim();
        if (newTask !== "") {
            const li = document.createElement("li");
            li.textContent = newTask;

            const button = document.createElement("button");
            button.textContent = "Delete";

            li.appendChild(button);
            taskList.appendChild(li);

            taskInput.value = "";
        }
    }

    function removeTask(taskItem) {
        taskItem.remove();
    }

    function toggleTask(taskItem) {
        taskItem.classList.toggle("checked");
    }
});
