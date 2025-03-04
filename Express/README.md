# **Advantages of Using Express with Node.js**
Express.js is a popular framework that makes Node.js development **easier** and **more efficient**.

### **🔹 1. Simplified Web Development**
- Express provides a **lightweight** and **minimalistic** framework for handling HTTP requests.
- **Example Without Express:**
  ```js
  const http = require("http");

  const server = http.createServer((req, res) => {
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("Hello, World!");
  });

  server.listen(3000, () => {
      console.log("Server is running on port 3000");
  });
  ```
  - **Needs manual request handling.**
  - **Complex when adding features like routing, middleware, etc.**

- **Example With Express:**
  ```js
  const express = require("express");
  const app = express();

  app.get("/", (req, res) => {
      res.send("Hello, World!");
  });

  app.listen(3000, () => {
      console.log("Server is running on port 3000");
  });
  ```
  - **Less code, built-in routing, and easy-to-use functions!**

---

### **🔹 2. Middleware Support**
- Middleware functions allow you to **process requests before they reach the route handler**.
- **Example: Logging Middleware**
  ```js
  app.use((req, res, next) => {
      console.log(`${req.method} ${req.url}`);
      next(); // Move to the next middleware or route
  });
  ```
- Middleware helps with:
  ✅ **Logging**  
  ✅ **Authentication**  
  ✅ **Error Handling**  

---

### **🔹 3. Flexible Routing System**
- Express provides **powerful routing** with `express.Router()`.
- **Example:**
  ```js
  const router = express.Router();

  router.get("/home", (req, res) => {
      res.send("Welcome Home!");
  });

  app.use("/", router);
  ```
- Supports:
  ✅ **Dynamic routes (`/user/:id`)**  
  ✅ **Multiple HTTP methods (`GET`, `POST`, `PUT`, `DELETE`)**  

---

# **Middleware in Express.js**
Middleware functions **run before** the request reaches the final handler.

### **🔹 Middleware Execution Flow**
1️⃣ Request comes in  
2️⃣ **Middleware 1:** Logs request  
3️⃣ **Middleware 2:** Checks authentication  
4️⃣ **Middleware 3:** Queries database  
5️⃣ Final Response is sent  

### **🔹 Implementing Middleware**
```js
const express = require("express");
const app = express();

// Middleware Function
const myMiddleware = (req, res, next) => {
    console.log("Middleware Executed");
    next(); // Calls the next function
};

// Using Middleware
app.use(myMiddleware);

app.get("/", (req, res) => {
    res.send("Hello, World!");
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
```

- **Middleware runs before the route handler.**
- If `next()` is missing, the request **will not proceed**.

---

# **`app.use()` Function**
- `app.use()` is used to **add middleware** globally.

### **🔹 Example: Logging Middleware**
```js
app.use((req, res, next) => {
    console.log(`Request received at ${new Date()}`);
    next();
});
```
- Logs request time **for all incoming requests**.

---

# *`next` Parameter in Middleware**
- The `next` function **moves execution to the next middleware**.

### **🔹 Example**
```js
const express = require("express");
const app = express();

const middleware1 = (req, res, next) => {
    console.log("Middleware 1");
    next(); // Moves to middleware2
};

const middleware2 = (req, res, next) => {
    console.log("Middleware 2");
    next(); // Moves to final handler
};

app.use(middleware1);
app.use(middleware2);

app.get("/", (req, res) => {
    res.send("Hello, World!");
});

app.listen(3000, () => console.log("Server is running"));
```

- Order of execution:  
  ✅ `Middleware 1` → ✅ `Middleware 2` → ✅ `Route Handler`

---

# **Application-Level vs Route-Level Middleware**
| Type | Execution Scope | Example |
|------|----------------|---------|
| **Application-Level Middleware** | Applies to **all routes** | `app.use(loggerMiddleware)` |
| **Route-Level Middleware** | Applies to **specific routes** | `app.get("/login", authMiddleware, handler)` |

### **🔹 Application-Level Example**
```js
app.use((req, res, next) => {
    console.log("Global Middleware Executed");
    next();
});
```

### **🔹 Route-Level Example**
```js
app.get("/profile", (req, res, next) => {
    console.log("Profile Route Middleware");
    next();
}, (req, res) => {
    res.send("Profile Page");
});
```

---

# **Routing in Express**
Routing **redirects API calls to the correct controllers**.

### **🔹 Basic Routing**
```js
app.get("/", (req, res) => {
    res.send("Home Page");
});

app.post("/login", (req, res) => {
    res.send("Login Successful");
});
```

