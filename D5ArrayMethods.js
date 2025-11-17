// Array Methods/ Methodology
var array = [1,2,3,4,5];
console.log("current array => ",array);

// 1. Map
//call back function
var newArray = array.map((data) => data+2); //*2
//var newArray = array.map((data) => {return data*2});
console.log("new array => with map => ", newArray);
array = array.map((item, index) => console.log(item*2, " => ", index));


// 2. Filter
var array2 = [1, 2, 3, 4, 5];
const newArray2 = array2.filter((data) => data<=3);
console.log("Filter => ", newArray2);


// 3. Find
var newArray3 = array2.find((data)=> data<3);
console.log("Find => ",newArray3); //if it exists it output is 1 or doesn't exist means it output is undefined 

// 4. Reduce
var newArray4 = array2.reduce((data, index) => {
    return data*index;
},1)
console.log(newArray4);

var Flipcart = [
    {
        price: 200,
        quality: 2
    },
    {
        price: 400,
        quality: 2
    },
    {
        price: 100,
        quality: 2
    },
    {
        price: 1200,
        quality: 2
    },
    {
        price: 500,
        quality: 2
    }
];
var totalCost = Flipcart.reduce((accumulator, currentvalue) =>{
    return accumulator+currentvalue.price * currentvalue.quality;
},0)

console.log(totalCost);


// Promises
// It is an object that returns a value that we hope to receive in the future but not immediately
// youtube playlist
// 2:20 sec buffer  2:55sec
// 1. pending state (need to watch)
// 2. fulfill (playing)
// 3. reject (not able to play)

// Syntax: var myPromise = new Promise(()=>{})
// Syntax: var myPromise = new Promise(function (){})

var myPromise = new Promise((resolve,reject)=>{
    resolve("Success");

    reject("Error occured");
});

                //or
// var myPromise = new Promise((resolve,reject)=>{
//     setTimeout(function(){
//         resolve("Success");
//     },5000)

//     setTimeout(function(){
//         reject("Error occured");
//     },3000)

// });

myPromise
.then((data)=>{console.log(data)})
.catch((error)=>{console.log(error)});