const number = document.getElementById('number');
const  count = document.getElementById('count');
const rest = document.getElementById('rest');


let num = 0;
count.addEventListener('click', ()=>{
    num++;
    if(num<10){
        number.innerText = '0' + num
    }else{
    number.innerText = num;
    }   
})

reset.addEventListener('click', ()=>{
    num = 0;
    number.innerText = '00';
})