let input = document.getElementById('input');
let selOperator = document.getElementsByClassName('operation');

function insert (num) {
   input.value += num;
}
 function clean() {
     input.value = "";
 }

function operation (operator) {
    input.value += operator;
}

function equal(oldNum, curNum) {
    oldNum = document.getElementsByClassName('num'.value);
    curNum = document.getElementsByClassName('num'.value);
    selOperator = document.getElementsByClassName('operation'.value);

    function plus(){ 
        if (selOperator == 'plus'){
            result = oldNum + curNum;
        }
    }
 
    function minus () {
        if (selOperator == 'minus') {
            result = oldNum - curNum;
        }
    }

    function multiply () {
        if (selOperator == 'multiply') {
            result = oldNum * curNum;
        }
    }


    function devide () {
        if (selOperator == 'devide') {
            result = oldNum / curNum;
        }
    }

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
    oldNum = 0;
    curNum = result;
    selOperator = null;
   
}


module.exports = {
   clean,
   equal,
   insert
}

