// Sum of even and product of odd digits of an number
let a=parseInt(prompt("Enter a number")); 
// let a=1213456;
sumOfEvenProductOfOdd(a);
function sumOfEvenProductOfOdd(num){
    let sum=0,product=1;
    while(num>0){
        let reminder=num%10;
        num=parseInt(num/10);
        if(reminder%2==0){
            sum=sum+reminder;
        }
        else{
            product=product*reminder;
        }
        
    }
    console.log(`sum of even digits= ${sum} and product of odd digits=${product}`);
}