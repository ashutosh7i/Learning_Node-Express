// Load HTTP module
const http = require("http");   //required for http requests

const hostname = "127.0.0.1"; //address, localhost
const port = 8000;  //port

// Create HTTP server
const server = http.createServer(function (req, res) {
    // Set the response HTTP header with HTTP status and Content type
    res.writeHead(200, { "Content-Type": "text/plain" });

    // Send the response body "Hello World"
    res.end("Hello World\n");
});

// Prints a log once the server starts listening
server.listen(port, hostname, function () {
    console.log(`Server running at http://${hostname}:${port}/`);
});


//if we use the node to create a backend api, it will take more lines of code and more 
//complexity in developement,using express framework will make the development easier with 
//less lines of code

//each time code is changed, it has to be re served/started using node server.js

//Nodemon-
//nodemon is a tool that helps develop Node.js based applications by automatically restarting the node application when file changes in the directory are detected.