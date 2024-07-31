
const express = require('express');
const mongoDB = require('./db');

const app = express();
const port = 5000;

// Connect to the database
mongoDB();

app.use(express.json());

// CORS Middleware
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

    // Handle preflight requests
    if (req.method === 'OPTIONS') {
        res.sendStatus(200);
    } else {
        next();
    }
});

// Example route
app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use('/api', require("./Routes/CreateUser"));
app.use('/api', require("./Routes/DisplayData"));
app.use('/api', require("./Routes/OrderData"));



// Start the server
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
