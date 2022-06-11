n=prompt("enter a number");
for(let i=2;i<n;i++){
    if(n%i==0){
        n=1;
        break;
    }
    else{
        n=2;
    }
}
if(n==1){
    console.log("prime number");
}
else{
    console.log("not prime");
}