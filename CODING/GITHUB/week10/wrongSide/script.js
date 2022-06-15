var car=document.querySelector('.mycar');
var road1=document.querySelector("#r1");
var road2=document.querySelector("#r2");
var road3=document.querySelector("#r3");
var left=document.querySelector(".left");
var right=document.querySelector(".right");
road1=road1.innerHTML;
road2=road2.innerHTML;
road3=road3.innerHTML;
var position=2;
const time=performance.now();
left.addEventListener('click',function(){
    switch(position){
        case 1:
        move();    
        break;
        case 2:
            position=1;
            move();
            break;
        case 3:
            position=2;
            move();
            break;
            }
            return position;
            


})
right.addEventListener('click',function(){
    switch(position){
        case 1:
            position=2;
            move();
            break;
        case 2:
            position=3;
            move();
            break;
        case 3:
        move();    
        break;
            }
            return position;


})
function move(){
    switch(position){
        case 1:
            car.setAttribute('id','p1')
            break;
        case 2:
            car.setAttribute('id','p2')
            break;
        case 3:
            car.setAttribute('id','p3')
            break;
    }
}
var dist1=document.querySelector('.move5');
console.log(dist1);
var start=document.querySelector('#start');
start.addEventListener('click',function(){
    var timenow=performance.now()-time;
    timenow=parseInt(timenow/1000)
    console.log(timenow);
  
})
var timenow=performance.now()-time;
timenow=parseInt(timenow/1000)
console.log(timenow);
if(timenow==7){
    crash();
}
let p=0;

var car1=document.querySelector('.mycar-1')
function crash(){
    car1.setAttribute('src','./media/crash.png');
    console.log(car1.getAttribute('src'));
}


