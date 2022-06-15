var card=document.querySelector('#notes');
var msg=document.querySelector('#msg').value;
var done=document.querySelector('#done');
var box=document.querySelector("#box");
var add=document.querySelector("#add");
add=add.innerHTML;
console.log(msg);
let i=0;
let l=2;


    done.addEventListener('click',function(){
        
        for(i=0;i<l;i++){
        card.innerHTML=`${i}${msg}`;
        console.log(msg);
        }
        l=l+1; 
    })
