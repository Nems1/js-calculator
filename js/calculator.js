'use strict'

/* Basic arithmetic calculator without use of frentend 
   that performs addition,subtraction,multiplication,
   division */

//  function to perform additio

const H1 = `<h1>Operation Result</h1>`;

let add = (num1,num2) => {
    return num1 + num2;
}

// function to perform multiplication of two numbers

 let mul =  (num1,num2) => {
    return num1 * num2;
 }

 // function to perform subtraction 

 let sub = (num1, num2) => {
    return num1 -num2;
 }

 // function to perform division

 let div = (num1, num2) => {
    return num1 / num2;
 }

 // function that perform basic operations depending user input

 let doCalculation = (firstNumber, secondNumber,operation) => {
         switch(operation) {
            case '+': 
                document.writeln(`<main class = 'container'>
                 ${H1}
                <p><span>${firstNumber} + ${secondNumber} = ${add(firstNumber,secondNumber)} </span></p>
                </main>`);
                break;
            case '-':
                document.writeln(`<main class = 'container'>
                    ${H1}
                    <p><span>${firstNumber} - ${secondNumber} = ${sub(firstNumber,secondNumber)} </span></p>
                </main>`);
                break;
            case '/':
                if (firstNumber == 0 || secondNumber == 0) {
                    document.writeln(`<main class = 'container'>
                    ${H1}
                    <p><span class = 'illegal'>Division by zero operation not allowed.</span>
                    </main>`);
                }else {
                    document.writeln(`<main class = 'container'>
                    ${H1}
                    <p><span>${firstNumber} / ${secondNumber} = ${div(firstNumber,secondNumber)} </span></p>
                </main>`);
                }
                break;
            case '*':
                document.writeln(`<main class = 'container'>
                    ${H1}
                    <p><span>${firstNumber} * ${secondNumber} = ${mul(firstNumber,secondNumber)} </span></p>
                </main>`);
                break;
            default:
                document.writeln(`<main class = 'container'>
                    ${H1}
                    <p>The operator sign {<span>${operation} </span>} you've entered  is invalid.</p>
                </main>`);
                break;
         }
 }

 // Get user input

   do {
     let num1 = parseFloat(prompt(`\n\tFirst Number:`));
     let num2 = parseFloat(prompt(`\n\t Second Number:`));
     let oper = prompt('Enter arithmetic operator (valid values=> -,+,/,*): ');

    // Call doCalculation function

    doCalculation(num1,num2,oper);

    let yesNo = prompt('Do another operation y/n?').toLowerCase();

   }while ( yesNo = 'y');
   