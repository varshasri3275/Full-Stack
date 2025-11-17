// console.log("Hello");

//Js Operators
var num1 = 10;
var num2 = 2;
var sum = num1 + num2;
console.log(sum); //If we want to save it for future
// console.log(num1+num2); //If we don't want to save for future

//Short hand operators
//a = a+b
//a += b

var a = 2;
var b = 3;
console.log(a+=b);

//Increment and Decrement
var num = 10;
console.log(num++);
console.log(num);
console.log(++num);
console.log(num);

var x = 15;
console.log(x--);
console.log(x);
console.log(--x);
console.log(x);

//Comparison operator
var val1 = 2;
var val2 = "2";
console.log(val1 == val2); // ==, will check for value
console.log(val1 === val2); //===, will check for value and also data type (Strict type)
console.log(val1 != val2);
console.log(val1 !== val2);

// >, < , >=, <=

//!false = true
//!true = false
var isCrt = true;
console.log(isCrt);
console.log(!isCrt);

//Validate whether he/she is eligible to vote

//if(validate the condition here){
    //if condition is true execute this part
//}else{
    //if condition is false then execute this part
//}
var age = 16;
if(age >= 18){
    console.log("Eligible to vote!!");
}else{
    console.log("Not Eligible to vote..");
}

//Conditional operator || Ternary Operator
//condition ? true : false;
age > 18 ? console.log("Eligible to vote!!") : console.log("Not Eligible to vote..");


//functions => group of instructions to perform certain opearation
var obj1 = {
    name: "Duke",
    bikename: function(){
        console.log("Hello this is bike name");
    }
};

console.log(obj1.name);
obj1.bikename();

//1. Named function
function sum1(a1,b1){
    console.log(a1+b1);
}

//call a function
sum1(2,3);

//2. Anonymous function || Function Expression
var sum2 = function(p,q){
    console.log(p+q);
}
sum2(5,5);

var demo = function(){
    console.log("Demo here");
}
demo();

//3. Arrow Function
var sum3 = (l,m) => {
    console.log(l+m);
}
sum3(3,3);

//no need of {} for a single line of function
var sum3 = (l,m) =>  console.log(l+m);
sum3(3,3);