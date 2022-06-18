// var box= document.querySelector('input');
var x=true;
var box=document.getElementById('box');
function password(){
    if(x==true){
        box.setAttribute("type","text");
        x=false;
    }
   else{
    box.setAttribute("type","password");
    x=true;
   }

}