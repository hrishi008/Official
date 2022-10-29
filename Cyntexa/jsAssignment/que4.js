var arr=[2,4,3,5,3,6,8,5,3,5,7,4];
var max=-900;
for(let i=0;i<arr.length;i++){
    if(max<arr[i]){
        max=arr[i];
    }
}
console.log(max);