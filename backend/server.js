require("dotenv/config")
const express = require('express');
const cors = require("cors")
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to allow cross-access
app.use(cors())

// Serve static files from the PrintInProgress/dist directory
app.use(express.static(path.join(__dirname, '..', 'frontend', 'dist')));

// Serve React App on the root route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'frontend', 'dist', 'index.html'));
});

// Handle all other routes - this enables React Router to work properly
//app.get('*', (req, res) => {
//res.sendFile(path.join(__dirname, '..', 'frontend', 'dist', 'index.html'));
//});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log(`Serving static files from: ${path.join(__dirname, '..', 'frontend', 'dist')}`);
});
