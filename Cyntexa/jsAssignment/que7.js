var x=`cat`;
var y='at';
var count=0;
x=x.split('').reverse();
y=y.split('').reverse();
function check(x,y){
    if(x.length>y.length){
       x.pop();count++;check(x,y);
    }else if(x.length<y.length){
        y.pop();count++;check(x,y);
    }else{
        if(x==y){
            console.log(count);
        }else{
            x.pop();y.pop();count++;count++;check(x,y);
        }
    }
    console.log(count);
}
check(x,y);
