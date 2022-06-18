// var box= document.querySelector('input');
var x=true;
var button=document.getElementById('show');
var box=document.getElementById('box');
function password(){
    if(x==true){
        box.setAttribute("type","text");
        button.innerText='Hide';
        x=false;
    }
   else{
    box.setAttribute("type","password");
    button.innerText='Show';
    x=true;
   }

}