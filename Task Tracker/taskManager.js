/// identify which operation to perform add update read or delete in this file or all tasks logic
const { loadTasks, saveTasks } = require("./fileHandler.js");


function AddTasks (message)  {

    let currentID = loadTasks();
    let id = currentID.length + 1;
    return {
    id : id,
    description: message,
    Status : "todo",
    createdAt : new Date().toISOString,
    }
}


module.exports  = {
    AddTasks
}