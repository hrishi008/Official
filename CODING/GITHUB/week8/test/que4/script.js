// first n prime numbers
var a=prompt("enter a number");
firstNPrime(a);
function firstNPrime(num){
    var count=0;
    for(let i=2;i<=1000;i++){
        function checkPrime(num){
            var prime=true;
            for(let p=2;p<i;p++){
                if(i%p==0){
                    prime=false;
                }
            }
            return(prime);
        }
        var prime=checkPrime(i);
        if(prime==true){
            count++;
        }
        if(count==num){
            alert(i);
            break;
        }
    }
}