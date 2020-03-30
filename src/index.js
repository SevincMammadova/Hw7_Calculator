let input = document.querySelector('input#display');
let oldNum = '';
let curNum = '';
let selOperator = '';
let result = 0; 

function clean() {
    input.value = "";
}

function insert (num) {
    input.value += num;
}

function getOperator (operator) {
    oldNum = input.value;
    clean();
    
    if(!oldNum) return;

    selOperator = operator;
}

function checkOperation() {
    curNum = input.value;
    clean();

    if(!curNum) {
        oldNum = '';
        selOperator = '';
        return;
    }

    equal();
}

function plus(){ 
    result = +oldNum + +curNum;
    return result;
}

function minus () {
    result = +oldNum - +curNum;
    return result;

}

function multiply () {
    result = +oldNum * +curNum;
    return result;
}

function devide () {
    result = +oldNum / +curNum;
    return result;
}


function equal() {
    switch(selOperator) {

        case "+":
            result = plus();
            break;

        case "-":
            result = minus();
            break;

        case "*":
            result = multiply();
            break;
        
        case "/":
            result = devide();
            break;
        default:
            return;
    }

    input.value = result; 
}

module.exports = {
   clean,
   insert, 
   plus,
   minus,
   multiply,
   devide,
   getOperator,
   checkOperation
}

