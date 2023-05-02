/*
1. install mongodb community edition& shell
2. install mongoose package
3. require mongoose
*/
const mongoose = require("mongoose")
/*
4.Connect mongodb to our app
*/
mongoose.connect("mongodb://127.0.0.1:27017/LearningMongoNode")
    .then(() => { console.log("mongodb connected") })
    .catch((err) => console.log("mongodb connection failed", err))
/* 
5. to use mongodbin our app,
    1. Define the Schema, ie the structure.
    2. use that schema to create a Model.
    3. use that model to perform CRUD operations.
*/

const userSchema = new mongoose.Schema({    //design the schema
    firstName: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    contactNo: {
        type: Number,
        required: true,
    }
}, { timestamps: true } //adding this automatically adds createdat& updatedat 
)

//creating a model
//we have created a model and passed our schema.
const User = mongoose.model("user", userSchema);


//to insert data in db
User.create({
    firstName: "Ashutosh",
    lastname: "Soni",
    email: "Aashutoshsoni@gmail.com",
    contactNo: 1234567890,
})
    .then((user) => {
        console.log("New user created: ", user);
    })
    .catch((err) => {
        console.log("Error occurred while creating new user: ", err);
    });


//to view all users
User.find({})
    .then((users) => {
        console.log(users);
    })
    .catch((err) => {
        console.log("Error occurred while fetching users: ", err);
    });

/*
Many inbuilt functions like
User.updateOne
User.updateMany
User.findOneAndDelete
User.findOneAndUpdate
*/



// to view user with a specific id
const userId = "John"; // replace with actual user ID
User.findById(userId)
    .then((user) => {
        console.log(user);
    })
    .catch((err) => {
        console.log("Error occurred while fetching user: ", err);
    });

// to update a user with a specific id
User.findByIdAndUpdate("John", { lastname: "Soni" })
    .then((result) => {
        console.log("User updated successfully", result);
    })
    .catch((err) => {
        console.log("Error occurred while updating user: ", err);
    });

// // to delete a user with a specific id
User.findByIdAndDelete("John")
    .then((result) => {
        console.log("User deleted successfully", result);
    })
    .catch((err) => {
        console.log("Error occurred while deleting user: ", err);
    });

