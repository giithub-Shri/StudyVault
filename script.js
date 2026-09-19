const taskInput = document.getElementById("task-input");
const subjectInput = document.getElementById("subject-input");
const addTaskButton = document.getElementById("add-task");
const taskList = document.getElementById("task-list");

const taskCount = document.getElementById("tasks-count");
const completedCount = document.getElementById("completed");

addTaskButton.addEventListener("click", function () {
    const taskText = taskInput.value.trim();
    const subject = subjectInput.value;

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    if (subject === "") {
        alert("Please choose a subject!");
        return;
    }

    const newTask = document.createElement("li");

    const taskName = document.createElement("span");
    taskName.textContent = taskText + " — " + subject;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";

    taskName.addEventListener("click", function () {
        taskName.classList.toggle("completed");
        updateCounts();
    });

    deleteButton.addEventListener("click", function () {
        newTask.remove();
        updateCounts();
    });

    newTask.appendChild(taskName);
    newTask.appendChild(deleteButton);

    taskList.appendChild(newTask);

    taskInput.value = "";
    subjectInput.value = "";

    updateCounts();
});

function updateCounts() {
    taskCount.textContent = taskList.children.length;
    completedCount.textContent =
        document.querySelectorAll(".completed").length;
}