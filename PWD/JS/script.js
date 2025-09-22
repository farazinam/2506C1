// -------------------- D A Y - 1 --------------------------

document.write("Hello World!");

document.write("<hr>");
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
// var age = 22;
// var cnic = true;

// console.log(age >= 18 && cnic == true);

// var time = 12;
// var book = true;

// console.log(time == 11 || book == true);

// if(time == 11 && book == true){
//     console.log("You Are ALLOWED to enter the Class");
// }
// else{
//     console.log("Go Out and Come in Next Class on Time");
// }


// -------------------- D A Y - 3 (Downpour) --------------------------

// // increment and decrement Opr (++, --)
// document.write("<h3> Increment and Decrement Opr </h3>");

// document.write("<h4> Increment Opr </h4>");

// var a = 5;
// document.write(a);

// //pre increment
// document.write(++a);  // a = a + 1
// document.write(a);
// // //post increment
// document.write(a++);
// document.write(a);

// document.write(a);

// document.write("<h4> Decrement Opr </h4>");

// var b = 10;
// //pre decrement
// document.write(--b);
// document.write(b);
// // //post decrement
// document.write(b--);
// document.write(b);


// -------------------- D A Y - 4 --------------------------


// document.write("<h3><u> Conditional Statements - Decision Making Statement </u></h3>");

var age = 17;

// if(age >= 18){
//     document.write("You Are Eligible To apply For CNIC");
//     alert("You Are Eligible To apply For CNIC");
// }
// else{
//     document.write("You Are NOT Eligible To apply For CNIC")
//     alert("You Are NOT Eligible To apply For CNIC")
// }

// Grade Calculator
// document.write("<h4> Grade calculator Using If Else </h4>");

// var percentage = prompt("Enter A Percentage");

// if(percentage >= 80 && percentage <= 100){
//     document.write("Your Garde is A+");
// }
// else if(percentage >= 70 && percentage <= 79){
//     document.write("Your Garde is A");
// }
// else if(percentage >= 60 && percentage <= 69){
//     document.write("Your Garde is B");
// }
// else if(percentage >= 50 && percentage <= 59){
//     document.write("Your Garde is C");
// }
// else if(percentage >= 40 && percentage <= 49){
//     document.write("Your Garde is D");
// }
// else if(percentage >= 0 && percentage <= 39){
//     document.write("You are FAIL");
// }
// else{
//     document.write("Please Provide Correct Percantage");
// }

//Switch Case
// document.write("<h4> Days Using Switch Case </h4>");

// var days = prompt("Enter a day")

// switch(days){
//     case "monday":
//     case "wednesday":
//     case "friday":
//     alert("Today is your Class");
//     break;

//     case "tuesday":
//     case "thursday":
//     case "saturday":
//     alert("No Class Today");
//     break;

//     default :
//     alert("Please Provide correct day");
//     break;
// }


// -------------------- D A Y - 5 --------------------------

// Loops

// Types of Loops (for, while, do-while)

// document.write("1 Aptech Learning <br>");
// document.write("2 Aptech Learning <br>");
// document.write("3 Aptech Learning <br>");
// document.write("4 Aptech Learning <br>");
// document.write("5 Aptech Learning <br>");
// document.write("6 Aptech Learning <br>");
// document.write("7 Aptech Learning <br>");

// document.write("<hr>");

//for
// for(var i = 1; i <= 10; i++){
//     document.write(i + " Aptech Learning <br>");
// }

// for(var i = 10; i >= 0; --i){
//     document.write(i + " Aptech Learning <br>");
// }

// for(var i = 1; i >= 0; ++i){
//     console.log(i);
// }

// for(var i = 0; i <= 10; i = i + 2){
//     document.write(i + "<br>");
// }

// for(var i = 1; i <= 10; i = i + 2){
//     document.write(i + "<br>");
// }

//table
// var num = prompt("Enter a Number", "e.g; 7");

// for(var x = 1; x <= 10; x++){
//     document.write(num + " X " + x + " = " + num*x + "<br>")
// }

// for(var i = 1; i < 1; i++){
//     document.write(i + " Aptech Learning <br>");
// }


//while
// var i = 0;
// while(i < 10){
//     document.write(i + "While Loop <br>");
//     i++;
// }

// var i = 1;
// while(i < 1){
//     document.write(i + "While Loop <br>");
//     i++;
// }

//do while
// var i = 1;
// do{
//     document.write(i + " Do While Loop <br>")
//     ++i;
// }
// while(i < 1);

// jump statement
// for(var i = 1; i <= 10; i++){
//     if(i%2 == 0){
//         document.write(i + "<br>");
//     }
// }

// for(var i = 1; i <= 10; i++){
//     if(i%2 == 1){
//         document.write(i + "<br>");
//     }
// }

//continue 
// for(var i = 1; i <= 10; i++){
//     if(i%2 == 0){
//         continue;
//     }
//     document.write(i + "<br>");
// }

//break
// for(var i = 1; i <= 10; i++){
//     if(i == 5){
//         break;
//     }
//     document.write(i + "<br>");
// }



// -------------------- D A Y - 6 --------------------------

//built-in Functions


// alert("Hello World!");
// confirm("Are you Sure?");
// prompt("Enter a number");

