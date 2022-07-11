var car=document.querySelector('.mycar');
var road1=document.querySelector("#r1");
var road2=document.querySelector("#r2");
var road3=document.querySelector("#r3");
var left=document.querySelector(".left");
var right=document.querySelector(".right");
var all=document.querySelectorAll('img');
var tracks=document.querySelectorAll('.track');
var crash1=document.querySelector('#crash');
road1=road1.innerHTML;
road2=road2.innerHTML;
road3=road3.innerHTML;
var restarter=0;
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
        default:
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
        default:
            break;
    }
}
var dist1=document.querySelector('.move5');
var start=document.querySelector('#start');
var pause=start.innerHTML;
let i=0;
let p=0;
var pos=1000;
var pos2=position;
pause='Start';
while(i <=all.length-1){
    all[i].style.animationPlayState='paused';
    i++;
}
pos=position;
position=10;
while(p <=tracks.length-1){
    tracks[p].style.animationPlayState='paused';
    p++;
}

start.addEventListener('click',function(){
    var timenow=performance.now()-time;
    timenow=parseInt(timenow/1000)
    switch(pause){
        case'Start':
        pause='Play▷ ';
        car1.setAttribute('src','./media/mycar.png');
        while(i <=all.length-1){
            restarter= all[i].style.animation;
            all[i].style.animation='none';
            all[i].style.animation=restarter;
            restarter=0;
            all[i].style.animationPlayState='paused';
            i++;
           position=pos2;
           pos=1000;
        }
        while(p <=tracks.length-1){
            tracks[p].style.animationPlayState='paused';
            p++;
        }
        break;
        case'Pause':
        pause='Play▷ ';
        while(i <=all.length-1){
            all[i].style.animationPlayState='paused';
            i++;
        }
        pos=position;
        position=10;
        while(p <=tracks.length-1){
            tracks[p].style.animationPlayState='paused';
            p++;
        }
        break;
        case'Play▷ ':
        pause='Pause';
        while(i <=all.length-1){
            all[i].style.animationPlayState='running';
            i++;
           position=pos2;
           pos=1000;
        }
        while(p <=tracks.length-1){
            tracks[p].style.animationPlayState='running';
            p++;
        }
        break;
        
    }
   
    start.innerHTML=pause;
    i=0;
    p=0;
    console.log(pause);
})
var timenow=performance.now()-time;
timenow=parseInt(timenow/1000)
console.log(timenow);


var car1=document.querySelector('.mycar-1')
function crash(){
    car1.setAttribute('src','./media/crash.png');
    while(i <=all.length-1){
        all[i].style.animationPlayState='paused';
        i++;
    }
    pos=position;
    position=10;
    while(p <=tracks.length-1){
        tracks[p].style.animationPlayState='paused';
        p++;
    }
    pause='Start';
    start.innerHTML=pause;

    p=0;
    i=0;
    restarter=1;

}
crash1.addEventListener('click',function(){
    crash();
    console.log(timenow);
   
})

// crash 

