var x=`cat`;
var y='tat';

var count=0;
x=x.split('').reverse();
y=y.split('').reverse();
var p=x;
var q=y;
function check(x,y){
    if(x.length>y.length){
        x.pop();count++;
    
    check(x,y);
}else{
    if(x.length<y.length){
        y.pop();count++;
        
        check(x,y);
    }else{
        x.pop();y.pop();
        count=count+2;
    }
}
}
check(x,y);
if(x==y){
    console.log(count);
}else{
    check(p.reverse(),q.reverse());
    console.log(count);
}
