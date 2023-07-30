function repeat(string, repeat) {

    let res = '';
    for (let i = 0; i < repeat; i++) {
        res += string;
    }

    return res;

}

let functionResult = repeat("abc", 3);
console.log(functionResult);