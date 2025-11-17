// A Promise in JavaScript represents a value that will be available now, later, or never.

// | State         | Meaning                 |
// | ------------- | ----------------------- |
// | **pending**   | Still working (waiting) |
// | **fulfilled** | Success                 |
// | **rejected**  | Failed                  |


//Creating promises
let promise = new Promise((resolve, reject) => {
    let success = true;

    if (success) {
        resolve("Task completed!");
    } else {
        reject("Something went wrong!");
    }
});
//Using .then() and .catch()
promise
    .then(msg => console.log(msg))
    .catch(err => console.log(err));


// Example without async/await (using then)
function getData() {
    return new Promise(resolve => {
        setTimeout(() => resolve("Data received"), 2000);
    });
}

getData().then(result => console.log(result));



// Same example WITH async/await (clean)
async function fetchData() {
    let result = await getData();
    console.log(result);
}

fetchData();
