//RITVIK GUPTA
//Day 3 Level 2 JS 3PG

var Number;

let base = Number(prompt("enter base of the triangle"));
let height = Number(prompt("enter height of the triangle"));
let area = 0.5 * base * height;
console.log(`the area of the triangle is ${area}`);

let sideA = Number(prompt("enter side A of the triangle"));
let sideB = Number(prompt("enter side B of the triangle"));
let sideC = Number(prompt("enter side C of the triangle"));
let perimeter = sideA + sideB + sideC;
console.log(`the perimeter of the triangle is ${perimeter}`)

let length = Number(prompt("enter length of the rectangle"));
let width = Number(prompt("enter width of the rectangle"));
let areaOfRectangle = length * width;
let perimeterOfRectangle = 2 * (length + width);
console.log(`the area of the rectangle is ${areaOfRectangle} while the perimeter is ${perimeterOfRectangle}`)

const pi = 3.14
let radius = Number(prompt("enter radius of a circle"));
let areaOfCircle = pi * radius * radius;
let circumference = 2 * pi * radius;
console.log(`the area of the circle is ${areaOfCircle} while the circumference is ${circumference}`)

let xint=Number(prompt("enter x intercept"));
let yint=2*xint-2;
console.log(` x intercept is ${xint} and y intercept is ${yint}`);
let x1=Number(prompt("enter x1 "));
let x2=Number(prompt("enter x2 "));
let y1=Number(prompt("enter y1 "));
let y2=Number(prompt("enter y2 "));
let slope=(y2-y1)/(x2-x1);
console.log(`slope is ${slope}`);

let hours = Number(prompt("enter your hours"));
let rate = Number(prompt("enter your rate"));
let pay = hours * rate;
console.log(`your pay is ${pay}`)

const fName = "Ritvik"
const lName = "Gupta"
fName.length > lName.length ? console.log(`your first Name is greater than your family name`) : console.log(`your last name is greater than your name`);


let agey = Number(prompt("what is your age"));
if (agey > 18) {
    console.log("you are allowed to drive");
} else {
    console.log(`you are ${agey}, you will be allowed to drive after ${18 - agey} years`)
}

let secondsInseconds = 60;
let secondsInHour = secondsInseconds * 60;
let secondsInDay = secondsInHour * 24;
let secondsInYear = secondsInDay * 365;
let yearsLive = Number(prompt("how many years have you live?"));
let secondsOld = yearsLive * secondsInYear;
console.log(`you are ${secondsOld} seconds olds`)

let datey = new Date();
let YYYMMDD = `${datey.getFullYear()}-${datey.getMonth()}-${datey.getDate()} ${datey.getHours()}-${datey.getMinutes()}-${datey.getSeconds()}`
let DDMMYYYY = `${datey.getDate()}-${datey.getMonth()}-${datey.getFullYear()} ${datey.getHours()}-${datey.getMinutes()}-${datey.getSeconds()}`
let DdMmYYy = `${datey.getDate()}/${datey.getMonth()}/${datey.getFullYear()} ${datey.getHours()}-${datey.getMinutes()}-${datey.getSeconds()}`
console.log(YYYMMDD);
console.log(DDMMYYYY);
console.log(DdMmYYy);