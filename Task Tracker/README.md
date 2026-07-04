task-tracker-cli/
│
├── task-cli.js          # Main entry point
├── taskManager.js       # All task logic
├── fileHandler.js       # Read/write JSON and save data in tasks.json
├── utils.js             # Helper functions
├── tasks.json           # Database (created automatically)
├── package.json
├── README.md
└── .gitignore 




# every task should look like this
{
  "id": 1,
  "description": "Buy groceries",
  "status": "todo",
  "createdAt": "2026-07-02T10:30:00Z",
  "updatedAt": "2026-07-02T10:30:00Z"
}


# commmand 
# Adding a new task
task-cli add "Buy groceries"
# Output: Task added successfully (ID: 1)

# Updating and deleting tasks
task-cli update 1 "Buy groceries and cook dinner"
task-cli delete 1

# Marking a task as in progress or done
task-cli mark-in-progress 1
task-cli mark-done 1

# Listing all tasks
task-cli list

# Listing tasks by status
task-cli list done
task-cli list todo
task-cli list in-progress



Task Properties
Each task should have the following properties:

id: A unique identifier for the task

description: A short description of the task

status: The status of the task (todo, in-progress, done)

createdAt: The date and time when the task was created

updatedAt: The date and time when the task was last updated

Make sure to add these properties to the JSON file when adding a new task and update them when updating a task.






node task-cli.js add "Learn Node"

↓

Read command

↓

Read JSON

↓

Modify data

↓

Save JSON

↓

Print Success




# Edge Cases

Handle these gracefully:

tasks.json doesn't exist → Create it automatically.
Invalid command → Show a help message.
Missing task description → Show an error.
Task ID not found → Inform the user.
Empty task list → Display "No tasks found."