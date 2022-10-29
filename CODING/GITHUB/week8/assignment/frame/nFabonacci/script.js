var a=prompt("Enter a number");
nFabonacci(a);
function nFabonacci(num){
    var a=0;
    var b=1;
    var c=0;
    for(let i=1;i<=num;i++){

               if (i==1) {
                    c=a;       
               }
               if(i==2){
                   c=b;
               }
               if(i>=3){
                   c=a+b;
                   a=b;
                   b=c;
               }
               console.log(c);
    }
}
