function place(str, char, result) {

    let res = str.replace('_', char);
    let output = res === result ? "Matched" : "Not Matched";
    console.log(output);

}

place('Str_ng', 'I',
    'Strong')