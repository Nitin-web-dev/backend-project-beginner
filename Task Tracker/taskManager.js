/// identify which operation to perform add update read or delete in this file or all tasks logic
// quick reference for
// # Adding a new task
// task-cli add "Buy groceries"
// # Output: Task added successfully (ID: 1)
// # Updating and deleting tasks
// task-cli update 1 "Buy groceries and cook dinner"
// task-cli delete 1
// # Marking a task as in progress or done
// task-cli mark-in-progress 1
// task-cli mark-done 1
// # Listing all tasks
// task-cli list
// # Listing tasks by status
// task-cli list done
// task-cli list todo
// task-cli list in-progress

const { loadTasks, saveTasks } = require("./fileHandler.js");


function AddTasks(message) {
  const taskList = loadTasks();
  const currentTaskId = taskList.length + 1;
  const task = {
    id: currentTaskId,
    description: message,
    status: "todo",
    createdAt: new Date().toISOString(),
    
  };
  // add new task to previous tasklist
  taskList.push(task);
  // save the data
  saveTasks(taskList);
  return task;
}

function updateTasksStutus(id, message) {
  // todo
}

function deleteTask(id) {
  // todo get id console it 
  // console.log(id)
  // check in list 
  const updatedTaskList = loadTasks().filter( task => task.id !== id);
  saveTasks(updatedTaskList);
  return `id: ${id} deleted `;
  // filter it and remove it 
}

function listAllTasks() {
    const list = loadTasks();
    let countList = list.length;
  return { ['number of list']: countList,list};
}

function listAllTasksDone() {
  const list = loadTasks().filter(task => task.status == "done");
  return list;
}

function listAllTasksNotDone() {
  // todo
}
function listAllTasksInProgess() {
  // todo
}

module.exports = {
  AddTasks,
  updateTasksStutus,
  deleteTask,
  listAllTasks,
  listAllTasksDone,
  listAllTasksNotDone,
  listAllTasksInProgess,
};
