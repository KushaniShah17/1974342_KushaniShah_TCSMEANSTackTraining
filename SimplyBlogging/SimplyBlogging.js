function addblog(){
    alert("Event generated...!");
        var title = document.getElementById("title").value;
        var desc = document.getElementById("desc").value;
        var imageinfo = document.getElementById("image").files[0].name
        console.log(title);
        console.log(desc);
        console.log(imageinfo);
        document.getElementById("titleinfo").innerHTML = title;
        document.getElementById("descinfo").innerHTML = desc;
        document.getElementById("imageinfo").src= imageinfo;
        var data = readFormData();
         blogObj.push(data)
         if(this.imageinfo && localStorage){
            window.localStorage.setItem(imageinfo, this.imageinfo)
            alert("image stored in loacl storage")
            showimages();
        }
        else{
            alert("not sucess")
        }
        
    }
var blogObj = [];
function storeinsession(){
sessionStorage.setItem("bloginfo", blogObj);
}
 function storefromsession(){
    var obj = sessionStorage.getItem("bloginfo");
    console.log(obj);
 }


function readFormData(){
    var obj = {} //empty object!
    obj.title = document.getElementById("title").value;
    obj.desc = document.getElementById("desc").value;
    obj.imageinfo = document.getElementById("imageinfo").src
    console.log(obj);
    return obj;

}

var reader = new FileReader();
reader.readAsDataURL(document.getElementById("image").files[0]);

function showimages(){
for(let i = 0; i<window.localStorage.length;i++){
let res = window.localStorage.getItem(window.localStorage.key(i))
var image = new Image()
image.src = res;
var imageinfo1 = document.getElementById("imageinfo");
imageinfo1.appendChild(image)

}
}
showimages();



   