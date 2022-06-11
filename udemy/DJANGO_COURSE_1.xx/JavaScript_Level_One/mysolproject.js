alert("welcome..lets have some questions");
var fn= prompt("whats your first name");
var ln= prompt("whats your last name");
var age= prompt("whats your age");
var height= prompt("whats your height in cm");
var pn= prompt("whats your pet name");
var y=0;
var fnv=true;
var agev=true;
var heightv=true;
var pnv=true;

if(fn[0]=ln[0] )
{
    fnv=true;
}
else{
    fnv=false;
}
if(age>20 && age<30)
{
    agev=true;
}
else{
    agev=false;
}
if(height>=170)
{
    heightv=true;
}
else{
    heightv=false;
}
for(let i=0;i<pn.length;i++)
{
if(pn[i]==="y")
{
    pnv= true;
}
else{
    pnv=false;
}
}
if(fnv && agev && heightv && pnv )
{
    console.log("success");
}
else
{
    console.log("fail");
}

