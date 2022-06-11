alert("pro duct of digits of a number");
let a=prompt("enter a number");
let mod=0;
let prdct=1;
while(a>0){
    mod=a%10;
    a=parseInt(a/10);
    prdct=prdct*mod;
}
console.log(prdct);