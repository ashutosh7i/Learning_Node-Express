const express = require("express");
const app = express();
const port = 5000;

const router = require("./expressDotRouter");

//a middleware
app.use("/", router);

app.listen(port, () => {
    console.log(`Server started on port 127.0.0.1:${port}`);
})