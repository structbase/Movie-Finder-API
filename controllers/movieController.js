const axios = require("axios");

// Configuration for OMDB API access
const OMDB_BASE_URL = "http://www.omdbapi.com/";
const API_KEY = process.env.OMDB_API_KEY;

/**
 * Searches for movies by title using the OMDB 's' (search) parameter.
 * Expected Query: /movies/search?title=Inception
 */
async function searchMovies(req, res) {
    const { title } = req.query;

    // Validate that the user provided a search term
    if (!title) {
        return res.status(400).json({
            error: "Title query parameter is required",
        });
    }

    try {
        // Forward the search request to OMDB
        const response = await axios.get(OMDB_BASE_URL, {
            params: {
                s: title,
                apikey: API_KEY,
            },
        });

        res.json(response.data);
    } catch (error) {
        handleError(error, res);
    }
}

/**
 * Retrieves detailed information for a specific movie by its IMDb ID.
 * Expected Param: /movies/:id
 */
async function getMovieDetails(req, res) {
    const { id } = req.params;

    try {
        // Fetch specific movie data using the OMDB 'i' (id) parameter
        const response = await axios.get(OMDB_BASE_URL, {
            params: {
                i: id,
                apikey: API_KEY,
            },
        });

        res.json(response.data);
    } catch (error) {
        handleError(error, res);
    }
}

/**
 * Error handler for axios-based API calls.
 * Differentiates between API responses (4xx/5xx) and network/connection failures.
 */
function handleError(error, res) {
    if (error.response) {
        // The API responded with a non-200 status code
        res.status(error.response.status).json({
            message: "An API error has occurred",
        });
    } else {
        // The request was made but no response was received (e.g., timeout or DNS issue)
        res.status(502).json({
            message: "A network error has occurred",
        });
    }
}

module.exports = {
    searchMovies,
    getMovieDetails,
};
