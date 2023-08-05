'use strict';
//element
const container = document.querySelector('.container');
const btnS= document.querySelectorAll('.btn');
//variables
const imgList = ['1','2','3','4','5','6','7','8'];

//img first (0)
let index=0
// foreach one element out
btnS.forEach((button)=>{
  //eventListener
button.addEventListener('click',() => {
console.log('clicked')
//the element in check button value 
if(button.classList.contains('btn-left')){

  // left button click in (--)value 
index--; 
//the (0)value last img but next value not the repeat last end (5)img move the (0)next value is (-1)values
if(index<0){
console.log('hollo')
//value is (0) then that value next in (-1)  the move to last end values
index =imgList.length-1;
}
//the img list style connected to img list 
container.style.background =`url("images/${imgList[index]}.jpg")center/cover fixed no-repeat`
}else{
  
  //this value (+++) right button click in value increase img next img 
  index++;
  //index in (5) value  button click img next(6) not img this value repeat values (0)value img move  first  img back   element
  if(index===imgList.length){
    console.log('hollo')
    //last img to repeat in first (0)value change 
    index =0;
    }
    ///the img list style connected to img list 
    container.style.background =`url("images/${imgList[index]}.jpg")center/cover fixed no-repeat`
}

})
});