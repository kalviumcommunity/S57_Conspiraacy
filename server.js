
const express = require('express');


const app = express();
const port = 3000; 


app.use(express.json());


app.get('/ping', (req, res) => {
  res.send('Pong!'); 
});

// Starting the server
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});

