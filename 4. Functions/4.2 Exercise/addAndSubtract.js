function mat(first, second, third) {

    function sum(first, second) {
        return first + second;
    }

    let sumResult = sum(first, second);

    function subtract(sumResult, third) {
        return sumResult - third;
    }
    return subtract(sumResult, third);

}

console.log(mat(23, 6, 10));