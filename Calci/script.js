const display = document.getElementById('display');
//display.value = 4;
const buttons = document.querySelectorAll('.buttons button');

//console.log(buttons[4].textContent);
//console.log(buttons.length);
//console.log(typeof buttons);

//display.value = buttons[1].textContent + 'Siddhi'

function press(value){
    if(value === 'C'){
        display.value = '';
    } 
    else if(value === 'DEL'){
        display.value = display.value.slice(0, -1); 
    }
    else if(value === '='){
        calculate();
    }
    else {
        display.value = display.value + value;
    }
}

for(let i = 0; i < buttons.length; i++){
        buttons[i].addEventListener('click',()=>{
            press(buttons[i].textContent);
        });
 }
function calculate(){
const answer = eval(display.value);
display.value = answer;
}
