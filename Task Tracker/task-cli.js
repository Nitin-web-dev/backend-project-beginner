const fs = require("fs");

const file = "tasks.json";

let tasksData = [];

console.log(tasksData)
if (fs.existsSync(file)){
    tasksData = JSON.parse(fs.readFileSync(file, "utf-8"));
}
console.log(tasksData)
tasksData.push({
    name : process.argv[2],
    data : process.argv[3]
    
})
console.log(tasksData)
fs.writeFileSync(file, JSON.stringify(tasksData, null, 2))
console.log('end')

// console.log(process.argv); // to get input from cli 


