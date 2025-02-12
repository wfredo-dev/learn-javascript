let tasks = [];

function addTask(task) {
  tasks.push(task);
  console.log("Added: " + task);
}

function showTask() {
  console.log("\n To-Do list: ");
  tasks.forEach((task, index) => {
    console.log(index + 1 + "." + task);
  });
}
function removeTask(index) {
  if (index >= 1 && index <= tasks.length) {
    console.log("Removed: " + tasks[index - 1]);
    tasks.splice(index - 1, 1);
  } else {
    console.log("Invalid task number!");
  }
}

addTask("Learn JavaScipt");
addTask("Build a website");
showTask();
removeTask(1);
showTask();
