var a= prompt("enter a number");
displayOdd(a);
sumOddN(a);
function displayOdd(num){
    for(let i=1; i<=2*num-1; i=i+2){
        console.log(i);
    }
}
function sumOddN(num){
    let sum=0;
    for(let i=1; i<=2*num-1; i=i+2){
      sum=sum+i;
    }
    console.log("The sum of all these numbers is "+ sum);
}