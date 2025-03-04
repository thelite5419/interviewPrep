

# **JavaScript Interview Preparation**  

# **Template Literals**  
Template literals allow us to embed expressions inside strings using backticks (`` ` ``). They support multi-line strings and variable interpolation.  

**Syntax:**  
```js
let a = 5, b = 10;
console.log(`a is ${a}, b is ${b}`); 
// Output: a is 5, b is 10
```

### **Advantages:**  
✅ Easier string concatenation  
✅ Supports multi-line strings  
✅ Allows embedding expressions inside `${}`  

---

# **Hoisting**  
Hoisting is JavaScript's behavior of moving variable and function declarations to the top of their scope before code execution. **Only declarations are hoisted, not initializations.**  

### **How Hoisting Works:**  
- **Variable Hoisting**  
  - Variables declared with `var` are **hoisted and initialized with `undefined`**.  
  - Variables declared with `let` and `const` are **hoisted but not initialized**, causing a `ReferenceError` if accessed before declaration.  

- **Function Hoisting**  
  - Function **declarations** are fully hoisted, meaning they can be called before they appear in the code.  
  - Function **expressions** (e.g., `const func = function() {}`) are **not hoisted**.  

### **Examples:**  
#### ✅ **Hoisting with `var`**
```js
console.log(x);  // Output: undefined
var x = 10;
```
#### ❌ **Hoisting with `let` or `const` (causes error)**
```js
console.log(y);  // ReferenceError: Cannot access 'y' before initialization
let y = 10;
```
#### ✅ **Function Hoisting**
```js
greet();  // Output: "hello"
function greet() {
    console.log("hello");
}
```

> **Best Practice:** Declare variables at the top of their scope to avoid confusion.  

---

# **difference Between `var`, `let`, and `const`**  

| Feature        | `var`                 | `let`                | `const`             |
|---------------|----------------------|----------------------|----------------------|
| Scope        | Function scope        | Block scope         | Block scope         |
| Hoisting     | Yes (initialized as `undefined`) | Yes (but not initialized) | Yes (but not initialized) |
| Reassignment | Allowed              | Allowed             | ❌ Not Allowed       |
| Redeclaration | ✅ Allowed           | ❌ Not Allowed      | ❌ Not Allowed      |

**Example:**
```js
var a = 10; // Function-scoped
let b = 20; // Block-scoped
const c = 30; // Block-scoped & immutable
```

---

# **Data Types in JavaScript**  

JavaScript has two types of data:  

### **Primitive Data Types** (immutable, stored by value):  
✅ `Number` - `1, 2.5, Infinity, NaN`  
✅ `String` - `"hello"`, `'world'`, `` `template` ``  
✅ `Boolean` - `true`, `false`  
✅ `Undefined` - Variable declared but not assigned a value  
✅ `Null` - Represents an intentional empty value  
✅ `Symbol` - Unique immutable values, often used as object property keys  
✅ `BigInt` - Used for large integers (`BigInt(9007199254740991)`)  

### **Non-Primitive Data Types** (mutable, stored by reference):  
✅ `Object` - Collection of key-value pairs  
✅ `Array` - Ordered list of values `[1, "hello", true]`  
✅ `Function` - Reusable block of code  

**Example:**
```js
let obj = { name: "John", age: 25 }; // Object
let arr = [1, 2, 3]; // Array
function greet() { return "Hello"; } // Function
```

---

# **Working with Arrays**  

### **Array Declaration Methods:**  
```js
let arr1 = [1, 2, 3]; // Using array literal
let arr2 = new Array(1, 2, 3); // Using constructor
```

### **Accessing Array Elements:**  
```js
console.log(arr1[0]); // Access first element (Output: 1)
```

### **Looping Through an Array:**  
```js
// Using for loop
for (let i = 0; i < arr1.length; i++) {
  console.log(arr1[i]);
}

// Using forEach
arr1.forEach((item) => console.log(item));
```

---

# **Purpose of `NaN` (Not a Number)**  
`NaN` represents an invalid number or an operation that does not produce a valid numeric result.  

### **Key Points about `NaN`:**  
- Its type is **`number`**, even though it means "Not a Number".  
- `NaN` is **not equal to itself** (`NaN !== NaN` → true).  
- `isNaN(value)` checks if a value is **not a number**.  

### **Examples:**  
```js
console.log(typeof NaN); // "number"

console.log(isNaN("hello"));  // true  ("hello" cannot be converted to a number)
console.log(isNaN(1 / 0));     // false (Infinity is a number)
console.log(isNaN(undefined)); // true  (undefined is not a number)
console.log(isNaN('123'));     // false ('123' is converted to a number)
```
> **Correction:** `isNaN(1/0)` returns `false` because `1/0` is `Infinity`, which is a valid number.  

---

# **`typeof` Operator**  
The `typeof` operator is used to determine the data type of a given value.  

### **Usage:**  
```js
console.log(typeof 42);        // "number"
console.log(typeof "hello");   // "string"
console.log(typeof true);      // "boolean"
console.log(typeof undefined); // "undefined"
console.log(typeof null);      // "object" (JavaScript bug, should be `null`)
console.log(typeof {});        // "object"
console.log(typeof []);        // "object" (Arrays are objects)
console.log(typeof function(){}); // "function"
```
> **Note:** The `typeof` null returning `"object"` is a long-standing bug in JavaScript.  

---

# **`map()` Method in JavaScript**  
The `map()` method creates a **new array** by applying a function to each element of an existing array.  

### **Example:**  
```js
const numbers = [1, 2, 3, 45, 6, 8];
const doubled = numbers.map((num) => num * 2);

console.log(doubled); 
// Output: [2, 4, 6, 90, 12, 16]
```

### **Explanation:**  
1. `map()` iterates over each element in `numbers`.  
2. It applies the function `(num) => num * 2` to each element.  
3. It returns a **new array** with transformed values.  
4. The original array remains **unchanged**.  

> **Correction:** Fixed `comsole.log(double)` → should be `console.log(doubled)`.  

---

# **Event Bubbling and Event Capturing**  

### **Event Bubbling**  
- The event **starts from the innermost element** and **bubbles up** to the outer elements.  
- Default behavior in JavaScript.  

### **Event Capturing (Trickling)**  
- The event **starts from the outermost element** and **goes down** to the innermost element.  
- Happens when `{ capture: true }` is passed to `addEventListener`.  

---

### **Example Code:**
```html
<div id="topDiv">
    <div id="innerDiv"></div>
</div>
```

```js
document.getElementById("topDiv").addEventListener("click", () => {
    console.log("Outer div clicked");
});

document.getElementById("innerDiv").addEventListener("click", () => {
    console.log("Inner div clicked");
});
```

### **Behavior in Bubbling (Default Mode):**  
- Clicking `innerDiv`:  
  ```
  Inner div clicked
  Outer div clicked
  ```
- Clicking `topDiv`:  
  ```
  Outer div clicked
  ```

---

### **Behavior in Capturing Mode:**  
```js
document.getElementById("topDiv").addEventListener("click", () => {
    console.log("Outer div clicked");
}, true);  // Capture mode

document.getElementById("innerDiv").addEventListener("click", () => {
    console.log("Inner div clicked");
}, true);  // Capture mode
```

#### **Now, when clicking `innerDiv`:**  
1️⃣ `"Outer div clicked"` (first, because of capturing)  
2️⃣ `"Inner div clicked"` (then, as event reaches target)  

#### **Clicking `topDiv`:**  
1️⃣ `"Outer div clicked"`  

> **Correction:**  
- Fixed `id:topDiv` and `id:innerDiv` → should be `id="topDiv"` and `id="innerDiv"`.  
- `document.getElementById("topdiv")` → should be `"topDiv"`.  



---



# **Higher-Order Functions (HOFs)**  
A **higher-order function** is a function that:  
1️⃣ **Takes another function as an argument**  
2️⃣ **Returns a function as a result**  

### **Example: `map()` (A Higher-Order Function)**  
```js
const numbers = [1, 2, 3, 4];

const doubled = numbers.map(function (num) {
    return num * 2;
});

console.log(doubled); // Output: [2, 4, 6, 8]
```

### **Explanation:**  
- `map()` is a **higher-order function** because it **takes a function as an argument**.  
- It applies the function `(num) => num * 2` to each element in the array and **returns a new array**.  
- Original `numbers` array remains unchanged.  

---

# **Immediately Invoked Function Expression (IIFE)**  
IIFE is a function that **executes immediately** after being defined.  

### **Syntax:**  
```js
(function () {
    console.log('IIFE executed');
})(); // Immediately invoked
```

### **Explanation:**  
- `(function() {...})();` is an **IIFE**.  
- It is executed **without explicitly calling it**.  
- Used to **avoid polluting the global scope**.  

**Incorrect Example Fixed:**  
```js
function name2() {
    console.log('name');
}
name2(); // This is a normal function call, NOT an IIFE.
```

---

# **Closures in JavaScript**  
A **closure** is a function that **remembers** the variables from its outer scope even after the outer function has finished executing.  

### **Example:**  
```js
function outerFunction() {
    let a = 10;
    
    function innerFunction() {
        console.log('a:', a);
    }
    
    return innerFunction;
}

const closureExample = outerFunction();
closureExample(); // Output: a: 10
```

### **Explanation:**  
- `innerFunction()` **remembers** the value of `a` even after `outerFunction()` has finished execution.  
- This is called **closure** in JavaScript.  
- Used for **data privacy** since JavaScript does not have private variables by default.  

---

# **`setTimeout` and `setInterval`**  
### **1️⃣ `setTimeout` → Executes a function after a delay**  
```js
const timeoutId = setTimeout(() => {
    console.log("Hello after 2 seconds");
}, 2000);

// clearTimeout(timeoutId); // Uncomment to cancel timeout before execution
```

- Runs the function **after 2 seconds**.
- `clearTimeout(timeoutId)` cancels the timeout before execution.

---

### **2️⃣ `setInterval` → Executes a function repeatedly at intervals**  
```js
const intervalId = setInterval(() => {
    console.log("Hello every 2 seconds");
}, 2000);

setTimeout(() => {
    clearInterval(intervalId);
}, 4500); // Stops after 4.5 seconds
```

### **Execution Order:**  
1️⃣ `"Hello every 2 seconds"` printed **after 2 seconds**  
2️⃣ `"Hello every 2 seconds"` printed again at **4 seconds**  
3️⃣ `clearInterval()` stops further execution  

---

# **Promises in JavaScript**  
A **Promise** is used to handle **asynchronous operations**.  

### **Promise States:**  
✅ **Pending** → Initial state  
✅ **Fulfilled** → Success (resolved)  
✅ **Rejected** → Failure  

### **Example:**  
```js
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data received");
        }, 2000);
    });
}

