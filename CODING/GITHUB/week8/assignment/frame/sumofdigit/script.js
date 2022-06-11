// sum of figit of given number
alert("Sum of digits of a number");
let digit=prompt("enter a number");
let sum=0;
while(digit>0){
     mod = digit%10;
    digit= parseInt(digit/10);
    sum=sum+mod;
}
console.log(sum);
