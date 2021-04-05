let fs = require("fs");
let obj = require("readline-sync");
let id = obj.question("Enter the id:");
console.log("Your id is "+id);
debugger;
let name = obj.question("Enter the name:");
debugger;
console.log("Your name is "+name);

let salary = obj.question("Enter the salary:");
debugger;
console.log("Your name is "+salary);


let ts = Date.now();
let date_ob = new Date(ts);
let date = date_ob.getDate();
let month = date_ob.getMonth() + 1;
let year = date_ob.getFullYear();
let hours = date_ob.getHours();
let minutes = date_ob.getMinutes();
let seconds = date_ob.getSeconds();
debugger;
console.log("Date and Time you logged data is : " +year + "-" + month + "-" + date+ " " + hours + ":" + minutes + ":" + seconds);

let emp1 = new Array();
emp1.push(id);
emp1.push(name);
emp1.push(salary);
//convert json to string
var empString = JSON.stringify(emp1);
fs.writeFile("Details.json",empString, (err)=>{
    if(!err){
        console.log("Record stored successfully..!")
    }
})
debugger;
fs.readFile("Details.json", (err,data)=>{
    if(!err){
        console.log(data.toString());
        //  let empString = data.toString();
        // let empJson = JSON.parse(empString);
        //  console.log("Id is " +empJson.id);
        //  debugger;
        //  console.log("Name is " +empJson.name);
        //  debugger;
        // console.log("Salary is " +empJson.salary);
    }
})