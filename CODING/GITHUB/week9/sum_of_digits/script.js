// sum of figit of given number
let digit=5555;
let sum=0;
while(digit>0){
     mod = digit%10;
    digit= parseInt(digit/10);
    sum=sum+mod;
}
console.log(sum);