fetchData()
    .then(data => {
        console.log('data :>> ', data);
    })
    .catch(err => {
        console.log('err :>> ', err);
    });
```

### **Explanation:**  
1️⃣ `fetchData()` returns a **Promise**.  
2️⃣ `setTimeout` simulates a **delayed operation** (API call).  
3️⃣ After 2 seconds, **Promise is resolved** (`resolve("Data received")`).  
4️⃣ `.then()` executes when **resolved**.  
5️⃣ `.catch()` executes if **rejected** (not used in this example).  

---

# **`async` and `await` in JavaScript**  
**`async`** and **`await`** make handling Promises easier by allowing us to write asynchronous code that looks synchronous.  

### **🔹 `async` Function**  
Declaring a function with `async` makes it automatically return a **Promise**.  

### **🔹 `await` Keyword**  
`await` **pauses execution** inside an `async` function **until** the Promise is resolved or rejected.  

### **✅ Example: Fetching Data Asynchronously**  
```js
const fetchData2 = async () => {
    try {
        const response = await fetch("https://dummyjson.com/products");
        
        // Fix: Await the response.json()
        const data = await response.json(); 
        
        console.log('data :>> ', data);
    } catch (error) {
        console.log('err :>> ', error);
    }
}

// Call the function
fetchData2();
```

### **🔹 Explanation:**  
1️⃣ **`fetchData2` is an `async` function**, meaning it returns a **Promise**.  
2️⃣ **`await fetch("URL")`** waits for the API response **before moving to the next line**.  
3️⃣ **`await response.json()`** waits for the response body to be parsed into JSON.  
4️⃣ **If an error occurs, `catch` block handles it**.  

---

# **`call`, `apply`, and `bind` in JavaScript**  
These methods **control the value of `this`** inside a function and allow passing arguments in different ways.  

### **🔹 `call()`** → Pass arguments **one by one**  
```js
function cook(ind1, ind2) {
    console.log(`${this.name} is cooking ${ind1} and ${ind2}`);
}

