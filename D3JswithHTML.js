//Strings 
var data = "Hey everyone Hope you all Are DOING good";
console.log("data: ",data);

console.log("lower case: ",data.toLowerCase());
console.log("upper case: ",data.toUpperCase());

//Slice
//data = data.slice(2,6);
console.log("Slice: ",data.slice(2,6));  //(index, index-1) && index always starts from 0

//Length
console.log("lenght: ",data.length);

//replace
//data = data.replace("Hey","Hi"); //("what string should be replaced","what is the value which you want over there")
console.log("replace: ",data.replace("Hey","Hi"));
console.log("lenght: ",data.length);

//includes
console.log("includes: ",data.includes("you"));
console.log("includes: ",data.includes("you1"));

//String -> int
var var1 = "2345";
console.log(var1);
console.log(parseInt(var1));

var varInvalidNum = "111Safe";
console.log(parseInt(varInvalidNum));

var varInvalidNum1 = "Safe111";
console.log(parseInt(varInvalidNum1));

var varInvalidNum2 = "10Safe01";
console.log(parseInt(varInvalidNum2));

//int -> String
var var2 = 7890;
console.log(var2);
console.log(var2.toString());
console.log(var2.toLocaleString());

//split
var demo = "good morning";
console.log(demo);
console.log(demo.split(" "));
console.log(demo.split("o"));

//objects
var obj1 = {
    name: "Varsh",
    age: 21
};
console.log(obj1);
console.log(obj1.name);
console.log(obj1.age);
console.log(Object.keys(obj1));
console.log(Object.values(obj1));

obj1.designation = "Software Developer";

//update the obj1
obj1.name = "sri";
console.log(obj1);

//arrays (map, filter, reduce)
//promises
//async & await
//Try & Catch
//obj with multiple concepts
//function (normal/ named func, aanonymous func, arrow func)
//classes
//conditional statement & loops