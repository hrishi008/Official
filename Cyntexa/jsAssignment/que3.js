var arr=['a','b','c','d','e','a','b','f'];
for(let i=0;i<arr.length;i++){
    
for(let j=i;j<arr.length;j++){
    var count =0;
    if(i!=j&&arr[i]==arr[j]){
        count++;
    }
    if(count>0){
        console.log(`${arr[i]}:${count+1}`);
    }
}
}