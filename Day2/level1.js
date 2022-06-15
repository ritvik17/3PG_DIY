//RITVIK GUPTA
//Day 2 Level 1 JS 3PG

let challenge = "30 Days Of JavaScript"
console.log(challenge);
console.log(challenge.length);
console.log(challenge.toUpperCase());
console.log(challenge.toLowerCase());
console.log(challenge.substring(0, 1));
console.log(challenge.slice(3));
console.log(challenge.includes("Script"));
const arr=challenge.split(" ")
console.log(arr[0,3])
console.log(challenge.split(""));
console.log(challenge.split(" "));
console.log(arr)
let meta = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon"
console.log(meta.split(","));
console.log(challenge.replace("JavaScript", "Python"));
console.log(challenge.charAt(15));
console.log(challenge.charCodeAt("J"));
console.log(challenge.indexOf("a"));
console.log(challenge.lastIndexOf("a"));
let line = "You cannot end a sentence with because because because is a conjunction";
console.log(line.indexOf("because"));
console.log(line.lastIndexOf("because"));
console.log(line.search("because"));
console.log(challenge.trim());
console.log(challenge.startsWith("3"));
console.log(challenge.endsWith("t"));
console.log(challenge.match("a"));
let s1="30 Days Of";
let s2="JavaScript";
console.log(s1.concat(s2));
console.log(challenge.repeat(2));