var phones={
    item1:{name:'iphone13',brand:'apple',ratings:[4,4,4,5,4,5],reviews:['good','better','best'],hardware:{ram:'4gb',rom:'64gb'}},
    item2:{name:'galaxy7',brand:'samsung',ratings:[3,4,4,4,4,5],reviews:['not good','better','not best'],hardware:{ram:'6gb',rom:'128gb'}}
}
var products = [
    {
      brand: "Apple",
      pname: "Iphone 12 Pro",
      price: 110000,
    },
    {
      brand: "Apple",
      pname: "Iphone 13 Pro",
      price: 130000,
    },
    {
      brand: "Apple",
      pname: "Iphone 11 Pro",
      price: 10000,
    },
    {
      brand: "Samsung",
      pname: "Galaxy ",
      price: 110000,
    },
    {
      brand: "Samsung",
      pname: "Note 9",
      price: 90000,
    },
    {
      brand: "Vivo",
      pname: "vivo A23",
      price: 60000,
    },
  ];

products=products.filter(function(e,i){
return e.brand=='Apple'

})
console.log(products);

     