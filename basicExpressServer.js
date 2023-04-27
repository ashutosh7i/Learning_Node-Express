
// Express is the most popular Node web framework, and is the underlying library for a number of other popular Node web frameworks. It provides mechanisms to:

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
    res.send("welcome", { "name": "ashu" });
});

//listening to port for connections
app.listen(port, function () {
    console.log(`server running on http://127.0.0.1:${port}/`)
});