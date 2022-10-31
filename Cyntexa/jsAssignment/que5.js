var order=true;
function print(){
    document.getElementById('display').innerHTML='';
var str= document.getElementById('str');
str=str.value.split(',');
var price= document.getElementById('price');
price=price.value.split(',');

var listofdata=[];
for(let i=0;i<str.length;i++){
    listofdata.push(str[i]+' :'+price[i]+'<br>');
    document.getElementById('display').innerHTML+=str[i]+' :'+price[i]+'<br>';
}
if(str.length!=price.length){
    document.getElementById('display').innerHTML=`<h1 style='color: red'>ERROR</h1>`;
}

}
function sortname(){
var listofdata=[];
var str= document.getElementById('str');
str=str.value.split(',');
var price= document.getElementById('price');
price=price.value.split(',');
for(let i=0;i<str.length;i++){
    listofdata.push(str[i]+' :'+price[i]+'<br>');
    document.getElementById('display').innerHTML+=str[i]+' :'+price[i]+'<br>';
}

    listofdata.sort();
    if(order){
        listofdata.reverse();
        order=false;
    }else{
        order=true;
    }
    document.getElementById('display').innerHTML=listofdata.join('');
    console.log(listofdata.join('')); 
    if(str.length!=price.length){
        document.getElementById('display').innerHTML=`<h1 style='color: red'>ERROR</h1>`;
    }

}
function sortprice(){
    var listofdata=[];
var str= document.getElementById('str');
str=str.value.split(',');
var price= document.getElementById('price');
price=price.value.split(',');
for(let i=0;i<str.length;i++){
    listofdata.push(str[i]+' :'+price[i]+'<br>');
    document.getElementById('display').innerHTML+=str[i]+' :'+price[i]+'<br>';
}

    listofdata.sort(function(a,b){return parseInt(a)-parseInt(b)});
    if(order){
        listofdata.reverse();
        order=false;
    }else{
        order=true;
    }
    document.getElementById('display').innerHTML=listofdata.join('');
    console.log(listofdata.join(''));
    if(str.length!=price.length){
        document.getElementById('display').innerHTML=`<h1 style='color: red'>ERROR</h1>`;
    }

}
