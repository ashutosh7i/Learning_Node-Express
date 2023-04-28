//create a simple api/server that gives info about the os details of server
//step1 - importing required modules
const express = require("express");
const myModule = require("./myModule");
const moment = require("moment");

//step2 - basic snippets/configs
const app = express();
const port = 7000;

//step3 - any call to server is get request, so response for get request-
app.get("/", (req, res) => {
    //when user visits the page on / root, send response-
    //current date-
    let date = moment().format('MMMM Do YYYY, h:mm:ss a');
    //response-
    res.status(200).send(`<h1>Go to /osinfo endpoint <h1/> <h2>${date}<h2/>`);
});

//routes- multiple endpoints can be handles using a single server
app.get("/osinfo", (req, res) => {
    //when user visits the page on /osInfo, send response-
    res.status(200).json(myModule.osInfo());
});

//step4 - listen on the port for connection-
app.listen(port, () => {
    console.log(`Server started on port 127.0.0.1:${port}`);
})