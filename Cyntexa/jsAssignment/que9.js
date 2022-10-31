var timeForA=10*60*1000;
var timeForB=10*60*1000;var timeForC=10*60*1000;var timeForD=10*60*1000;
var invl;
function start(){
    document.getElementById('a').innerHTML=timeForA/1000;
    invl=setInterval(()=>{document.getElementById('a').innerHTML=(timeForB-1000)/1000+'<br>';timeForA=timeForA-1000;},1000);
}
function stopMe(id){
    if(id=='a'){

        clearInterval(invl);
        document.getElementById('a').innerHTML=timeForA/1000;
        invl=setInterval(()=>{document.getElementById('b').innerHTML=(timeForB-1000)/1000+'<br>';timeForB=timeForB-1000;},1000);
    }else if(id=='b'){
        clearInterval(invl);
        document.getElementById('b').innerHTML=timeForB/1000;
        invl=setInterval(()=>{document.getElementById('c').innerHTML=(timeForC-1000)/1000+'<br>';timeForC=timeForC-1000;},1000);
    }else if(id=='c'){
        clearInterval(invl);
        document.getElementById('c').innerHTML=timeForC/1000;
        invl=setInterval(()=>{document.getElementById('d').innerHTML=(timeForD-1000)/1000+'<br>';timeForD=timeForD-1000;},1000);
    }else if(id=='d'){
        clearInterval(invl);
        document.getElementById('d').innerHTML=timeForD/1000;
        invl=setInterval(()=>{document.getElementById('a').innerHTML=(timeForB-1000)/1000+'<br>';timeForA=timeForA-1000;},1000);
    }
    }