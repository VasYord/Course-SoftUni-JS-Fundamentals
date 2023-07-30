function chars(first, second) {

    let start = Math.min(first.charCodeAt(), second.charCodeAt());
    let end = Math.max(first.charCodeAt(), second.charCodeAt());

    let charArray = [];

    for (let currentChar = start + 1; currentChar < end; currentChar++) {
        charArray.push(String.fromCharCode(currentChar));
    }
    return charArray.join(' ')
}

console.log(chars('a', 'd'));