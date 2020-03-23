
function insert(num) {
    document.form.textview.value += num;
}

function clean() {
    document.form.textview.value = "";
}

function equal() {
    let exp = document.form.textview.value;

    if (exp) {
        document.form.textview.value = eval(exp);
    }
}

module.exports = {
   clean,
   equal,
   insert
}