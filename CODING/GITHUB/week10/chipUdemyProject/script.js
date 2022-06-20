var buttons=$('.buttons');
var chips=$('.chips');
var turn=document.querySelector('#turn');
var index;
var i=0;
var y=0;
var begin1=7;
var begin2=7;
var begin3=7;
var begin4=7;
var begin5=7;
var begin6=7;
var begin7=7;
var begin8=7;
var begin9=7;
var begin10=7;
var player=0;
var win=[3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3];
var chipSet={
  col1 : [0,10,20,30,40,50,60,70],
  col2 : [1,11,21,31,41,51,61,71],
  col3 : [2,12,22,32,42,52,62,72],
  col4 : [3,13,23,33,43,53,63,73],
  col5 : [4,14,24,34,44,54,64,74],
  col6 : [5,15,25,35,45,55,65,75],
  col7 : [6,16,26,36,46,56,66,76],
  col8 : [7,17,27,37,47,57,67,77],
  col9 : [8,18,28,38,48,58,68,78],
  col10 : [9,19,29,39,49,59,69,79]
}
buttons.eq(0).click(function (){

i=0;
 y=chipSet.col1[begin1];
          y=parseInt(y);
           if(player==0){
             turn.innerText='it is p2`s tern';
    chips.eq(y).css('background-color','red');
    win[y]=1;
    player=1;
    check();
      
  }
  else{
    chips.eq(y).css('background-color','blue');
    win[y]=0;
    player=0;
    check();
    turn.innerText='it is p1`s tern';
  }
          begin1--;

})
buttons.eq(1).click(function (){
  i=1;
   y=chipSet.col2[begin2];
          y=parseInt(y);
           if(player==0){
             turn.innerText='it is p2`s tern';
    chips.eq(y).css('background-color','red');
     win[y]=1;
    player=1;
    check();
       
  }
  else{
    chips.eq(y).css('background-color','blue');
    win[y]=0;
    turn.innerText='it is p1`s tern';
    player=0;
    check();
  }
          begin2--;
  console.log(i);
  })
  buttons.eq(2).click(function (){
    i=2;
     y=chipSet.col3[begin3];
          y=parseInt(y);
           if(player==0){
             turn.innerText='it is p2`s tern';
    chips.eq(y).css('background-color','red');
     win[y]=1;
    player=1;
    check();
        
  }
  else{
    chips.eq(y).css('background-color','blue');
    win[y]=0;
     turn.innerText='it is p1`s tern';
    player=0;
    check();
  }
          begin3--;
    })
    buttons.eq(3).click(function (){
      i=3;
       y=chipSet.col4[begin4];
          y=parseInt(y);
           if(player==0){
             turn.innerText='it is p2`s tern';
    chips.eq(y).css('background-color','red');
     win[y]=1;
    player=1;
    check();
        
  }
  else{
    chips.eq(y).css('background-color','blue');
    win[y]=0;
     turn.innerText='it is p1`s tern';
    player=0;
    check();
  }
          begin4--;
      })
      buttons.eq(4).click(function (){
        i=4;
         y=chipSet.col5[begin5];
          y=parseInt(y);
           if(player==0){
             turn.innerText='it is p2`s tern';
    chips.eq(y).css('background-color','red');
     win[y]=1;
    player=1;
    check();
        
  }
  else{
    chips.eq(y).css('background-color','blue');
    win[y]=0;
     turn.innerText='it is p1`s tern';
    player=0;
    check();
  }
          begin5--;
        })
        buttons.eq(5).click(function (){
          i=5;
           y=chipSet.col6[begin6];
          y=parseInt(y);
           if(player==0){
             turn.innerText='it is p2`s tern';
    chips.eq(y).css('background-color','red');
     win[y]=1;
    player=1;
    check();
        
  }
  else{
    chips.eq(y).css('background-color','blue');
    win[y]=0;
     turn.innerText='it is p1`s tern';
    player=0;
    check();
  }
          begin6--;
          })
          buttons.eq(6).click(function (){
            i=6;
             y=chipSet.col7[begin7];
          y=parseInt(y);
           if(player==0){
             turn.innerText='it is p2`s tern';
    chips.eq(y).css('background-color','red');
     win[y]=1;
    player=1;
    check();
        
  }
  else{
    chips.eq(y).css('background-color','blue');
    win[y]=0;
     turn.innerText='it is p1`s tern';
    player=0;
    check();
  }
          begin7--;
            })
            buttons.eq(7).click(function (){
              i=7;
               y=chipSet.col8[begin8];
          y=parseInt(y);
           if(player==0){
             turn.innerText='it is p2`s tern';
    chips.eq(y).css('background-color','red');
     win[y]=1;
    player=1;
    check();
        
  }
  else{
    chips.eq(y).css('background-color','blue');
    win[y]=0;
     turn.innerText='it is p1`s tern';
    player=0;
    check();
  }
          begin8--;
              })
              buttons.eq(8).click(function (){
                i=8;
                 y=chipSet.col9[begin9];
          y=parseInt(y);
           if(player==0){
             turn.innerText='it is p2`s tern';
    chips.eq(y).css('background-color','red');
     win[y]=1;
    player=1;
    check();
        
  }
  else{
    chips.eq(y).css('background-color','blue');
    win[y]=0;
     turn.innerText='it is p1`s tern';
    player=0;
    check();
  }
          begin9--;
                })
                buttons.eq(9).click(function (){
                  i=9;
                   y=chipSet.col10[begin10];
          y=parseInt(y);
           if(player==0){
             turn.innerText='it is p2`s tern';
    chips.eq(y).css('background-color','red');
     win[y]=1;
    player=1;
    check();
        
  }
  else{
    chips.eq(y).css('background-color','blue');
    win[y]=0;
     turn.innerText='it is p1`s tern';
    player=0;
    check();
  }
          begin10--;
                  })
