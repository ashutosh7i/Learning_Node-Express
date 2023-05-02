//create a html form, with some form fields, ex-

/* <form action="/team_name_url/" method="post">
  <label for="team_name">Enter name: </label>
  <input
    id="team_name"
    type="text"
    name="name_field"
    value="Default name for team." />
  <input type="submit" value="OK" />
</form> */


//form handling process
/*
1.take data from user in form.
2. when submitted, request is in post form.
3. validate and sanitize the data.
4. if data invalid, show errors.
5. if data is valid, preform action,(save in db,log, return result etc.)
6. once actions are complete, redirect to another page.

A GET route is used for inital display of data,
a PPOST route is used for handling and processing of form data.

Validation and sanitization-
before storing the data, it has to be 
1. validated- check if the entered values are appropriate, and values have been supplied for required fields.
2. sanitization - remove; replace charachers in data that might be send maliciously to server.
For this , we will use express-validator package.

*/

//creating basic express app-
const express = require("express");
const app = express();

//
const { body, validationResult } = require("express-validator");
//There are many functions available, allowing you to check and
//sanitize data from request parameters, body, headers, cookies, etc.,
//or all of them at once. For this tutorial, we'll primarily be using
//body and validationResult (as "required" above).


//things for tommorwo

module, view, controller