//RITVIK GUPTA
//Day 7 Level 1 JS 3PG

function fullName() {console.log("Ritvik Gupta")}
fullName()

function fullName(firstName, lastName) {
    return `${firstName} ${lastName}`;
}
fullName("Ritvik", "GUpta");

function addNumbers(a, b) {
    return a + b;
}
addNumbers(1, 4);

function areaOfRectangle(length, width) {
    let area = length * width;
    return area;
}
areaOfRectangle(3, 4);

perimeterOfRectangle = (length, width) => {
    let perimeter = 2 * (length * width);
    return perimeter;
}
perimeterOfRectangle(3, 4);

volumeOfRectPrism = (length, width, height) => {
    let volume = length * width * height;
    return volume;
}
volumeOfRectPrism(1, 3, 5);

AreaOfCircle = (r) => {
    const PI = 3.14;
    let area = PI * r * r;
}
AreaOfCircle(6);

circumOfCircle = (r) => {
    const PI = 3.14;
    return PI * r
}
circumOfCircle(5);

density = (mass, volume) => {
    return mass * volume;
}
density(3, 6);

speed = (TDC, TT) => {
    return TDC / TT
}
speed(4, 6);

weight = (mass, gravity) => {
    return mass * gravity;
}
weight(4, 5);

celsiusToFahrenheit = (celsius) => {
    let fahrenheit = (celsius * 9 / 5) + 32
    return fahrenheit;
}
celsiusToFahrenheit(5);

BMI_check = (weight, height) => {
    let bmi = weight / (height / height);
    if (bmi < 18.5) {
        return `underweight`;
    } else if (bmi > 18.5 && bmi < 24.9) {
        return `overweight`;
    } else if (bmi > 25 && bmi < 29.9) {
        return `overweight`;
    } else {
        return `obese`;
    }
}
BMI_check(4, 7);

checkSeasons = (month) => {
    switch (month) {
        case "september":
        case "october":
        case "November":
            console.log("the season is Autumn");
            break;
        case "december":
        case "january":
        case "febuary":
            console.log("the season is Winter");
            break;
        case "march":
        case "april":
        case "may":
            console.log("the season is Spring");
            break;
        case "june":
        case "july":
        case "august":
            console.log("the season is Summer");
            break;
        default:
            console.log("Wrong Month")
    }
}
checkSeasons("january");

findMax = (x, y, z) => {
    return Math.max(x, y, z);
}
findMax(15, 47, 34)