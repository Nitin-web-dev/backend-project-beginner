const {loadTasks, saveTasks } = require("./fileHandler.js");

let tasks = loadTasks(); // load the exist or ya jo pehle se exist ya pehle se json file me data save hai 

// to do 
// get input from cli by using process.argv
const command = process.argv[2];
const message = process.argv[3];

console.log(command, message);
const dataSkeleton = {
    id : 1,
    description: message,
    Status: "todo",
    createdAt : new Date(),
    updateAt : "yet to do"
}


saveTasks(dataSkeleton);
// add data into previous tasks
// save the data 

console.log(tasks)