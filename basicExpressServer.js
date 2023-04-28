
// Express is the most popular Node web framework/say MODULE, and is the underlying library for a number of other popular Node web frameworks. It provides mechanisms to:

// Write handlers for requests with different HTTP verbs at different URL paths (routes).
// Integrate with "view" rendering engines in order to generate responses by inserting data into templates.
// Set common web application settings like the port to use for connecting, and the location of templates that are used for rendering the response.
// Add additional request processing "middleware" at any point within the request handling pipeline.

//same nodejs server code in express-

const express = require("express");   //including express package
const app = express();  //instead of calling each time, use a variable to call.
const port = 4000;     //application port

//creating a get request
app.get("/", function (req, res) {

    //basic/old way of sending data
    //res.send("welcome", { "name": "ashu" });

    //sending the http response tool
    //res.status(200);  

    //sending the json body
    //res.json({ "name": "ashutosh" });

    //make user download a file
    //res.download("server.js");

    //response can be combined
    //res.status(200).download("server.js");

    //getting ip.method of user
    console.log("Request IP: " + req.ip);
    console.log("Request Method: " + req.method);

    //getting the url of the request
    console.log("url= " + req.query);
});

//listening to port for connections
app.listen(port, function () {
    console.log(`server running on http://127.0.0.1:${port}/`)
});