let http = require("http");
let url = require("url");
let fs = require("fs");
let port=9999;
// create array Task array 
let taskinfo = `<form>
<h2 style="text-align: center;">
   Task Planner
</h2>
<h3 style="text-decoration: underline;">Add Task</h3>
<label>EmpID:</label>
<input type="text" name="empid" id="empid"><br/> <br/> 
<label>TaskID:</label>
<input type="text" name="taskid" id="taskid"><br/> <br/>
<label >Task:</label>
<input type="text" name="task" id="task" style="margin-left: 14px;"><br/> <br/>
<label>Deadline:</label>
<input type="date" name="deadline" id="deadline"><br/> <br/>
<input type="button" value="Add Task"><br/> <br/>

<h3 style="text-decoration: underline;">Delete Task</h3>
<label>TaskID:</label>
<input type="text" name="taskid" id="taskid">
<input type="button" value="Delete Task"><br/> <br/>
<h3 style="text-decoration: underline;">List Task</h3>
`
let tableinfo = `  
<table border="1">
<tr>
    <th>${mployeeID}</th>
    <th>${TaskID}</th>
    <th>${Tasks}</th>
    <th>${Deadline}</th>
</tr>`
let server = http.createServer((req,res)=> {
    console.log(req.url)
    if(req.url != "/favicon.ico"){
    
        if(req.url=="/store"){
            let data = url.parse(urlDetails,true).query;
            var addTodo = (title) => {
                var todos = fetchTodos();
                var todo = {
                    title
                };
                res.end(taskinfo);
              
                var duplicatetodos = todos.filter(
                    (todo) => todo.title === title);
              
                if (duplicatetodos.length === 0) {
                    todos.push(todo);
                    saveTodos(todos);
                    return todo;
                }
            };
        }else if(req.url=="/delete"){
            var deleteTodo = (title) => {
                var todos = fetchTodos();
                var filteredtodos = todos.filter(
                    (todo) => todo.title !== title);
                saveTodos(filteredtodos);
              
                return todos.length !== filteredtodos.length;
            }; 
        }else if(req.url=="/display"){
            var listTodos = () => {
                return fetchTodos();
                
            };
            res.end(tableinfo);
        }
    }
    // Utility functions
var fetchTodos = () => {
    try {
        var todosString = 
            fs.readFileSync('tasks-data.json');
        return JSON.parse(todosString);
    } catch (e) {
        return [];
    }
};
  
var saveTodos = (todos) => {
    fs.writeFileSync('tasks-data.json', 
        JSON.stringify(todos));
};
    
});

server.listen(port,()=>console.log(`Server running on port number ${port}`));

    

