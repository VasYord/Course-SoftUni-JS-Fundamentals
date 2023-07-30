function calculator(one, two, operate) {

    let multiply = (a, b) => a * b;
    let divide = (a, b) => a / b;
    let add = (a, b) => a + b;
    let subtract = (a, b) => a - b;
    let res = 0;

    switch (operate) {
        case "multiply":
            res = multiply(one, two);
            break;
        case "divide":
            res = divide(one, two);
            break;
        case "add":
            res = add(one, two);
            break;
        case "subtract":
            res = subtract(one, two);
            break;
    }
    console.log(res);
}

calculator(5,
    5,
    'multiply')