var a= prompt("enter a number");

checkPrime(a);
function checkPrime(num){
    var prime=true;
    for(i=2;i<a;i++){
        if(num%i==0){
                prime=false;
        }
    }
    prime?console.log("prime"):console.log("not prime");

}