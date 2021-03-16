window.addEventListener('load', () =>{
    const clientname =localStorage.getItem('CLIENTNAME'); 
    
     const projectname = localStorage.getItem('PROJECTNAME');
     
     const budget = localStorage.getItem('Budget');
     

     document.getElementById("result-client").innerHTML = clientname;
     document.getElementById("result-project").innerHTML = projectname;
     document.getElementById("result-budget").innerHTML = budget;

    var data = readFormData(data);
   var data = insertNewRecord(data);
    console.log(obj);
 });
 
 function readFormData(){
    var obj = {} //empty object!
    obj.projectname = document.getElementById("ClientName");
    obj.clientname = document.getElementById("ProjectName");
    obj.budget = document.getElementById("Budget");
    console.log(obj);
    return obj;

}
 
function insertNewRecord(){
    var table = document.getElementById("FinanaceTemaDetails");
    var body = table.getElementsByTagName("tbody")[0];

    var newRow = body.insertRow(body.length); //row created

    var cell1 = newRow.insertCell(0); //cell created
    cell1.innerHTML = data.clientname; //value placed

    var cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.projectname;

    var cell2 = newRow.insertCell(2);
    cell2.innerHTML = data.budget;
}

