
const { AddTasks,listAllTasks } = require("./taskManager.js");
; // load the exist or ya jo pehle se exist ya pehle se json file me data save hai

// get input from cli by using process.argv
const command = process.argv[2];
const message = process.argv[3];

//todo: check for command which operation to perform;
//create a switch for assign which function to call




// show all list and count them also
const data = listAllTasks(); 

console.log(data);


