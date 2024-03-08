// Importing necessary modules
const express = require('express');

// Creating an instance of express app
const app = express();
const port = 3000; // Port number

// Middleware to parse JSON bodies
app.use(express.json());

// Route handler for GET request to "/ping"
app.get('/ping', (req, res) => {
  res.send('Pong!'); // Sending "Pong!" response
});

// Starting the server
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
