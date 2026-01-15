// movieRoutes.js

const express = require("express");
const router = express.Router();

// Import controller functions
const movieController = require("../controllers/movieController");

// Route to search movies
router.get("/search", movieController.searchMovies);

// Route to get movie details by IMDb ID
router.get("/movies/:id", movieController.getMovieDetails);

module.exports = router;
