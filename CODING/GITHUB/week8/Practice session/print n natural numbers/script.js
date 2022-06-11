// // first n natural numbers
// let n=prompt("enter a number");
// function naturalNumber(n){
//     let i=1;
// while(i<=n){
//     console.log(i);
//     i++;
// }
// }
// naturalNumber(n);
// //E:\GEEKSTER\CODING\GITHUB\week8\Practice session\print n natural numbers\script.js
// to print sum of first n numbers
let n=prompt("enter a number");
let i=0;
let fact=1;
for(i=1;i<=n;i++){
    fact=fact*i;
}
console.log(fact);