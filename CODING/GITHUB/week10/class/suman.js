// What are methods:
// the actions which you can perform on an object
// methods is a property containing fxn definition
let name = 'Suman';
let arr = ['suman', 18];
console.log(arr[0]);
let details = {
  name: 'Suman',
  age: '18',
  fullName: function () {
    console.log('Suman');
  },
};
details.fullName();

let maid = {
  task1: 'cooking',
  task2: 'cleanings',
  calling: function () {
    console.log('she cooks and cleans');
  },
  askHerToShop: function () {
    console.log('she shops the groceries for home');
  },
  isPresent: function () {
    console.log('Yes');
  },
};
maid.isPresent();

let human = {
  doesWalks: function () {
    console.log('yes');
  },
  ifTalks: function () {
    console.log('Yes');
  },
  doesFly: function () {
    console.log('No');
  },
};

human.ifTalks();

let num = ['2'];
let res = Array.isArray(num);
console.log(res);

// concat()

let first = [1, 2, 3];
let sec = [4, 5, 6];
let third = [7, 8, 9];
let merge = first.concat(sec, third);

console.log(first, sec, merge);

// join(): joins all the elements of any array using a separator and it returns a string
const values = [12, 3, 4, 5];
const joined = values.join('-');
console.log(values);

// includes(): an element is present inside the array or not
// it returns boolean values
let inc = values.includes(2);
console.log(inc);

// indexOf(): it returns the first occurence of an element in an array
// it tells you the index position of an element
let sectionA = ['ashu', 'ram', 'shayn', 'ram', 'ram'];
let first = sectionA.indexOf('ram'); //1

let last = sectionA.lastIndexOf('ram'); //4
console.log(val1);

//lastIndexOf(): helps find the last occurence of an element in array
// if element not present, give -1

// reverse(): reverses the position of the elments
let names1 = [1, 2, 3];
console.log(names1.reverse());
console.log(names1);