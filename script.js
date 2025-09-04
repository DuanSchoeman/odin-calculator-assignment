const add = function(a,b) {
	return a + b;
};

const subtract = function(a,b) {
	return a-b;
};

const multiply = function(arr) {
  return arr.reduce((accumulator, currentValue) => accumulator*currentValue, 1);
};

const devide = function(a,b) {
    return a/b;
};

function operate(operator, num1, num2) {
    let result

    if (operator == "+") {
        result = add(num1,num2);
    } else if (operator == "-") {
        result = subtract(num1,num2);
    } else if (operator == "x") {
        result = multiply([num1,num2]);
    } else if (operator == "/") {
        result = devide(num1,num2);
    };

    return result;
};

let numbr1;
let numbr2;
let operator;
let operatorText;
let operatorPress = false;
let isFirst = true;
let answer;
let textHolder;
let justCalculated = false;

const textDiv = document.querySelector(".display");
const decimalBtn = document.querySelector("#pnt");
const contBtn = document.querySelector(".operators");


contBtn.addEventListener('click', (event) => {
    if (event.target.tagName === 'BUTTON') {
        const butID = event.target.id;
        handleButtonPress(butID);
    }
});


document.addEventListener('keydown', (event) => {
    const key = event.key;
    let butID = null;
    
    // Number keys
    if (key === '0') butID = 'zero';
    if (key === '1') butID = 'one';
    if (key === '2') butID = 'two';
    if (key === '3') butID = 'three';
    if (key === '4') butID = 'four';
    if (key === '5') butID = 'five';
    if (key === '6') butID = 'six';
    if (key === '7') butID = 'seven';
    if (key === '8') butID = 'eight';
    if (key === '9') butID = 'nine';
    
    // Operator keys
    if (key === '+') butID = 'plus';
    if (key === '-') butID = 'minus';
    if (key === '*') butID = 'multiply';
    if (key === '/') butID = 'devide';
    
    // Special keys
    if (key === '=' || key === 'Enter') butID = 'equal';
    if (key === '.' || key === ',') butID = 'pnt';
    if (key === 'Escape') butID = 'clear';
    if (key === 'Backspace') butID = 'backspace';
    
    // Prevent default browser behavior for calculator keys
    if (butID) {
        event.preventDefault();
        handleButtonPress(butID);
    }
});


