function lowerOrUpper(sym) {

    let caseResult = '';

    if (sym === sym.toUpperCase()) {
        caseResult = 'upper-case';
    } else {
        caseResult = 'lower-case';
    }

    console.log(caseResult);

}

lowerOrUpper('A')