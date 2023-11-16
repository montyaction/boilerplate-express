let express = require('express');
let app = express();





// #1 Meet the node console.
console.log("Hello World!"); // This will print to your terminal

// #2 Srart a Working Express Server.
app.get("/", (req, res) => {
    res.send("Hello Express");
});


// #3 Serve an HTML File
// #4 Serve Static Assets
// #5 Serve JSON on a Specific Route
// #6 Use the .env File
// #7 Implement a Root-Level Request Logger Middleware
// #8 Chain Middleware to Create a Timer Server
// #9 Get Route Parameter Input from the Client
// #10 Get Query Parameter Input from the Client
// #11 Use body-parser to Parse POST Requests
// #12 Get Data from POST Requets



 module.exports = app;
