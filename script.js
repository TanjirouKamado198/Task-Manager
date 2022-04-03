function show(){
  var x = document.getElementById("box").value;
  var ul = document.getElementById("item_show");
var li = document.createElement("li");
var editbtn= document.createElement("button");
var deletebtn= document.createElement("button");
li.className = "styling_li";
editbtn.className = "edit"
deletebtn.className = "del"

document.getElementById("box").value = "";
editbtn.appendChild(document.createTextNode("edit"));
deletebtn.appendChild(document.createTextNode("delete"));
li.appendChild(document.createTextNode(x));
li.appendChild(editbtn);
li.appendChild(deletebtn);
ul.appendChild(li);
deletebtn.addEventListener("click", rem_item);
editbtn.addEventListener("click", edit_item);

}

function rem_item(e){
item_show.removeChild(e.target.parentNode);
  
}
function edit_item(e){
var content = e.target.parentNode.childNodes[0].data;
document.getElementById("box").value = content;
item_show.removeChild(e.target.parentNode);
}

