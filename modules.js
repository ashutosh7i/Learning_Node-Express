// Modules are same as javascript libraries
// A set of functions you want to include in your application;

// Some popular and useful builtin Modules-
// crypto.js- to handle openssl Cryptographic functions.Cryptographic
// event -  to handle events.
// fs - to handle file system.
// os - info about Operating system.
// querystring - to handle url query strings.   ( var querystring = require('querystring'); var q = querystring.parse('year=2017&month=february'); console.log(q.year);)
// tls - to implement tls& ssl.

// Popular third party Modules
// Express - create servers easily.
// Moment.js - easy date and time.
// Helmet - secure your express app with http headers.
// CORS - very important to make your api accessible and request policy error free.
// NodeMailer - send mails form node with your own smtp server.
// sequelize - promise based mysql,postgres,mariaDB,sqlite server.
// Mongoose - mongodb asynchronous tool.
// Jest - javascript testing framework.
// chalk - console/termial string styling.

//including a module-
const { log } = require("console");
const os = require("os");
//now we have access to os modules, now we can use it.
console.log(os.platform());
// console.log(os.cpus());
// console.log(os.machine());
// console.log(os.totalmem());
// console.log(os.version());

//create you own module-
//in file "myModule" a there is module that gives info about os.
//using that module here-

const myModule = require("./myModule")
console.log(myModule.osInfo());
//works the same.