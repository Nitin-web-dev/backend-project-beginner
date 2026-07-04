const fs = require("fs"); // for reading and writing files
const path = require("path"); // for saving file in current directry

const filePath = path.join(__dirname, "tasks.json"); // give the current path to file 

// check for file if exit or not if not create one 
// read it and return it 
function loadTasks () {
    // if not exit in directry
    if (!fs.existsSync(filePath)){
        // if not exit create one with empty array becuase we need to add data in tasks.json file add, update ,read and delete array is best option for it 
        fs.writeFileSync(filePath, JSON.stringify([]));
    }

    // read the file if exist
    const data = fs.readFileSync(filePath, "utf-8");

    // JSON.parse(data) change json object data into array form data becuase we will going to use it for crud operations
    return JSON.parse(data);

}


// save the data into file
function saveTasks (task){
    // save krte time hme ese string ya object me convert krna hoga ya json me convert krna bhi keh skte hai 
    fs.writeFileSync(filePath, JSON.stringify(task, null, 2));
}

// export the above function 
// to use above function in different file 
module.exports = {
    loadTasks, 
    saveTasks
}
