const { AddTasks, listAllTasks } = require("./taskManager.js"); // load the exist or ya jo pehle se exist ya pehle se json file me data save hai
// get input from cli by using process.argv
const command = process.argv[2];
const message = process.argv[3];

//todo: check for command which operation to perform;
//create a switch for assign which function to call
switch (command) {
  case "add":
    console.log(AddTasks(process.argv[3]));
    break;

  case "update":
    console.log(updateTasksStutus(Number(process.argv[3]), process.argv[4]));
    break;

  case "delete":
    console.log(deleteTask(Number(process.argv[3])));
    break;

  case "mark-done":
    console.log(updateTasksStutus(Number(process.argv[3]), "done"));
    break;

  case "mark-in-progress":
    console.log(updateTasksStutus(Number(process.argv[3]), "in-progress"));
    break;

  case "list":
    if (!process.argv[3]) {
      console.log(listAllTasks());
    } else {
      switch (process.argv[3]) {
        case "done":
          console.log(listAllTasksDone());
          break;

        case "todo":
          console.log(listAllTasksNotDone());
          break;

        case "in-progress":
          console.log(listAllTasksInProgess());
          break;

        default:
          console.log("Invalid list option.");
      }
    }
    break;

  default:
    console.log(`
Available Commands:

task-cli add "Task name"
task-cli update 1 "New task"
task-cli delete 1
task-cli mark-done 1
task-cli mark-in-progress 1
task-cli list
task-cli list done
task-cli list todo
task-cli list in-progress
`);
}

