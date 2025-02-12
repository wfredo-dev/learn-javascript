document.getElementById("addTaskBtn").addEventListener("click", function () {
  let input = document.getElementById("taskInput");
  let taskText = input.value.trim();

  if (taskText !== "") {
    let li = document.createElement("li");
    li.textContent = taskText;
    li.addEventListener("click", function () {
      this.remove();
    });
    document.getElementById("taskList").appendChild(li);
    input.value = "";
  }
});
