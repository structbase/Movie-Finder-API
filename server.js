require("dotenv").config(); // Initialize environment variables early
const express = require("express");

const app = express();
const PORT = process.env.PORT || 3001;

// Import route definitions
const movieRoutes = require("./routes/movieRoutes");

/**
 * Middleware Configuration
 */
app.use(express.json()); // Allows the server to parse incoming JSON requests

/**
 * Routes
 */

// Basic landing route for health check or welcome message
app.get("/", (req, res) => {
    res.send("<h1>Home</h1>");
});

// Mount movie-related endpoints under the /api prefix
// Example: /api/movies/search
app.use("/api", movieRoutes);

/**
 * Server Activation
 */
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
