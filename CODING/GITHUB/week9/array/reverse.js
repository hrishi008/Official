// reverse an array
let a=["sanjay","ronak","rahul","raj","rishi","nikhil"];
const b=["sanjay","ronak","rahul","raj","rishi","nikhil"];
for(let i=0; i<=a.length-1; i++){
    a[i]=b[a.length-1-i];
    console.log(a[i]);
}
