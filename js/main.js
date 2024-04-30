
let lastOperand = 0;
let operation = null;
const inputWindow = document.querySelector('#inputWindow');

const clearInput = () => {
    lastOperand = 0;
    operation = null;
    inputWindow.value = '';
}

const appendNumber = (number) => {
    inputWindow.value += number;
}

const performOperation = () => {
    const currentOperand = parseInt(inputWindow.value);
    let result;

    switch (operation) {
        case 'sum':
            result = lastOperand + currentOperand;
            break;
        case 'minus':
            result = lastOperand - currentOperand;
            break;
        case 'dividing':
            result = lastOperand / currentOperand;
            break;
        case 'percent':
            result = lastOperand / 100 * currentOperand;
            break;
        case 'multiply':
            result = lastOperand * currentOperand;
            break;
        default:
            return;
    }

    lastOperand = 0;
    operation = null;
    inputWindow.value = result;
}

document.querySelector('#btn_clr').addEventListener('click', clearInput);
document.querySelector('#btn_1').addEventListener('click', () => appendNumber(1));
document.querySelector('#btn_2').addEventListener('click', () => appendNumber(2));
document.querySelector('#btn_3').addEventListener('click', () => appendNumber(3));
document.querySelector('#btn_4').addEventListener('click', () => appendNumber(4));
document.querySelector('#btn_5').addEventListener('click', () => appendNumber(5));
document.querySelector('#btn_6').addEventListener('click', () => appendNumber(6));
document.querySelector('#btn_7').addEventListener('click', () => appendNumber(7));
document.querySelector('#btn_8').addEventListener('click', () => appendNumber(8));
document.querySelector('#btn_9').addEventListener('click', () => appendNumber(9));
document.querySelector('#btn_0').addEventListener('click', () => appendNumber(0));

document.querySelector('#btn_sum').addEventListener('click', () => {
    lastOperand = parseInt(inputWindow.value);
    operation = 'sum';
    inputWindow.value = '';
});

document.querySelector('#btn_minus').addEventListener('click', () => {
    lastOperand = parseInt(inputWindow.value);
    operation = 'minus';
    inputWindow.value = '';
});

document.querySelector('#btn_dividing').addEventListener('click', () => {
    lastOperand = parseInt(inputWindow.value);
    operation = 'dividing';
    inputWindow.value = '';
});

document.querySelector('#btn_percent').addEventListener('click', () => {
    lastOperand = parseInt(inputWindow.value);
    operation = 'percent';
    inputWindow.value = '';
});

document.querySelector('#btn_multiply').addEventListener('click', () => {
    lastOperand = parseInt(inputWindow.value);
    operation = 'multiply';
    inputWindow.value = '';
});

document.querySelector('#btn_equals').addEventListener('click', performOperation);













