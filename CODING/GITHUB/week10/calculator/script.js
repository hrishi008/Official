var scr=document.querySelector(".screen");
var btn1 = document.querySelector('#b1');
var btn2 = document.querySelector('#b2');
var btn3 = document.querySelector('#b3');
var btn4 = document.querySelector('#b4');
var btn5 = document.querySelector('#b5');
var btn6 = document.querySelector('#b6');
var btn7 = document.querySelector('#b7');
var btn8 = document.querySelector('#b8');
var btn9 = document.querySelector('#b9');
var btn10 = document.querySelector('#b10');
var btn11 = document.querySelector('#b11');
var btn12 = document.querySelector('#b12');
var btn13 = document.querySelector('#b13');
var btn14 = document.querySelector('#b14');
var btn15 = document.querySelector('#b15');
var btn16 = document.querySelector('#b16');
var btn17 = document.querySelector('#b17');
var btn18 = document.querySelector('#b18');
var btn19 = document.querySelector('#b19');
var btn20= document.querySelector('#b20');
var btn21= document.querySelector('#b21');
var fun = 0;
var y= 0;
var z=0;
btn1.addEventListener('click',function(){
    scr.textContent='';
    y=0;
    z=0;
    fun=0;
})
btn2.addEventListener('click',function(){
    z=scr.textContent;
    z=parseFloat(z);
    z=parseInt(z/10);
    scr.textContent=z;
    
})
btn3.addEventListener('click',function(){
    scr.textContent+='7';
})
btn4.addEventListener('click',function(){
    scr.textContent+='8';
})
btn5.addEventListener('click',function(){
    scr.textContent+='9';
})
btn6.addEventListener('click',function(){
    scr.textContent+='4';
})
btn7.addEventListener('click',function(){
    scr.textContent+='5';
})
btn8.addEventListener('click',function(){
    scr.textContent+='6';
})
btn9.addEventListener('click',function(){
    scr.textContent+='1';
})
btn10.addEventListener('click',function(){
    scr.textContent+='2';
})
btn11.addEventListener('click',function(){
    scr.textContent+='3';
})
btn12.addEventListener('click',function(){
    scr.textContent+='.';
})
btn13.addEventListener('click',function(){
    scr.textContent+='0';
})
btn14.addEventListener('click',function(){
    scr.textContent+='00';
})
btn15.addEventListener('click',function(){
    switch(fun){
        case 1:
            z= scr.textContent;
            z=parseFloat(z);
            z=z+y;
            y=0;
            scr.textContent=z;
            fun=0;
        break;
        case 2:
            z= scr.textContent;
            z=parseFloat(z);
            z=y-z;
            y=0;
            scr.textContent=z;
            fun=0;
        break;
        case 3:
            z= scr.textContent;
            z=parseFloat(z);
            z=z*y;
            y=0;
            scr.textContent=z;
            fun=0;
        break;
        case 4:
            z= scr.textContent;
            z=parseFloat(z);
            z=y/z;
            y=0;
            scr.textContent=z;
            fun=0;
        break;
        case 5:
            z=scr.textContent;
            z=parseFloat(z);
            z=y*z;
            scr.textContent=z;
        break;
        default:
        break;
}
})
btn16.addEventListener('click',function(){
    //+
    switch(fun){
        case 0:
            y= scr.textContent;
            y=parseFloat(y);
            fun=1;
            scr.textContent='';
            break;
        case 1:
            z=scr.textContent;
            z=parseFloat(z);
            z=z+y;
            fun=1;
            y=z;
            scr.textContent='';
            break;
        case 2:
            z=scr.textContent;
            z=parseFloat(z);
            z=y-z;
            fun=1;
            y=z;
            scr.textContent='';
            break;
        case 3:
            z= scr.textContent;
            z=parseFloat(z);
            z=z*y;
            fun=1;
            y=z;
        scr.textContent='';
            break;
        case 4:
            z=scr.textContent;
            z=parseFloat(z);
            z=y/z;
            fun=1;
            y=z;
            scr.textContent='';
            break;
        default:
            break;
    }
})
btn17.addEventListener('click',function(){
    //-
    switch(fun){
        case 0:
            y= scr.textContent;
            y=parseFloat(y);
            fun=2;
            scr.textContent='';
            break;
        case 1:
            z=scr.textContent;
            z=parseFloat(z);
            z=z+y;
            fun=2;
            y=z;
            scr.textContent='';
            break;
        case 2:
            z=scr.textContent;
            z=parseFloat(z);
            z=y-z;
            fun=2;
            y=z;
            scr.textContent='';
            break;
        case 3:
            z= scr.textContent;
            z=parseFloat(z);
            z=z*y;
            fun=2;
            y=z;
        scr.textContent='';
            break;
        case 4:
            z=scr.textContent;
            z=parseFloat(z);
            z=y/z;
            fun=2;
            y=z;
            scr.textContent='';
            break;
        default:
            break;
    }
})
btn18.addEventListener('click',function(){
    //*
    switch(fun){
        case 0:
            y= scr.textContent;
            y=parseFloat(y);
            fun=3;
            scr.textContent='';
            break;
        case 1:
            z=scr.textContent;
            z=parseFloat(z);
            z=z+y;
            fun=3;
            y=z;
            scr.textContent='';
            break;
        case 2:
            z=scr.textContent;
            z=parseFloat(z);
            z=y-z;
            fun=3;
            y=z;
            scr.textContent='';
            break;
        case 3:
            z= scr.textContent;
            z=parseFloat(z);
            z=z*y;
            y=z;
        scr.textContent='';
            break;
        case 4:
            z=scr.textContent;
            z=parseFloat(z);
            z=y/z;
            fun=3;
            y=z;
            scr.textContent='';
            break;
        default:
            break;
    }
})
btn19.addEventListener('click',function(){
    // devide
    switch(fun){
        case 0:
            y= scr.textContent;
            y=parseFloat(y);
            fun=4;
            scr.textContent='';
            break;
        case 1:
            z=scr.textContent;
            z=parseFloat(z);
            z=z+y;
            fun=4;
            y=z;
            scr.textContent='';
            break;
        case 2:
            z=scr.textContent;
            z=parseFloat(z);
            z=y-z;
            fun=4;
            y=z;
            scr.textContent='';
            break;
        case 3:
            z= scr.textContent;
            z=parseFloat(z);
            z=z*y;
            fun=4;
            y=z;
        scr.textContent='';
            break;
        case 4:
            z=scr.textContent;
            z=parseFloat(z);
            z=y/z;
            fun=4;
            y=z;
            scr.textContent='';
            break;
        default:
            break;
    }
})
btn20.addEventListener('click',function(){
    // square
    y= scr.textContent;
    y=parseFloat(y);
    y=y*y;
    scr.textContent=y;
    y=0;
 
})
btn21.addEventListener('click',function(){
    //root
    y= scr.textContent;
    y=parseFloat(y);
    y=Math.sqrt(y);
    scr.textContent=y;
    y=0;
   
})

