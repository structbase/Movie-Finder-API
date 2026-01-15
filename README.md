# 🎬 Movie Finder API – OMDb Backend

A clean and modular **Node.js + Express REST API** that integrates with the **OMDb (Open Movie Database) API**.
This backend application allows users to **search for movies by title** and **retrieve detailed movie information by IMDb ID**, demonstrating proper API consumption, routing, controller separation, and secure environment configuration.

---

## 🎯 Objectives / The Challenge

The goal of this project is to build a fully functional REST API that communicates with an external data source (**OMDb API**) while following **Express best practices**.

This project serves as practice for:

-   Server-side API development
-   RESTful routing
-   Environment variable security
-   Error handling with async/await
-   Modular application structure (routes & controllers)

#### 🧩 Users should be able to:

-   **Search movies by title** using query parameters
-   **Retrieve detailed movie data** by IMDb ID
-   **Receive proper error messages** for invalid or failed requests
-   **Interact with a clean REST API** suitable for frontend consumption

---

## 🚀 Live Usage (Local)

This project runs locally as a backend API.

### 🔍 Search Movies

```
GET http://localhost:3000/api/search?title=batman
```

### 🎬 Get Movie Details

```
GET http://localhost:3000/api/movies/tt0372784
```

---

## 📌 Features

### **✔ Movie Search Endpoint**

Search for movies by title using the OMDb API. Returns a list of matching movies.

### **✔ Movie Details Endpoint**

Fetch full details for a specific movie using its IMDb ID.

### **✔ Secure API Key Handling**

Uses environment variables (`.env`) to securely store the OMDb API key.

### **✔ Modular Express Architecture**

Clear separation of:

-   Routes
-   Controllers
-   Server configuration

### **✔ Error Handling**

Gracefully handles:

-   Missing query parameters
-   External API errors
-   Network failures

---

## 🛠️ Built With

-   **Node.js**
-   **Express**
-   **Axios**
-   **dotenv**
-   **OMDb API**

---

## 📂 Folder Structure

```
movie-finder-api/
├── README.md
├── controllers
│   └── movieController.js
├── package-lock.json
├── package.json
├── routes
│   └── movieRoutes.js
└── server.js

3 directories, 6 files
```

---

## 🚀 Getting Started

### **1️⃣ Clone the repository**

```bash
git clone https://github.com/yourusername/movie-finder-api.git
cd movie-finder-api
```

---

### **2️⃣ Install dependencies**

```bash
npm install
```

---

### **3️⃣ Configure environment variables**

Create a `.env` file in the root directory:

```env
OMDB_API_KEY=your_api_key_here
PORT=3000
```

⚠️ Ensure `.env` is listed in `.gitignore`.

---

### **4️⃣ Run the server**

```bash
node server.js
```

The server will start at:

```
http://localhost:3000
```

---

## 🧠 How It Works

### **➡ Movie Search Logic**

```js
const response = await axios.get("http://www.omdbapi.com/", {
    params: {
        s: title,
        apikey: process.env.OMDB_API_KEY,
    },
});
```

---

### **➡ Movie Details Logic**

```js
const response = await axios.get("http://www.omdbapi.com/", {
    params: {
        i: id,
        apikey: process.env.OMDB_API_KEY,
    },
});
```

---

### **➡ Input Validation**

```js
if (!title) {
    return res.status(400).json({
        error: "Title query parameter is required",
    });
}
```

---

### **➡ Error Handling**

All controller logic is wrapped in `try...catch` blocks to handle:

-   API errors
-   Network issues
-   Unexpected failures

---

## 📣 Acknowledgements, Credits & Resources

### 🎥 API Provider

-   **OMDb API** – [https://www.omdbapi.com/](https://www.omdbapi.com/)

### 📘 Documentation

-   **Express Documentation** – [https://expressjs.com/](https://expressjs.com/)
-   **Axios Documentation** – [https://axios-http.com/](https://axios-http.com/)
-   **Node.js Documentation** – [https://nodejs.org/](https://nodejs.org/)

---

## 📝 Reflection

Building this project reinforced my understanding of **REST API design**, **Express routing**, and **secure environment configuration**. Separating routes and controllers improved maintainability, while working with an external API strengthened my skills in handling asynchronous requests and error states.

This project serves as a strong backend foundation that can easily be extended with authentication, pagination, or frontend integration.

---

## ✍️ Author

Developed by **Abenezer**

> Junior Developer
