//RITVIK GUPTA
//Day 3 Level 1 JS 3PG

const firstName = "Ritvik"
const lastName = "Gupta"
const country = "India"
const city = "Delhi"
const age = 21;
const isMarried = false;
const year = new Date().getFullYear();

console.log(typeof firstName);
console.log(typeof lastName);
console.log(typeof country);
console.log(typeof city);
console.log(typeof age);
console.log(typeof year);

console.log("10" === 10)
console.log(parseInt(9.8) === 10);

console.log(4 > 3);
console.log(4 >= 3);
console.log(4 < 3);
console.log(4 <= 3);
console.log(4 == 4);
console.log(4 === 4);
console.log(4 != 4);
console.log(4 !== 4);
console.log(4 != '4');
console.log(4 == '4');
console.log(4 === '4');
console.log(4 > 3 && 10 < 12);
console.log(4 > 3 && 10 > 12);
console.log(4 > 3 || 10 < 12);
console.log(4 > 3 || 10 > 12);
console.log(!(4 > 3));
console.log(!(4 < 3));
console.log(!(false));
console.log(!(4 > 3 && 10 < 12));
console.log(!(4 > 3 && 10 > 12));
console.log(!(4 === '4'));

let date = new Date();
console.log(`year:${date.getFullYear()}`);
console.log(`month:${date.getMonth()}`);
console.log(`date:${date.getDate()}`);
console.log(`day:${date.getDay()}`);
console.log(`hour:${date.getHours()}`)
console.log(`minutes:${date.getMinutes()}`)
console.log(`second:${date.getSeconds()}`);