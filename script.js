const number = document.getElementById('number');
const  count = document.getElementById('count');
const rest = document.getElementById('rest');


let num = 0;
count.addEventListener('click', ()=>{
    num++;
    number.innerText = num;
  
})