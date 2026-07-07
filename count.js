let para=document.getElementById('para')
let increse=document.getElementById('increse')
let count=0
increse.addEventListener('click',()=>{
count++
console.log(count)
para.textContent=`${count}`


})
let decrese=document.getElementById('decrese')

decrese.addEventListener('click',()=>{
    if(count >0)
count--

para.textContent=`${count}`


})
let reset=document.getElementById('reset')

reset.addEventListener('click',()=>{
count=0  

para.textContent=`${count}`


})