var box = document.querySelectorAll("td");
var restart= document.querySelector("button")
restart.addEventListener("click",function(){
    for(i=0;i<box.length;i++){
        box[i].textContent='';
    }
});

function changeMaker(){
    if(this.textContent==='X'){
        this.textContent='';
    }
    else if(this.textContent=='O'){
        this.textContent='X';
    }
    else{
        this.textContent='O';
    }
}
for(i=0;i<box.length;i++){
    box[i].addEventListener('click',changeMaker)
}
