const { loadTasks, saveTasks } = require("./fileHandler.js");
const { AddTasks } = require("./taskManager.js");
let tasks = loadTasks(); // load the exist or ya jo pehle se exist ya pehle se json file me data save hai

// get input from cli by using process.argv
const command = process.argv[2];
const message = process.argv[3];

// Addtask is a function to add input data into a object like schema or skeleton and return it to save
const data = AddTasks(message);

//  to do : add data into previous tasks


// save the data
saveTasks(data);



    let currentID = loadTasks();
    let id = currentID + 1;
  console.log(currentID);
console.log(typeof currentID);
console.log(Array.isArray(currentID));

console.log(tasks)
console.log(data); // to do : should output latest data not previous data
