require("dotenv").config();
const express = require("express");

const app = express();
const PORT = process.env.PORT || 3001;

const movieRoutes = require("./routes/movieRoutes");

app.use(express.json());

app.get("/", (req, res) => {
    res.send("<h1>Home</h1>");
});

app.use("/api", movieRoutes);

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
