class mobileBrand{
    brandName;
    brandPrice;
    brandRating;
    static catagory;
    constructor(x,y,z){
        this.brandName=x;
        this.brandPrice=y;
        this.brandRating=z;
        mobileBrand.catagory='electronics';
    }
    display(){
        console.log(this.brandName,this.brandPrice,this.brandRating,mobileBrand.catagory);
    }
}
var iphone= new mobileBrand('apple',19000,5);
iphone.display();

