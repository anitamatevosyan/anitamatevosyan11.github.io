let knopka9 = document.getElementById('knopka9');
let otvet = document.querySelector('.otvet');

let firstNum = []
let secondNum = []
let sign = null //
const numbers = [0,1,2,3,4,5,6,7,8,9] 
const znaki = ["×", '-', '+','÷']
let pastSign = null
document.onclick = function (event) {
    if(!event.target.classList.contains('btn')) {
        return
    } 

    // console.log(event.target.innerHTML)
    const znak = event.target.innerHTML 
    
  
    if(znaki.includes(znak)){
        if(firstNum.length){
            sign = znak
            otvet.innerHTML = firstNum.join('') + sign + secondNum.join('')
        }
      
    } else if (numbers.includes(Number(znak)) || znak === '.'){
        if (!sign){
            firstNum.push(znak)
        } else {
            secondNum.push(znak)
        }
        
        otvet.innerHTML = firstNum.join('') + (sign || '') + secondNum.join('')
    } else if (['='].includes(znak) && sign && firstNum.length && secondNum.length) {
        if(sign === '+') {
            otvet.innerHTML = Number(firstNum.join('')) + Number(secondNum.join('')) 
        } else if (sign === '-') {
            otvet.innerHTML = Number(firstNum.join('')) - Number(secondNum.join('')) 
        } else if (sign === '×') {
            otvet.innerHTML = Number(firstNum.join('')) * Number(secondNum.join('')) 
        } else if (sign === '÷') {
            otvet.innerHTML = Number(firstNum.join('')) / Number(secondNum.join('')) 
        }
        firstNum = otvet.innerHTML.split('')
        secondNum = []
        sign = null
    } else if (znak === 'C') {
        firstNum = []
        secondNum = []
        sign = null
        otvet.innerHTML = 'otvet'
        
    }

}


