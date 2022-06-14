var read=document.querySelector("#msg");
var card=document.querySelector('#notes');
var msg=document.querySelector('#msg');
var done=document.querySelector('#done');
var box=document.querySelector("#box");
var add=document.querySelector("#add");
add=add.innerHTML;
var pureText=read.textContent;
let i=0;
let l=2;


    done.addEventListener('click',function(){
        
        for(i=0;i<l;i++){
        card.innerHTML=`${i}${pureText}`;
        }
        l=l+1;
    })
