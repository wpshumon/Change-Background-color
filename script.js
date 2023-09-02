let bgColor = document.getElementById('bg')
let btn = document.getElementById('btn')
let copyBtn = document.getElementById('copy')
let inputBox = document.getElementById('inputBox')
let popupBox = document.querySelector('.popup_box')

function colorGenarate(){
    let r = Math.floor(Math.random()* 255).toString(16);
    let g = Math.floor(Math.random()* 255).toString(16);
    let b = Math.floor(Math.random()* 255).toString(16);

let getColor =`${r}${g}${b}`
if(getColor.length == 5) {
    getColor += 0
} else if(getColor.length == 4){
    getColor+= "00";
} else if(getColor.length == 3){
    getColor+= '000';
}
console.log(getColor)
return getColor
// console.log(r + g + b);
// return `rgb(${r}, ${g}, ${b})`
}

 btn.addEventListener('click', function(){
     let color = colorGenarate()
     bgColor.style.backgroundColor = "#" + color
     inputBox.value = color
 })
 copyBtn.addEventListener('click', ()=>{
     navigator.clipboard.writeText("#" + inputBox.value)
     popupBox.innerHTML = `<span>#${inputBox.value}</span> Copied!!!`;
     popupBox.classList.add('active');
     setTimeout(function(){
         popupBox.classList.remove('active')
      },2000)
 })

 inputBox.addEventListener('keyup',function(e){
    bgColor.style.backgroundColor = "#"+inputBox.value;
    // console.log(e)
 })