let x=0;       
                                                    
function check(){
  for(let z=70;z<77;z++){
    if(win[z]==win[z+1]&&win[z+1]==win[z+2]&&win[z+2]==win[z+3]&&win[z]!=3){
     if(player==0){
  alert('player 2 wins');
}                        
else{
  alert('player 1 wins')
} 
        }
      }
      for(let z=60;z<67;z++){
        if(win[z]==win[z+1]&&win[z+1]==win[z+2]&&win[z+2]==win[z+3]&&win[z]!=3){
         if(player==0){
  alert('player 2 wins');
}                        
else{
  alert('player 1 wins')
} 
            }
          }
          for(let z=50;z<57;z++){
            if(win[z]==win[z+1]&&win[z+1]==win[z+2]&&win[z+2]==win[z+3]&&win[z]!=3){
             if(player==0){
  alert('player 2 wins');
}                        
else{
  alert('player 1 wins')
} 
                }
              }
              for(let z=40;z<47;z++){
                if(win[z]==win[z+1]&&win[z+1]==win[z+2]&&win[z+2]==win[z+3]&&win[z]!=3){
                 if(player==0){
  alert('player 2 wins');
}                        
else{
  alert('player 1 wins')
} 
                    }
                  }
                  for(let z=30;z<37;z++){
                    if(win[z]==win[z+1]&&win[z+1]==win[z+2]&&win[z+2]==win[z+3]&&win[z]!=3){
                     if(player==0){
  alert('player 2 wins');
}                        
else{
  alert('player 1 wins')
} 
                        }
                      }
                      for(let z=20;z<27;z++){
                        if(win[z]==win[z+1]&&win[z+1]==win[z+2]&&win[z+2]==win[z+3]&&win[z]!=3){
                         if(player==0){
  alert('player 2 wins');
}                        
else{
  alert('player 1 wins')
} 
                            }
                          }
                          for(let z=10;z<17;z++){
                            if(win[z]==win[z+1]&&win[z+1]==win[z+2]&&win[z+2]==win[z+3]&&win[z]!=3){
                             if(player==0){
  alert('player 2 wins');
}                        
else{
  alert('player 1 wins')
} 
                                }
                              }
                              for(let z=0;z<7;z++){
                                if(win[z]==win[z+1]&&win[z+1]==win[z+2]&&win[z+2]==win[z+3]&&win[z]!=3){
                                 if(player==0){
  alert('player 2 wins');
}                        
else{
  alert('player 1 wins')
} 
                                    }
                                  }
                                }


