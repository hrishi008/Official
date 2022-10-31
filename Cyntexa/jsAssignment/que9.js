var timeForA=;
var timeForB=;var timeForC=;var timeForD=;
var invl;
document.getElementById('A').disabled=true;
document.getElementById('B').disabled=true;
document.getElementById('C').disabled=true;
document.getElementById('D').disabled=true;
function start(){
    var t=10;
        document.getElementById('a').innerHTML=timeForA/1000;
        invl=setInterval(()=>{document.getElementById('a').innerHTML='Total Time : '+(timeForA-1000)/1000+'Break Time :'+t;timeForA=timeForA-1000;t--;if(t==0){
            stopMe('a');
        }},1000);
        document.getElementById('A').disabled=false;
        document.getElementById('B').disabled=true;
        document.getElementById('C').disabled=true;
        document.getElementById('D').disabled=true;
}
function stopMe(id){
    if(id=='a'){
        var t=10;
        clearInterval(invl);
        document.getElementById('a').innerHTML=timeForA/1000;
        invl=setInterval(()=>{document.getElementById('b').innerHTML='Total Time : '+(timeForB-1000)/1000+'Break Time :'+t ;timeForB=timeForB-1000;t--;if(t==0){
            stopMe('b');
        }},1000);
        
        document.getElementById('A').disabled=true;
        document.getElementById('B').disabled=false;
        document.getElementById('C').disabled=true;
        document.getElementById('D').disabled=true;

        
    }else if(id=='b'){
        var t=10;
        clearInterval(invl);
        document.getElementById('b').innerHTML=timeForB/1000;
        invl=setInterval(()=>{document.getElementById('c').innerHTML='Total Time : '+(timeForC-1000)/1000+'Break Time :'+t ;timeForC=timeForC-1000;t--;if(t==0){
            stopMe('c');
        }},1000);
        
        document.getElementById('A').disabled=true;
        document.getElementById('B').disabled=true;
        document.getElementById('C').disabled=false;
        document.getElementById('D').disabled=true;

        
    }else if(id=='c'){
        var t=10;
        clearInterval(invl);
        document.getElementById('c').innerHTML=timeForC/1000;
        invl=setInterval(()=>{document.getElementById('d').innerHTML='Total Time : '+(timeForD-1000)/1000+'Break Time :'+t ;timeForD=timeForD-1000;t--;if(t==0){
            stopMe('d');
        }},1000);
        
        document.getElementById('A').disabled=true;
        document.getElementById('B').disabled=true;
        document.getElementById('C').disabled=true;
        document.getElementById('D').disabled=false;

        
    }else if(id=='d'){
        var t=10;
        clearInterval(invl);
        document.getElementById('d').innerHTML=timeForD/1000;
        invl=setInterval(()=>{document.getElementById('a').innerHTML='Total Time : '+(timeForA-1000)/1000+'Break Time :'+t ;timeForA=timeForA-1000;t--;if(t==0){
            stopMe('a');
        }},1000);
        
        document.getElementById('A').disabled=false;
        document.getElementById('B').disabled=true;
        document.getElementById('C').disabled=true;
        document.getElementById('D').disabled=true;

        
    }
    }
