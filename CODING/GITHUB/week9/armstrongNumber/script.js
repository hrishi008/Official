// Checjk if the number is armstrong
// let a=parseInt(prompt("enter a number"));
let a=153;
checkArmStrong(a);
function checkArmStrong(num){
    let check=num;
    let sum=0;
    while(num>0){
        let rem=num%10;
        num=parseInt(num/10);
        sum=sum+rem*rem*rem;

    }
    if(sum==check){
        console.log("yes");
    }
    else{
        console.log("no");
    }
}
