function add(a,b){
    return a + b;
}

function subtract(a,b){
    return a - b;
}

function multiply(a,b) {
    return a * b;
}

function divide(a,b) {
    return a / b;
}

let x = "";

function operate(x, a, b){
    switch (x){
        case plus:
            add(a,b);
            break;
        case minus:
            subtract(a,b);
            break;
        case times:
            multiply(a,b,);
            break;
        case div:
            divide(a,b);
            break;
        default:
            text = "Err: Try again."
    }
}