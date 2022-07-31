var count=0;
document.getElementById('add').addEventListener('click',function(){
    count++;
    document.getElementById('insert').innerHTML=count;
})
document.getElementById('sub').addEventListener('click',function(){
    count--;
    document.getElementById('insert').innerHTML=count;
})