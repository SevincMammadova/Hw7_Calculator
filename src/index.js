let input = document.getElementById('display');
let oldNum = document.querySelectorAll('.num');
let curNum = false;
let selOperator = document.querySelectorAll('.operation');
let equalEval = document.getElementById('equal');

function insert (num) {
   input.value +=  num;
}

function clean() {
    input.value = "";
}

function operation (operator) {
    input.value += operator;
}

function plus(oldNum, curNum){ 
    if (selOperator == 'plus'){
        result = oldNum + curNum;
    }
}

function minus (oldNum, curNum) {
    if (selOperator == 'minus') {
        result = oldNum - curNum;
    }  
}

function multiply (oldNum, curNum) {
    if (selOperator == 'multiply') {
        result = oldNum * curNum;
    }
}

function devide (oldNum, curNum) {
    if (selOperator == 'devide') {
        result = oldNum / curNum;
    }
}


function equal() {
    switch(selOperator) {

        case "plus":
            plus();
            break;

        case "minus":
            minus();
            break;

        case "multiply":
            multiply();
            break;
        
        case "devide":
            devide();
            break;
        default:
            result = curNum;
    }

    input.value = result;
   
}
// console.log(oldNum);


// module.exports = {
//    clean,
//    equal,
//    insert
// }

