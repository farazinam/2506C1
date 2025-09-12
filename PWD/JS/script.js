// -------------------- D A Y - 1 --------------------------

document.write("Hello World!");

document.write("<br>");
// alert("Hello World!");
// console.log("Hello world!");

// variables

// var a = 5;
// document.write(a);

// var name = 'Ali'; //string
// document.write(name);

// name = "Faraz";
// document.write(name);

// document.write(name);

// document.write("My Name is " + name);

// document.write(30 + 20);
// var num1 = 22;
// var num2 = 7;
// // document.write(num1 + num2)
// document.write("The Addition of Number 1 and Number 2 is " + (num1 + num2));

// // var, let, const

// var v = 5;
// let l = 10;
// const c = 15;

// var v = 10;
// l = 3;
// // c = 20;

// document.write(v);  //10
// document.write(l);  //3
// document.write(c);  //15


// Varibale naming Rule
// lab = 10;
// MyName = "Ali";
// My_Name_is = "Ali";
// m4yname8 = "Abc";
// _123 = "hfghj";
// $12hjgfh = "hjsh";


// -------------------- D A Y - 2 --------------------------

// var x = 5;
// var X = 10;
// document.write(X);

// var name = "Faraz";
// var NAME = "FARAZ";

// document.write(name);
// document.write(NAME);

// ---------- Data Types -------

// 1. Prmitive DT
// var age = 22; //number
// var city;  // Undefined
// city = 'karachi'; // string
// var email = null; // null
// var isEligible = true;  // boolean

// 2. Non - Prmitive DT / Composite Data Types
// var studentName = ["Ali", "bilal", "Usman"]; // array
// var studentDetails = { name: "Khaisamah", age:20, city: "Lahore"};
// function work (){
//     console.log("Hello World");
// }


// ----------- Operators --------------

// var num1 = 8;
// var num2 = "8";

// // Arithmetic Opr (+, -, *, /, %, **)

// console.log(num1 + num2);  // 12
// console.log(num1 - num2);  // 4
// console.log(num1 * num2);  // 32
// console.log(num1 / num2);  // 2
// console.log(num1 % num2);  // 0
// console.log(num1 ** num2);  //4096


// //Assignment Opr (=, +=, -=, *=, /=, %=, **=)

// console.log(num1);  // 8
// console.log(num2);  // 4

// console.log(num1 += num2);  // 12

// console.log(num1);  // 12
// console.log(num2);  // 4


// console.log(num1);  // 8
// console.log(num2);  // 4

// console.log(num2 -= num1);  // 4

// console.log(num1);  // 4
// console.log(num2);  // 4


// //Comparison/Relational Opr (==, ===, >, >=, <, <=, !=, !==)

// console.log(num1 == num2);  //false
// console.log(num1 > num2);  //true
// console.log(num1 >= num2); //true
// console.log(num1 < num2);  //false
// console.log(num1 <= num2);  //false
// console.log(num1 != num2);  //true
// console.log(num1 !== num2);  //false
// console.log(num1 == num2);  //true
// console.log(num1 === num2);  //false


// //Logical Opr (&&, ||, !)
var age = 22;
var cnic = true;

console.log(age >= 18 && cnic == true);

var time = 12;
var book = true;

console.log(time == 11 || book == true);

if(time == 11 && book == true){
    console.log("You Are ALLOWED to enter the Class");
}
else{
    console.log("Go Out and Come in Next Class on Time");
}


// -------------------- D A Y - 3 (Downpour) --------------------------

// // increment and decrement Opr (++, --)
document.write("<h3> Increment and Decrement Opr </h3>");

document.write("<h4> Increment Opr </h4>");

var a = 5;
document.write(a);

//pre increment
document.write(++a);
document.write(a);
//post increment
document.write(a++);
document.write(a);

document.write(a);

document.write("<h4> Decrement Opr </h4>");

var b = 10;
//pre decrement
document.write(--b);
document.write(b);
//post decrement
document.write(b--);
document.write(b);

