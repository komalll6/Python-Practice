let input = prompt("Enter Name, Class, RollNumber, Age: ");

let data = input.split(" ");

let name = data[0];
let studentClass = data[1];
let rollNumber = data[2];
let age = data[3];

document.write("Name: " + name + "<br>");
document.write("Class: " + studentClass + "<br>");
document.write("Roll Number: " + rollNumber + "<br>");
document.write("Age: " + age);