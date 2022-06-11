// Sum of cube of digits of a nmber
let a=parseInt(prompt("enter a number"));
// let a=123;
cubeOfDigits(a);
function cubeOfDigits(num){
    let sum=0;
    while(num>0){
        let rem=num%10;
        num=parseInt(num/10);
        sum=sum+rem*rem*rem;

    }
    console.log(sum);
}