function handleButtonPress(butID) {
    if (butID === 'clear') {
        textDiv.innerHTML = "0";
        isFirst = true;
        numbr1 = undefined;
        numbr2 = undefined;
        operatorPress = false;
        decimalBtn.disabled = false;
        decimalBtn.style.opacity = "1";
        decimalBtn.style.backgroundColor = "#505050";
        justCalculated = false;
    } else if (butID === 'plus-minus') {

    } else if (butID === 'percent') {
        //textDiv.innerHTML = "";
        //operatorText = ;
        //operator = "%";
        //textDiv.textContent += " %";
    } else if (butID === 'devide') {
        decimalBtn.disabled = false;
        decimalBtn.style.opacity = "1";
        decimalBtn.style.backgroundColor = "#505050";
        if (operatorPress) {
            operator = "/";
            operatorText = "÷";
            textHolder = textDiv.textContent;
            textHolder = textHolder.slice(0, -2);
            textDiv.textContent = textHolder + " ÷";
        } else {
            if (numbr2 != undefined) {
                answer = operate(operator,numbr1,numbr2);
                textDiv.innerHTML = "";
                textDiv.textContent += answer;
                isFirst = false;
                numbr1 = undefined;
                numbr2 = undefined;
                numbr1 = answer;
                operator = "/";
                operatorText = "÷";
                textDiv.textContent += " ÷";
            } else {
                isFirst = false;
                operator = "/";
                operatorText = "÷";
                textDiv.textContent += " ÷";
            };
        };
        operatorPress = true;
        justCalculated = false;
    } else if (butID === 'seven') {
        operatorPress = false;
        decimalBtn.disabled = false;
        decimalBtn.style.opacity = "1";
        decimalBtn.style.backgroundColor = "#505050";
        if (justCalculated) {
            numbr1 = undefined;
            numbr2 = undefined;
            operator = undefined;
            isFirst = true;
            justCalculated = false;
        };

        if (isFirst === true && numbr1 === undefined) {
            textDiv.innerHTML = "";
            numbr1 = "7";
            textDiv.textContent += numbr1;
        } else if (isFirst === true && numbr1 != "") {
            numbr1 += "7";
            textDiv.innerHTML = "";
            textDiv.textContent += numbr1;
        } else if (isFirst === false && numbr2 === undefined) {
            numbr2 = "7";
            textDiv.textContent += " " + numbr2;
        } else if (isFirst === false && numbr2 != "") {
            numbr2 += "7";
            textDiv.innerHTML = "";
            textDiv.textContent += numbr1 + " " + operatorText + " " + numbr2;
        };

    } else if (butID === 'eight') {
        operatorPress = false;
        decimalBtn.disabled = false;
        decimalBtn.style.opacity = "1";
        decimalBtn.style.backgroundColor = "#505050";
        if (justCalculated) {
            numbr1 = undefined;
            numbr2 = undefined;
            operator = undefined;
            isFirst = true;
            justCalculated = false;
        };

        if (isFirst === true && numbr1 === undefined) {
            textDiv.innerHTML = "";
            numbr1 = "8";
            textDiv.textContent += numbr1;
        } else if (isFirst === true && numbr1 != "") {
            numbr1 += "8";
            textDiv.innerHTML = "";
            textDiv.textContent += numbr1;
        } else if (isFirst === false && numbr2 === undefined) {
            numbr2 = "8";
            textDiv.textContent += " " + numbr2;
        } else if (isFirst === false && numbr2 != "") {
            numbr2 += "8";
            textDiv.innerHTML = "";
            textDiv.textContent += numbr1 + " " + operatorText + " " + numbr2;
        };
        
    } else if (butID === 'nine') {
        operatorPress = false;
        decimalBtn.disabled = false;
        decimalBtn.style.opacity = "1";
        decimalBtn.style.backgroundColor = "#505050";
        if (justCalculated) {
            numbr1 = undefined;
            numbr2 = undefined;
            operator = undefined;
            isFirst = true;
            justCalculated = false;
        };

        if (isFirst === true && numbr1 === undefined) {
            textDiv.innerHTML = "";
            numbr1 = "9";
            textDiv.textContent += numbr1;
        } else if (isFirst === true && numbr1 != "") {
            numbr1 += "9";
            textDiv.innerHTML = "";
            textDiv.textContent += numbr1;
        } else if (isFirst === false && numbr2 === undefined) {
            numbr2 = "9";
            textDiv.textContent += " " + numbr2;
        } else if (isFirst === false && numbr2 != "") {
            numbr2 += "9";
            textDiv.innerHTML = "";
            textDiv.textContent += numbr1 + " " + operatorText + " " + numbr2;
        };
        
    } else if (butID === 'multiply') {
        decimalBtn.disabled = false;
        decimalBtn.style.opacity = "1";
        decimalBtn.style.backgroundColor = "#505050";
        if (operatorPress) {
            operator = "x";
            operatorText = "x";
            textHolder = textDiv.textContent;
            textHolder = textHolder.slice(0, -2);
            textDiv.textContent = textHolder + " x";
        } else {
            if (numbr2 != undefined) {
                answer = operate(operator,numbr1,numbr2);
                textDiv.innerHTML = "";
                textDiv.textContent += answer;
                isFirst = false;
                numbr1 = undefined;
                numbr2 = undefined;
                numbr1 = answer;
                operator = "x";
                operatorText = "x";
                textDiv.textContent += " x";
            } else {
                isFirst = false;
                operator = "x";
                operatorText = "x";
                textDiv.textContent += " x";
            };
        };
        operatorPress = true;
        justCalculated = false;
    } else if (butID === 'four') {
        operatorPress = false;
        decimalBtn.disabled = false;
        decimalBtn.style.opacity = "1";
        decimalBtn.style.backgroundColor = "#505050";
        if (justCalculated) {
            numbr1 = undefined;
            numbr2 = undefined;
            operator = undefined;
            isFirst = true;
            justCalculated = false;
        };

        if (isFirst === true && numbr1 === undefined) {
            textDiv.innerHTML = "";
            numbr1 = "4";
            textDiv.textContent += numbr1;
        } else if (isFirst === true && numbr1 != "") {
            numbr1 += "4";
            textDiv.innerHTML = "";
            textDiv.textContent += numbr1;
        } else if (isFirst === false && numbr2 === undefined) {
            numbr2 = "4";
            textDiv.textContent += " " + numbr2;
        } else if (isFirst === false && numbr2 != "") {
            numbr2 += "4";
            textDiv.innerHTML = "";
            textDiv.textContent += numbr1 + " " + operatorText + " " + numbr2;
        };
        
    } else if (butID === 'five') {
        operatorPress = false;
        decimalBtn.disabled = false;
        decimalBtn.style.opacity = "1";
        decimalBtn.style.backgroundColor = "#505050";
        if (justCalculated) {
            numbr1 = undefined;
            numbr2 = undefined;
            operator = undefined;
            isFirst = true;
            justCalculated = false;
        };

        if (isFirst === true && numbr1 === undefined) {
            textDiv.innerHTML = "";
            numbr1 = "5";
            textDiv.textContent += numbr1;
        } else if (isFirst === true && numbr1 != "") {
            numbr1 += "5";
            textDiv.innerHTML = "";
            textDiv.textContent += numbr1;
        } else if (isFirst === false && numbr2 === undefined) {
            numbr2 = "5";
            textDiv.textContent += " " + numbr2;
        } else if (isFirst === false && numbr2 != "") {
            numbr2 += "5";
            textDiv.innerHTML = "";
            textDiv.textContent += numbr1 + " " + operatorText + " " + numbr2;
        };
        
    } else if (butID === 'six') {
        operatorPress = false;
        decimalBtn.disabled = false;
        decimalBtn.style.opacity = "1";
        decimalBtn.style.backgroundColor = "#505050";
        if (justCalculated) {
            numbr1 = undefined;
            numbr2 = undefined;
            operator = undefined;
            isFirst = true;
            justCalculated = false;
        };

        if (isFirst === true && numbr1 === undefined) {
            textDiv.innerHTML = "";
            numbr1 = "6";
            textDiv.textContent += numbr1;
        } else if (isFirst === true && numbr1 != "") {
            numbr1 += "6";
            textDiv.innerHTML = "";
            textDiv.textContent += numbr1;
        } else if (isFirst === false && numbr2 === undefined) {
            numbr2 = "6";
            textDiv.textContent += " " + numbr2;
        } else if (isFirst === false && numbr2 != "") {
            numbr2 += "6";
            textDiv.innerHTML = "";
            textDiv.textContent += numbr1 + " " + operatorText + " " + numbr2;
        };
        
    } else if (butID === 'minus') {
        decimalBtn.disabled = false;
        decimalBtn.style.opacity = "1";
        decimalBtn.style.backgroundColor = "#505050";
        if (operatorPress) {
            operator = "-";
            operatorText = "-";
            textHolder = textDiv.textContent;
            textHolder = textHolder.slice(0, -2);
            textDiv.textContent = textHolder + " -";
        } else {
            if (numbr2 != undefined) {
                answer = operate(operator,numbr1,numbr2);
                textDiv.innerHTML = "";
                textDiv.textContent += answer;
                isFirst = false;
                numbr1 = undefined;
                numbr2 = undefined;
                numbr1 = answer;
                operator = "-";
                operatorText = "-";
                textDiv.textContent += " -";
            } else {
                isFirst = false;
                operator = "-";
                operatorText = "-";
                textDiv.textContent += " -";
            };
        };
        operatorPress = true;
        justCalculated = false;
    } else if (butID === 'one') {
        operatorPress = false;
        decimalBtn.disabled = false;
        decimalBtn.style.opacity = "1";
        decimalBtn.style.backgroundColor = "#505050";
        if (justCalculated) {
            numbr1 = undefined;
            numbr2 = undefined;
            operator = undefined;
            isFirst = true;
            justCalculated = false;
        };

        if (isFirst === true && numbr1 === undefined) {
            textDiv.innerHTML = "";
            numbr1 = "1";
            textDiv.textContent += numbr1;
        } else if (isFirst === true && numbr1 != "") {
            numbr1 += "1";
            textDiv.innerHTML = "";
            textDiv.textContent += numbr1;
        } else if (isFirst === false && numbr2 === undefined) {
            numbr2 = "1";
            textDiv.textContent += " " + numbr2;
        } else if (isFirst === false && numbr2 != "") {
            numbr2 += "1";
            textDiv.innerHTML = "";
            textDiv.textContent += numbr1 + " " + operatorText + " " + numbr2;
        };
        
    } else if (butID === 'two') {
        operatorPress = false;
        decimalBtn.disabled = false;
        decimalBtn.style.opacity = "1";
        decimalBtn.style.backgroundColor = "#505050";
        if (justCalculated) {
            numbr1 = undefined;
            numbr2 = undefined;
            operator = undefined;
            isFirst = true;
            justCalculated = false;
        };

        if (isFirst === true && numbr1 === undefined) {
            textDiv.innerHTML = "";
            numbr1 = "2";
            textDiv.textContent += numbr1;
        } else if (isFirst === true && numbr1 != "") {
            numbr1 += "2";
            textDiv.innerHTML = "";
            textDiv.textContent += numbr1;
        } else if (isFirst === false && numbr2 === undefined) {
            numbr2 = "2";
            textDiv.textContent += " " + numbr2;
        } else if (isFirst === false && numbr2 != "") {
            numbr2 += "2";
            textDiv.innerHTML = "";
            textDiv.textContent += numbr1 + " " + operatorText + " " + numbr2;
        };
        
    } else if (butID === 'three') {
        operatorPress = false;
        decimalBtn.disabled = false;
        decimalBtn.style.opacity = "1";
        decimalBtn.style.backgroundColor = "#505050";
        if (justCalculated) {
            numbr1 = undefined;
            numbr2 = undefined;
            operator = undefined;
            isFirst = true;
            justCalculated = false;
        };

        if (isFirst === true && numbr1 === undefined) {
            textDiv.innerHTML = "";
            numbr1 = "3";
            textDiv.textContent += numbr1;
        } else if (isFirst === true && numbr1 != "") {
            numbr1 += "3";
            textDiv.innerHTML = "";
            textDiv.textContent += numbr1;
        } else if (isFirst === false && numbr2 === undefined) {
            numbr2 = "3";
            textDiv.textContent += " " + numbr2;
        } else if (isFirst === false && numbr2 != "") {
            numbr2 += "3";
            textDiv.innerHTML = "";
            textDiv.textContent += numbr1 + " " + operatorText + " " + numbr2;
        };
        
    } else if (butID === 'plus') { 
        decimalBtn.disabled = false;
        decimalBtn.style.opacity = "1";
        decimalBtn.style.backgroundColor = "#505050";
        if (operatorPress) {
            operator = "+";
            operatorText = "+";
            textHolder = textDiv.textContent;
            textHolder = textHolder.slice(0, -2);
            textDiv.textContent = textHolder + " +";
        } else {
            if (numbr2 != undefined) {
                answer = operate(operator,numbr1,numbr2);
                textDiv.innerHTML = "";
                textDiv.textContent += answer;
                isFirst = false;
                numbr1 = undefined;
                numbr2 = undefined;
                numbr1 = answer;
                operator = "+";
                operatorText = "+";
                textDiv.textContent += " +";
            } else {
                isFirst = false;
                operator = "+";
                operatorText = "+";
                textDiv.textContent += " +";
            };
        };
        operatorPress = true;
        justCalculated = false;
    } else if (butID === 'backspace') {

        if (isFirst === true && numbr1 === undefined) {
            textDiv.textContent = "0";
        } else if (isFirst === true && numbr1 != "") {
            textHolder = textDiv.textContent;
            textHolder = textHolder.slice(0,-1);
            textDiv.textContent = textHolder;
            numbr1 = numbr1.slice(0,-1);
        } else if (isFirst === false && numbr2 === undefined) {
            textHolder = textDiv.textContent;
            textHolder = textHolder.slice(0,-1);
            textDiv.textContent = textHolder;
            numbr1 = numbr1.slice(0,-1);
        } else if (isFirst === false && numbr2 != "") {
            textHolder = textDiv.textContent;
            textHolder = textHolder.slice(0,-1);
            textDiv.textContent = textHolder;
            numbr2 = numbr2.slice(0,-1);
        };
        justCalculated = false;
    } else if (butID === 'zero') {
        operatorPress = false;
        decimalBtn.disabled = false;
        decimalBtn.style.opacity = "1";
        decimalBtn.style.backgroundColor = "#505050";
        if (justCalculated) {
            numbr1 = undefined;
            numbr2 = undefined;
            operator = undefined;
            isFirst = true;
            justCalculated = false;
        };

        if (isFirst === true && numbr1 === undefined) {
            textDiv.innerHTML = "";
            numbr1 = "0";
            textDiv.textContent += numbr1;
        } else if (isFirst === true && numbr1 != "") {
            numbr1 += "0";
            textDiv.innerHTML = "";
            textDiv.textContent += numbr1;
        } else if (isFirst === false && numbr2 === undefined) {
            numbr2 = "0";
            textDiv.textContent += " " + numbr2;
        } else if (isFirst === false && numbr2 != "") {
            numbr2 += "0";
            textDiv.innerHTML = "";
            textDiv.textContent += numbr1 + " " + operatorText + " " + numbr2;
        };
        
    } else if (butID === 'pnt') {
        operatorPress = false;
        decimalBtn.disabled = true;
        decimalBtn.style.opacity = "0.5";
        decimalBtn.style.backgroundColor = "#333";
        if (justCalculated) {
            numbr1 = undefined;
            numbr2 = undefined;
            operator = undefined;
            isFirst = true;
            justCalculated = false;
        };

        if (isFirst === true && numbr1 === undefined) {
            textDiv.innerHTML = "";
            numbr1 = "0.";
            textDiv.textContent += numbr1;
        } else if (!numbr1.includes(".") && isFirst === true && numbr1 != "") {
            numbr1 += ".";
            textDiv.innerHTML = "";
            textDiv.textContent += numbr1;
        } else if (isFirst === true && numbr1 && numbr1.includes(".")) {

        } else if (isFirst === false && numbr2 === undefined) {
            //textDiv.innerHTML = "";
            numbr2 = "0.";
            textDiv.textContent += " " + numbr2;
        } else if (!numbr2.includes(".") && isFirst === false && numbr2 != "") {
            numbr2 += ".";
            textDiv.innerHTML = "";
            textDiv.textContent += numbr1 + " " + operatorText + " " + numbr2;
        };

        justCalculated = false;

    } else if (butID === 'equal') {
        justCalculated = true;
        decimalBtn.disabled = false;
        decimalBtn.style.opacity = "1";
        decimalBtn.style.backgroundColor = "#505050";
        if (parseFloat(numbr2)  === 0 && operator === "/") {
            alert("Can't devide by 0, enter another number")
            numbr2 = undefined;
            textDiv.innerHTML = "";
            textDiv.textContent += numbr1 + " " + operatorText
        } else {
            if (numbr1 != undefined && numbr2 != undefined && operator != undefined) {
                answer = operate(operator,parseFloat(numbr1),parseFloat(numbr2));
                textDiv.innerHTML = "";
                if (answer % 1 === 0) {
                    numbr1 = answer.toString();  // No decimals for whole numbers
                } else {
                    numbr1 = answer.toFixed(3);  // 3 decimals for non-whole numbers
                };
                textDiv.textContent += numbr1;
                isFirst = false;
                operator = undefined;
                numbr2 = undefined;
                operatorPress = false;
            };
        };
    };
  
  }; 