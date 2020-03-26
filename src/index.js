let input = document.getElementById('input');
let oldNum = document.querySelectorAll('.button');
let curNum = document.querySelectorAll('.button');
selOperator = document.getElementsByClassName('operation').value;

// for (let i = 0; i < oldNum.length; i++) {
//     if(!selOperator) {
//        onclick.insert();
//     }
// }

// for (let i = 0; i < curNum.length; i++) {
//     if(!selOperator) {
//         input.value += i;
//     }
// }

function insert (num) {
   input.value += num;
}

 function clean() {
     input.value = "";
 }

function operation (operator) {
    input.value += operator;
}

function plus(oldNum, curNum){ 
    for (let i = 0; i < oldNum.length; i++) {
        if(selOperator !== operation) {
          insert();
        }
    }
    for (let i = 0; i < curNum.length; i++) {
        if(selOperator !== operation) {
            insert();
        }
    }

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
    oldNum = 0;
    curNum = result;
    selOperator = null;
   
}


// module.exports = {
//    clean,
//    equal,
//    insert
// }

