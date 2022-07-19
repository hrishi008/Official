var press = document.getElementById('press');
press.addEventListener('click',function(){
    press.style.backgroundColor='blue'
})

// press.addEventListener('mouseout',function(){
//     press.style.backgroundColor='yellow'
// })
// press.addEventListener('mousedown',function(){
//     press.style.backgroundColor='black'
// })
// press.addEventListener('mouseup',function(){
//     press.style.backgroundColor='purple'
// })
// press.addEventListener('mousemove',function(){
//     press.style.backgroundColor='orange'
// })
// press.addEventListener('mouseover',function(){
//     press.style.backgroundColor='green'
// })
// press.addEventListener('keydown',function(){
//     press.style.backgroundColor='blue'
// })
// press.addEventListener('keyup',function(){
//     press.style.backgroundColor='purple'
// })
press.addEventListener('keypress',function(){
    press.style.backgroundColor='yellow'
})
