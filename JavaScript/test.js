// ============================
// Map function to double numbers
const numbers = [1, 2, 3, 45, 6, 8];

const double = numbers.map((num) => {
    console.log("num :>> ", num); // Logs each number in the array
    return num * 2;
});

console.log("double :>>", double);

/*
Output:
num :>>  1
num :>>  2
num :>>  3
num :>>  45
num :>>  6
num :>>  8
double :>> [2, 4, 6, 90, 12, 16]
*/

// ============================
// Regular function declaration
function name2(params) {
    console.log("name");
}

name2();

/*
Output:
name
*/

// IIFE (Immediately Invoked Function Expression)
(function () {
    console.log("IIFE");
})();

/*
Output:
IIFE
*/

// ============================
// Closure example
function het() {
    let a = 10;
    function hke() {
        console.log("a:", a);
    }
    return hke;
}

const hii = het();
hii();

/*
Output:
a: 10
*/

// ============================
// setTimeout and setInterval example
const timeout = setTimeout(() => {
    console.log("Hello after 2 seconds");
}, 2000);

const interval = setInterval(() => {
    console.log("Hello every 2 seconds");
}, 2000);

setTimeout(() => {
    clearInterval(interval);
    console.log("Interval cleared after 4.5 seconds");
}, 4500);

/*
Output (approximate timing):
(After 2 sec)  => Hello after 2 seconds
(After 2 sec)  => Hello every 2 seconds
(After 4 sec)  => Hello every 2 seconds
(After 4.5 sec) => Interval cleared after 4.5 seconds
*/

// ============================
// Promise example with setTimeout
const data = {
    name: "john",
    age: 25,
};

function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(data);
        }, 2000);
    });
}

fetchData()
    .then((data) => {
        console.log("data :>> ", data);
    })
    .catch((err) => {
        console.log("err :>> ", err);
    });

/*
Output (after 2 sec):
data :>>  { name: 'john', age: 25 }
*/

// ==========================================
// Async/Await fetch example
const fetchData2 = async () => {
    try {
        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json();
        console.log("Fetched data :>> ", data);
    } catch (error) {
        console.log("err :>> ", error);
    }
};

fetchData2();

/*
Output (depends on API response):
Fetched data :>> { products: [...], total: ..., skip: ..., limit: ... }
*/

// ==========================================
// Function borrowing using call, apply, and bind
function cook(ind1, ind2) {
    console.log(`${this.name} is cooking ${ind1} and ${ind2}`);
}

const adam = { name: "adam" };

cook.call(adam, "rice", "dal"); 
cook.apply(adam, ["rice", "dal"]);

const cookHere = cook.bind(adam, "rice", "dal");
cookHere();

/*
Output:
adam is cooking rice and dal
adam is cooking rice and dal
adam is cooking rice and dal
*/

// ==========================================
// Reduce method - Sum of array elements
let numbers1 = [1, 2, 3, 4];

let sum = numbers1.reduce((accumulator, current) => {
    return accumulator + current;
}, 0);

console.log("sum :>> ", sum);

/*
Output:
sum :>>  10
*/

// ==========================================
// Currying function

function double(a) {
    return function (b) {
        return a + b; // Fixed: Added return statement
    };
}

const double3 = double(5);
console.log("double3(3) :>> ", double3(3));

/*
Output:
double3(3) :>>  8
*/


(params) => {
    
}