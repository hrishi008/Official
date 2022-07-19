// global scope 
var a=5;
let b=5;
const c=5;
doit= ()=>{ 
    var d=5;
    let e=6;
    const f=7;
    console.log(a);
    console.log(b);
    console.log(c);
}
doit2=()=>{
    a=10;
    b=20;
    // c=40;       it cant be redeclared
    // console.log(d);
    // console.log(e);
    // console.log(f);
    // not defined 
    console.log(this);
}
doit2();
doit();



 
