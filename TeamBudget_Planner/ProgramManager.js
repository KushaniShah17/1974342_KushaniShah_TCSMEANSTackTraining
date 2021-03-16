
 function onSubmit(){
     const ClientName = document.getElementById("ClientName").value;
     const ProjectName = document.getElementById("ProjectName").value;
     const Budget = document.getElementById("Budget").value;

     localStorage.setItem("CLIENTNAME", ClientName);
     JSON.stringify(ClientName);
     localStorage.setItem("PROJECTNAME", ProjectName);
     JSON.stringify(ProjectName);
     localStorage.setItem("Budget", Budget);
     JSON.stringify(Budget);
     var data = readFormData(data);
 }

 function readFormData(){
    var obj = {} //empty object!
    obj.ClientName = document.getElementById("ClientName").value;
    obj.ProjectName = document.getElementById("ProjectName").value;
    obj.Budget = document.getElementById("Budget").value;
    console.log(obj);
    return obj;

}