// 1.An array is given, return the sum of all the positives numbers. const input = [ 1, -5, 2, 10, -30, 29, 50];
// ans 
const input = [ 1, -5, 2, 10, -30, 29, 50];
let sum=0;
function addition(){
    for(let i=0;i<=input.length-1;i++){
        if(input[i]>=0){
            sum=sum+input[i];
        }
    }
    return sum;
}
console.log(addition(input));