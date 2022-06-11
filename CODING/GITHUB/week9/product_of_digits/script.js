let a=1234;
let mod=0;
let prdct=1;
while(a>0){
    mod=a%10;
    a=parseInt(a/10);
    prdct=prdct*mod;
}
console.log(prdct);