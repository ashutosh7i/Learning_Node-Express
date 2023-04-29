
//express.Router() is class in express that provides a way to create modules, which can be mounted later.
//defining a set of routes in a seperate route module and then mount that router in mini application, 
//using this approach allows modular code, the routes can be included and can be modified seperately.

//step1 create a route.js file with all the route code.

const express = require("express");
const router = express.Router();

router.get('/users', (req, res) => {
    res.send("get list of users");
})

router.post('/users', (req, res) => {
    res.send("adds a new user");
})
router.delete('/users', (req, res) => {
    res.send("deletes a user");
})

module.exports = router;

//save file.

//in the app.js, import the router as-
// const express = require("express");
// const app = express();
// const port = 5000;

// const router = require("./expressDotRouter");

// //a middleware
// app.use("/", router);

// app.listen(port, () => {
//     console.log(`Server started on port 127.0.0.1:${port}`);
// })

//modifying the routers in this file will show effects in the app.js, in app.js , routes specified in this file will be served