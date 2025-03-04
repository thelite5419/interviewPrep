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