function convert(cents) {

    let years = cents * 100;
    let days = Math.trunc(years * 365.2422);
    let hours = 24 * days;
    let mins = 60 * hours;

    console.log(`${cents} centuries = ${years} ` + `years = ${days} ` + `days = ${hours} ` + `hours = ${mins} minutes`);

}

convert(1)