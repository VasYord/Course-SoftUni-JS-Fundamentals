function week(day) {
    let dayOfWeek = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
    ]

    let result = dayOfWeek[day - 1];

    if (result) {
        console.log(result);
    } else {
        console.log("Invalid day!");
    }

}

week(7)