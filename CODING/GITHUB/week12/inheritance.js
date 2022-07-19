class animal{
    speak;
    run;
    constructor(x,y){
        this.speak=x;
        this.run=y;
    }
    display(){
        console.log(this.speak,this.run,this.bark);
    }

}
class dog extends animal{
    bark;
    constructor(x,y,z){
        super(x,y);
        this.bark=true;
    }
    display2(){
        console.log(this.speak,this.run,this.bark);
    }
}
var dont=new dog(1,1,true);
dont.display2();
