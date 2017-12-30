var content = document.getElementById("content");
var button = documnet.getElementById("show-more");

button.onclick = function(){
  if(content.className = "open"){
    //shrink box
    content.className = "";
    button.innerHTML = "Show More";
  }else{
    //expand box
    content.className = "open";
    button.innerHTML = "Show Less";
  }
}