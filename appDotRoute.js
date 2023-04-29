//app.route is used to create chainable route handlers.
//use this to create mulitple handlers on a simgel route.
//ex-

const express = require("express");
const app = express();
const port = 4000;

app.route("/books")
    .get((req, res) => {
        res.send("to get list of books");
    })
    .post((req, res) => {
        res.send("to add a new book");
    })
    .delete((req, res) => {
        res.send("to delete a new book");
    })


app.listen(port, () => {
    console.log(`Server started on port 127.0.0.1:${port}`);
})