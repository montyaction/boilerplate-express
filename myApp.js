let express = require('express');
let app = express();
require('dotenv').config();




// #1 Meet the node console.
console.log("Hello World!"); // This will print to your terminal

// #2 Srart a Working Express Server.
app.get("/", (req, res) => {
    res.send("Hello Express");
});

// #3 Serve an HTML File
app.get("/html", (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});

// #4 Serve Static Assets
app.use("/public", express.static(__dirname + "/public"));

// #5 Serve JSON on a Specific Route
app.get("/json", (req, res) => {
    res.json({
        "message": "Hello json"
    });
});

// #6 Use the .env File
app.get("/json1", (req, res) => {
    if (process.env['MESSAGE_STYLE'] == "uppercase") {
        res.json({"message": "HELLO WORLD"});
    } else {
        res.json({"message": "Hello world"});
    }
});

// #7 Implement a Root-Level Request Logger Middleware
// #8 Chain Middleware to Create a Timer Server
// #9 Get Route Parameter Input from the Client
// #10 Get Query Parameter Input from the Client
// #11 Use body-parser to Parse POST Requests
// #12 Get Data from POST Requets



 module.exports = app;