const adam = { name: 'Adam' };

cook.call(adam, "rice", "dal"); // Output: Adam is cooking rice and dal
```

### **🔹 `apply()`** → Pass arguments **as an array**  
```js
cook.apply(adam, ["rice", "dal"]); // Output: Adam is cooking rice and dal
```

### **🔹 `bind()`** → Returns a new function that needs to be called manually  
```js
const cookHere = cook.bind(adam, "rice", "dal");
cookHere(); // Output: Adam is cooking rice and dal
```

### **🔹 Key Differences**  
| Method | Execution | Argument Passing |
|--------|-----------|------------------|
| **call()** | Immediately invoked | Individual arguments |
| **apply()** | Immediately invoked | Array of arguments |
| **bind()** | Returns a new function (not invoked immediately) | Individual arguments |

---

# **JavaScript Event Loop**  
The **event loop** allows JavaScript to handle asynchronous tasks in a single-threaded environment.  

### **🔹 Execution Order**  
1️⃣ **Synchronous Code** → Runs first.  
2️⃣ **Microtasks (Promises, `queueMicrotask`)** → Runs next.  
3️⃣ **Macrotasks (`setTimeout`, `setInterval`)** → Runs last.  

### **✅ Example**  
```js
console.log("Start");

setTimeout(() => console.log("Timeout"), 0);

