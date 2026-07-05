const {loadTasks, saveTasks } = require("./fileHandler.js");
const {AddTasks} = require("./taskManager.js");
let tasks = loadTasks(); // load the exist or ya jo pehle se exist ya pehle se json file me data save hai 

// to do 
// get input from cli by using process.argv
const command = process.argv[2];
const message = process.argv[3];

console.log(command, message);
// the data in json file should store like this
// const dataSkeleton = {
//     id : 1,
//     description: message,
//     Status: "todo",
//     createdAt : new Date(),
//     updateAt : "yet to do"
// }

// Addtask is a function to add input data into a object like schema or skeleton and return it to save 
const data = AddTasks(message);


//  to do : add data into previous tasks


// save the data 
saveTasks(data);

console.log(tasks) // to do : should output latest data not previous data