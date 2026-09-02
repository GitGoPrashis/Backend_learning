

const express = require("express");

const app = express();

// Middleware
const getmiddleware = (req, res, next) => {
    const name = req.query.name;

    if (!name) {
        res.send("Enter Your full name..");
    } else {
        next();
    }
};

// Route
app.get("/", getmiddleware, (req, res) => {
    res.send(`Hello, ${req.query.name}`);
});

// Start server
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
