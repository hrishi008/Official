
function doit(){
    var input=document.getElementById('inp').value;
  
    input=input.split(',');
    let max=input[0];
    let index=0;
    for(let i=0;i<input.length;i++){
        if(max.length<input[i].length){
            max=input[i];
            index=i;
        }
    }
    console.log(max)

}