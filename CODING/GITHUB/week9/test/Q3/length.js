// Q. What is the length of these arraysA. var arr1 = [,,,]; B. var arr2 = new Array(3)C. var arr3 = [1,2,3,4,5]D. var array = [ [1,2,3], [4,5,6]  ];E. var array[0].length = [ [1,2,3], [4,5,6]  ];
//sol
var arr1 = [,,,];
var arr2 = new Array(3)
var arr3 = [1,2,3,4,5]
var arr4 = [ [1,2,3], [4,5,6]  ]
// var arr[0].length = [ [1,2,3], [4,5,6]  ]
// guesses= arr1=4; arr2=3; arr3=5; arr4=2; last option in my opinion is with some incorrect syntax.
// checking 
console.log(arr1.length,arr2.length,arr3.length,arr4.length);
// all the guesses were true exept arr1 its length is 3 