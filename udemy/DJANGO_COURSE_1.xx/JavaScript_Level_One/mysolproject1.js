alert("welcome..lets have some questions");
var fn= prompt("whats your first name");
var ln= prompt("whats your last name");
var age= prompt("whats your age");
var height= prompt("whats your height in cm");
var pn= prompt("whats your pet name");
var fna= fn[0];
var lna= ln[0];
var y=0;

if (fna=lna)
{
    if(age < 30 && age > 20)
    {
        if(height>=170)
        {
            for (let index = 0; index < pn.length; index++) 
            {
                
                if (pn[index]!="p") 
                {
                   y=2;
                   return y;
                }       
                else{
                    y=1;
                    return y;
                
                }
            }
         

        }else{
          y=2;
        
        }
        

    }else{
       y=2;
    
    }
    
}
else{
   y=2;

}
if(y=1){
console.log("sucess");}
if(y=2){
console.log("fail");}