console.log('JS LOADED')
document.addEventListener("DOMContentLoaded", function() {

    const display = document.getElementById('display');

    const buttons = document.querySelectorAll('button');
  
    buttons.forEach(button => {
      button.addEventListener('click', function() {
        disp(this.value);
      });
    });
  });


function disp(value) {
    console.log('disp function called with value:', value);
    if (value === 'ac') {
        display.value = '';
        operator = '';
        num1 = '';
        num2 = '';
    } else if (value === 'c') {
        if (display.value !== '') {
            display.value = display.value.slice(0, -1);
        }
    } else if (value === 'off') {
        display.value = '';
        operator = '';
        num1 = '';
        num2 = '';
    } else if (value === 'ANS') {
        calculateResult();
    } else if (['+', '-', '*', '/'].includes(value)) {
        operator = value;
        num1 = display.value;
        display.value = '';
    } else {
        display.value += value;
    }
}


function calculateResult() {
    num2 = display.value;
    let result;
    switch (operator) {
        case '+':
            result = parseFloat(num1) + parseFloat(num2);
            break;
        case '-':
            result = parseFloat(num1) - parseFloat(num2);
            break;
        case '*':
            result = parseFloat(num1) * parseFloat(num2);
            break;
        case '/':
            if (num2 !== '0') {
                result = parseFloat(num1) / parseFloat(num2);
            } else {
                result = 'Error';
            }
            break;
        default:
            result = 'Error';
    }
    display.value = result;
    operator = '';
    num1 = '';
    num2 = '';
}

