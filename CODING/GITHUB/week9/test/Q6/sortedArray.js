// Q. Find the nth largest element in a sorted array 
var a=[3,4,2,1,9,8,7,6,5];
let x=0;
while(x==0){
    for(let i=0;i<a.length;i++){
        if(a[i]>a[i+1]){
            let c=a[i+1];
            a[i+1]=a[i];
            a[i]=c;
            }
            if(check(a)==true){
                x=1;
              
        }
    }
}
console.log(a);
function check(arr){
    let x=true;
    for(let i= 0;i<arr.length;i++){
        if(arr[i]>arr[i+1]){
            x=false;
        }
    }
    return x;
}
let n=6;
console.log(a[a.length-n]);