Promise.resolve().then(() => console.log("Promise"));

console.log("End");
```
### **🔹 Output:**
```
Start
End
Promise
Timeout
```
**Why?**  
- **Synchronous code (`console.log("Start")` and `console.log("End")`) runs first**.  
- **Promise (`.then()`) runs before `setTimeout`** because Promises are in the **Microtask Queue**.  
- **`setTimeout` runs last** since it belongs to the **Macrotask Queue**.  

---

# **Difference Between `Promise` and `async/await`**

![Image Alt Text](https://github.com/thelite5419/interviewPrep/blob/main/promise-AsyncAwait.png)

🔹 **Promise-Based Approach**
```js
fetch("https://dummyjson.com/products")
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.log(error));
```

🔹 **`async/await` Approach**
```js
async function fetchData() {
    try {
        let response = await fetch("https://dummyjson.com/products");
        let data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

fetchData();
```

### **🔹 Key Differences**
| Feature | `Promise` | `async/await` |
|---------|----------|--------------|
| **Code Readability** | More chaining (`.then()`) | Looks synchronous, cleaner |
| **Error Handling** | Uses `.catch()` | Uses `try/catch` |
| **Execution** | Non-blocking, but chaining required | Blocks execution within function |

---

# **`reduce()` in JavaScript**  
The **`reduce()`** method **reduces** an array to a single value by applying a function iteratively.  

### **✅ Example: Sum of an Array**
```js
const numbers1 = [1, 2, 3, 4];

let sum = numbers1.reduce((accumulator, current) => {
    return accumulator + current;
}, 0);

console.log('sum :>> ', sum); // Output: 10
```

---

### **🔹 Step-by-Step Execution**
| Step | Accumulator (`acc`) | Current Value (`cur`) | Result |
|------|---------------------|----------------------|--------|
| 1️⃣ Initial Accumulator (`0`) | `0` | `1` | `0 + 1 = 1` |
| 2️⃣ Next Iteration | `1` | `2` | `1 + 2 = 3` |
| 3️⃣ Next Iteration | `3` | `3` | `3 + 3 = 6` |
| 4️⃣ Next Iteration | `6` | `4` | `6 + 4 = 10` |

### **🔹 Explanation**
- **`accumulator` starts at `0` (initial value)**.
- Each iteration **adds `current` to `accumulator`**.
- **Final result = `10`**.

---


# **Currying in JavaScript**
Currying is a technique where a function takes multiple arguments **one at a time** instead of all at once.

### **✅ Example**
```js
function double(a) {
    return function (b) {
        return a + b;
    }
}

const double3 = double(5); // Returns a function
console.log(double3(3)); // Output: 8
```

### **🔹 Step-by-Step Execution**
| Step | Code | Explanation |
|------|------|------------|
| 1️⃣ | `double(5)` | Calls `double()`, passing `5` as `a`. |
| 2️⃣ | `double(5)` **returns** `function(b) { return a + b; }` | This function still remembers `a = 5` (Closure). |
| 3️⃣ | `double3(3)` | Calls the returned function, passing `b = 3`. |
| 4️⃣ | `return 5 + 3` | The function executes and returns `8`. |
| 5️⃣ | `console.log(8)` | Prints `8`. |

### **🔹 Why Use Currying?**
- Helps **modularize** code.
- **Reusability**: You can partially apply functions.
- Useful in **functional programming**.

---

# **Shallow Copy vs Deep Copy**
When copying objects or arrays in JavaScript, there are **two types of copies**:  

### **🔹 Shallow Copy**
A **shallow copy** creates a new object, but **nested objects/arrays still reference the original**.

```js
const obj1 = { name: "John", details: { age: 30 } };
const obj2 = { ...obj1 }; // Shallow copy

obj2.details.age = 40; // Modifying nested object

console.log(obj1.details.age); // Output: 40 (also changed in obj1!)
console.log(obj2.details.age); // Output: 40
```

#### **🔹 Why?**
- **`...` (spread operator) and `Object.assign()`** only copy top-level properties.
- **Nested objects still point to the same reference**.

---

### **🔹 Deep Copy**
A **deep copy** completely duplicates the object, including nested objects.

```js
const obj1 = { name: "John", details: { age: 30 } };
const obj2 = JSON.parse(JSON.stringify(obj1)); // Deep copy

obj2.details.age = 40; // Changing obj2 doesn't affect obj1

console.log(obj1.details.age); // Output: 30
console.log(obj2.details.age); // Output: 40
```

### **🔹 Deep Copy Methods**
| Method | Type |
|--------|------|
| `JSON.parse(JSON.stringify(obj))` | **Deep Copy** (but loses functions & `undefined`) |
| `structuredClone(obj)` (Modern JS) | **Deep Copy** (Handles functions & `undefined`) |
| `Lodash _.cloneDeep(obj)` | **Deep Copy** (Third-party library) |

---

# **JavaScript Strict Mode (`"use strict"`)**
Strict mode **enforces stricter parsing and error handling** in JavaScript.

### **✅ How to Enable Strict Mode**
```js
"use strict";

x = 10; // ❌ ERROR: x is not defined
```

### **🔹 Rules of Strict Mode**
| Rule | Without `"use strict"` | With `"use strict"` |
|------|----------------|------------------|
| **1️⃣ Undeclared variables** | `x = 10;` (Allowed) | ❌ `x is not defined` |
| **2️⃣ Read-only properties** | Can modify read-only properties | ❌ Throws an error |
| **3️⃣ Duplicate parameters** | Allowed in functions | ❌ Syntax error |
| **4️⃣ `this` in functions** | Default to `window` | `undefined` |
| **5️⃣ Reserved words** | Can use future reserved words | ❌ Throws error (`implements`, `let`, `public`, etc.) |

### **🔹 Example of Errors in Strict Mode**
```js
"use strict";

function test(a, a) {  // ❌ ERROR: Duplicate parameter name
    return a;
}

var obj = {};
Object.defineProperty(obj, "prop", { value: 10, writable: false });
obj.prop = 20; // ❌ ERROR: Cannot assign to read-only property
```

### **🔹 Why Use Strict Mode?**
- **Prevents accidental global variables**.
- **Catches common JavaScript mistakes**.
- **Helps JavaScript run faster (optimizations)**.

---