// var num1 = parseInt(prompt("enter First Number"));
// var num2 = parseInt(prompt("Enter Second Number"));

// var num1 = +prompt("enter First Number");
// var num2 = +prompt("Enter Second Number");
// var c = num1 + num2;

// document.write(typeof(num1));

// // alert("Subtraction of " + num1 + " AND " + num2 + " is " + c);
// // alert("Multiplication of " + num1 + " AND " + num2 + " is " + c);
// // alert("Division of " + num1 + " AND " + num2 + " is " + c);
// alert("Addition of " + num1 + " AND " + num2 + " is " + c);

// -----------------------

// var name1 = prompt("enter Your Name");
// var name2 = prompt("Enter Your Friend Name");

// var random = Math.random();
// var round = Math.round(random);

// console.log(round);

// if(round == 0){
//     alert(name1 + " Wins" + round);
// }
// else{
//     alert(name2 + " Wins" + round);
// }


// var word = prompt("enter a word");
// var split = word.split("");
// var rev = split.reverse();
// var join = rev.join("");

// if(word == join){
//     alert("Palendrome Word")
// }
// else{
//     alert("Not a palendrome word");
// }

// Custom Functions

//defining a function
// function myfun(){
//     document.write("Hello! <br>");
//     document.write("This is my Own created Function <br>");
//     document.write("Addition of Two numbers are " + (3+9) + "<br>");
// }

// //call/revoke function
// myfun();
// myfun();
// myfun();

// document.write("jgafgsdfdsjlf");

// myfun();


// parametarized functions

// function para(a){
//     alert(a);
// }
// para("faraz");

// function para(a, b){
//     alert(a + b);
// }
// para("Faraz ", "Inam");
// para(4,8);
// para("ABC", 123);


// -------------------- D A Y - 7 --------------------------

// function abc(i, j){
//     return i * j;
// }

// document.write(abc(3, 8));
// var output = abc(5,9);
// document.write(output);

// for(var i = 1; i<10; i++){
//     for(var j = 1; j < i; j++){
//         document.write("🙂");
//     }
//     document.write("<br>");
// }

// Arrays
// var names = ["Saadat", "Sameer", "Moin", "Sharjeel", "Zain"];
// var age = [16, 19, 18];
// var mix = ["Ali", 21, "Karachi", 5.9, true]

// document.write(names[0]);
// document.write(names[1]);
// document.write(names[2]);

// document.write(names);
// document.write("<br>");

// document.write(names[0], names[1], names[2]);

// document.write(age[0]);
// document.write(age[1]);
// document.write(age[2]);

// for(var i = 0; i < names.length; i++){
//     document.write(names[i] + "<br>");
// }


// -------------------- D A Y - 8 --------------------------

// var num1 = +prompt("Enter first Number");
// var num2 = +prompt("Enter second Number"); 
// var opr = prompt("Enter Operator"); 

// if(opr == "+"){
//     alert("The Sum of " + num1 + " AND " + num2 + " is " + (num1 +  num2))
// }
// else if(opr == "-"){
//     alert(`The Subtraction of ${num1} and ${num2} is ${num1 - num2}`)
// }
// // else if(opr == "*"){
// //     alert(`The Multiplication of ${num1} and ${num2} is ${num1 * num2}`)
// // }
// // else if(opr == "/"){
// //     alert(`The Division of ${num1} and ${num2} is ${num1 / num2}`)
// // }
// else{
//     alert("Please provide Correct Operator or Operand");
// }

// Multi-diemntional Array

// var records = [
//     ["Sameer", "Sharjeel", "Khaisamah", "Moin", "Wasay"],  //0
//     [12, 13, 18, 16, 14],  //1
//     [5.9, 5.6, 5.7, 6, 5.5]  //2
// ];

// document.write(records[0][2] + "<br>");
// document.write(records[2][2] + "<br>");

// for(var i = 0; i < 3; i++){
//     for(var j = 0; j < 5; j++){
//         document.write(records[i][j]);
//     }
//     document.write("<br>");
// }

// document.write(records +  "<br>");
// delete records[0][0];
// document.write(records);

// records.push("Adil");

// document.write(records);
// records.pop();
// document.write(records);

// records.shift();
// document.write("<br>")
// document.write(records);


// var names = ["Saadat", "Sameer", "Moin", "Sharjeel", "Zain"];
// var age = [16, 19, 18, 60, 70, 88, 30];

// document.write(names);
// document.write("<br>");

// names.sort()
// document.write(names);

// document.write(age);
// document.write("<br>");
// age.sort();
// document.write(age);
// age.reverse();
// document.write("<br>");
// document.write(age);


// Object

var student = {
    name: "Ali",
    age: 17,
    cnic: false,
    city:"karachi",
    contact:3232522330
};


// console.log(student);
// // document.write(student);
// document.write(student.name);
// document.write(student.age);
// document.write(student.cnic);
// document.write(student.city);


var abc = new Object();
abc.name = "Shampoo";
abc.price = 1799;
abc.brand = "Saeed Ghani";

// document.write(abc.name +  "<br>");
// document.write(abc.price +  "<br>");
// document.write(abc.brand +  "<br>");


for(var key in student){
    document.write(key + " : " + student[key] + "<br>");
}