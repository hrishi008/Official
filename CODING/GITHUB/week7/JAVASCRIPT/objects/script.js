var box = {a:"1st option",b:[1,2,3],c:{d:["name",{e:"yes"}]}}
for(var key in box){
    console.log(box[key]);
}
var matrix= {0:[1,2,3],1:[4,5,6],2:[7,8,9]}
for(key in matrix){
    for(let i=0;i<=2;i++){
        console.log(matrix[key][i]);
    }
}
