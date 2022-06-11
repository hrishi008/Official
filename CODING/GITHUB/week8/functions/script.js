var a= prompt('what is your age');
var b= confirm('do you want to know your catagory?');
function doIt(x){
    let y=0;
    if(x>0 && x<=10){
        y=1;
    }
    if(x>10 && x<=20){
        y=2;
    }
    if(x>20 && x<=30){
        y=3;
    }
    if(x>30 && x<=50){
        y=4;
    }
    if(x>50 && x<=120){
        y=5;
    }
    switch (y) {
       
    case 0:
    alert('born');
    break;
    case 1:
    alert('kid');
    break;
    case 2:
    alert('teen');
    break;
    case 3:
    alert('adult');
    break;
    case 4:
    alert('settle');
    break;   
    case 5:
    alert('old');
    break;                   
    default:
    alert('old');
    break;
    }
}
if(b){
    doIt(a);
}
else{
    alert('have a nice day');
} 