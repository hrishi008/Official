// Sum of square of digits of a nmber
let a=parseInt(prompt("enter a number"));
// let a=123456;
squareOfDigits(a);
function squareOfDigits(num){
    let sum=0;
    while(num>0){
        let rem=num%10;
        num=parseInt(num/10);
        sum=sum+rem*rem;

    }
    console.log(sum);
}