### **🔹 Dynamic Routing**
```js
app.get("/user/:id", (req, res) => {
    res.send(`User ID: ${req.params.id}`);
});
```
- `:id` captures **dynamic values** in the URL.

---

# **`express.Router()`**
- A built-in class to **manage routes separately**.

### **🔹 Example**
```js
const express = require("express");
const router = express.Router();

router.get("/about", (req, res) => {
    res.send("About Page");
});

app.use("/", router);
```
✅ **Modular routing**  
✅ **Reusable route handlers**  

---




# **What is Node.js?**
- **JavaScript** is primarily a browser-based language, but it can also run on the **server-side** using **Node.js**.  
- **Node.js** is a **JavaScript runtime environment** built on **Chrome's V8 engine**.  
- It allows **JavaScript** to run outside the browser, making it suitable for **server-side applications**.  

---

# **Difference Between JavaScript and Node.js**
| Feature            | JavaScript (JS) | Node.js |
|--------------------|----------------|---------|
| **Definition** | A scripting language used to create dynamic web pages | A runtime environment that allows JavaScript to run on the server-side |
| **Usage** | Used for frontend development to add interactivity to web pages | Used for backend development to build server-side applications |
| **Execution** | Runs inside the browser (e.g., Chrome, Firefox) | Runs outside the browser using the Node.js runtime |
| **Modules** | Has built-in DOM manipulation and Browser APIs | Uses built-in modules like `fs`, `http`, and `os` for server-side functionality |

---

# **How Does Node.js Work?**
- **Event Loop** is the core mechanism of **Node.js** that handles asynchronous operations.  
- It determines whether an event is **blocking** or **non-blocking**:
  - **Blocking operations**: Stop execution until they are completed.  
  - **Non-blocking operations**: Do not stop execution and allow multiple tasks to run concurrently.  
- **Node.js** operates on a **single-threaded event-driven model**, handling one event at a time.

---

# **Why is Node.js Single-Threaded?**
- **Simplicity**: A single-threaded approach reduces complexity.  
- **Efficiency**: Non-blocking I/O and event-driven architecture improve scalability.  
- **Lightweight**: Uses fewer resources compared to multi-threaded models.  

> **Note:** Although Node.js is single-threaded, it uses **worker threads** for heavy computation.

---

# **What is `package.json`?**
- The `package.json` file contains **metadata** about a Node.js project, including:
  - **Project details** (name, version, description).  
  - **Dependencies** (installed packages and their versions).  
  - **Scripts** (commands to run the project).  
  - **Configuration settings** for the project.  
- It is essential for managing and sharing **Node.js applications**.

---

# **Built-in Modules in Node.js**
**Modules** in Node.js are **reusable blocks of code** containing **variables, functions, and objects**.  

### **Top 5 Built-in Modules:**
1. **`http`** – Handles HTTP requests and responses.  
2. **`fs`** (File System) – Reads and writes files.  
3. **`os`** – Provides system-related information (e.g., OS type, memory usage).  
4. **`path`** – Handles file and directory paths.  
5. **`events`** – Implements event-driven programming in Node.js.  

> **Note:** `express` is not a built-in module; it is a third-party package.

---

# **Module Export in Node.js**
- **Modular programming** allows breaking down code into smaller, reusable parts.  
- **Exporting modules** improves **code reusability** and **separation of concerns**.  
- Helps in **abstraction** by hiding implementation details.  
- Modules are created using `module.exports` and imported using `require()`.  

**Example:**
```javascript
// file: math.js
module.exports.add = (a, b) => a + b;

// file: app.js
const math = require('./math');
console.log(math.add(5, 3)); // Output: 8
```

---

# **Node.js Application Architecture**
A **Node.js application** follows this architecture:

1. **Client** → Sends requests to the server.  
2. **Server** → Processes incoming requests.  
3. **Event Queue** → Stores incoming events and requests.  
4. **Event Loop** → Handles requests asynchronously, ensuring non-blocking execution.  
5. **Thread Pool** → Manages blocking tasks separately, preventing the event loop from being blocked.  
6. **External Resources** → Includes databases and external services.

---

# **Types of Streams in Node.js**
**Streams** in Node.js allow handling of large data efficiently. They are classified into four types:

1. **Readable Streams** – Used to read data (e.g., `fs.createReadStream()`).  
2. **Writable Streams** – Used to write data (e.g., `fs.createWriteStream()`).  
3. **Duplex Streams** – Can read and write data (e.g., `net.Socket`).  
4. **Transform Streams** – Used for modifying data while reading or writing (e.g., `zlib.createGzip()`).  

---
