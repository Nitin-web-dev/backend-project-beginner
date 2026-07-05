/// identify which operation to perform add update read or delete in this file or all tasks logic

function AddTasks (message)  {
    return {
    id :1,
    description: message,
    Status : "todo",
    createdAt : new Date(),
    }
}


module.exports  = {
    AddTasks
}