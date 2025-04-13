const express = require('express');
const open = require('open'); // Import the open package
const app = express();

// Middleware to parse JSON data
app.use(express.json());

// Simple route to test
app.get('/', (req, res) => {
    res.send('Hello, GreenArray!');
});

// Start the server and automatically open the browser
app.listen(5000, () => {
    console.log('Server is running at http://localhost:5000');
    open('http://localhost:5000');  // This should open the URL in your default browser
});
