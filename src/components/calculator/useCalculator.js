import { useState } from 'react';

export default function useCalculator() {
    const [firstNumber, setFirstNumber] = useState('');
    const [secondNumber, setSecondNumber] = useState('');
    const [output, setOutput] = useState('');

    // save numbers the user typed:
        function handleFirstNumber(event) {
        setFirstNumber(event.target.value);
    }

    function handleSecondNumber(event) {
        setSecondNumber(event.target.value);
    }

    function powerLoop(base, exponent) {
        let result = 1;

        for (let i = 0; i < Math.abs(exponent); i++) {
            result *= base;
        }

        if (exponent < 0) {
            result = 1 / result;
        }

        return result;
    }

    function calculate(operator) {
        const num1 = Number(firstNumber);
        const num2 = Number(secondNumber);
        let soln = 0;

        if (operator === '+') {
            soln = num1 + num2;
        } else if (operator === '-') {
            soln = num1 - num2;
        } else if (operator === '*') {
            soln = num1 * num2;
        } else if (operator === '/') {
            soln = num1 / num2;
        } else if (operator === '**') {
            soln = powerLoop(num1, num2);
        }

        setOutput(soln);
    }

    // calc buttons:
    function add() { 
        calculate('+'); 
    }

    function subtract() { 
        calculate('-'); 
    }

    function multiply() { 
        calculate('*'); 
    }

    function divide() { 
        calculate('/'); 
    }

    function power() { 
        calculate('**'); 
    }

    function clear() {
        setOutput('');
        setFirstNumber('');
        setSecondNumber('');
    }

    // "negative" is css class in Calc.tsx to turn display red:
    const outputClass = output < 0 ? 'negative' : '';

    return {
        firstNumber,
        secondNumber,
        output,
        outputClass,
        handleFirstNumber,
        handleSecondNumber,
        add,
        subtract,
        multiply,
        divide,
        power,
        clear,
    };
}