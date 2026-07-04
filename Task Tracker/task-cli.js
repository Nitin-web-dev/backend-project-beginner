const {loadTasks, saveTasks } = require("./fileHandler.js");

let tasks = loadTasks(); // load the exist or ya jo pehle se exist ya pehle se json file me data save hai 

// to do 
// get input from cli
// add data into previous tasks
// save the data 

console.log(tasks)