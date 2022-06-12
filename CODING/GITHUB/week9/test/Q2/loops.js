//Q. In how many ways can we loop in an array describe each with an example ?
// methodes for looping an array
// 1. for loop simple methode : in this methode we give a for loop from index value 0 to index value 1 less than length of an Array
// example
let array = [1,2,3,4,5,6];
for(let i=0;i<array.length;i++){
    console.log('methode1',array[i]);
}
console.log('------------');
// 2. for loop of methode : in this methode we use for loop but this time simply saying <variable name> of <array name>
// example
for(let elements of array){
    console.log('methode2',elements);
}
console.log('------------');
// 3.While loops: in this methode we use index and increase it ato loop uur array
// Example 
let index=0;
while(index<array.length){
    console.log('methode3',array[index]);
    index++;
}
console.log('------------');
// there are also more methodes like map and forEach which carries for complex structred loop