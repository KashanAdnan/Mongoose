const mongoose = require("mongoose");

// A mongo Schema is defined the structure of the doceument of the collection
const addressSchema = mongoose.Schema({
    street: String,
    City: String,
  });
  
const userData = new mongoose.Schema({
  // we can add the object like the key : and the value , value will be the type of value just like
  name /* is the key : */: String, // it is the type of the value this is String Like This WE Can Add Number and more
  age: Number,// for adding data in String we will code on index.js
  email : String,
  createdAt : Date,
  updatedAt : Date,
  bestFreind : mongoose.SchemaTypes.ObjectId,
  hobies : [String],
  address: addressSchema,
});

//  we can creATE A MODEL of Schema in js  like this

// method we will Call model() the First Parameter is the name just like "User"
// and the second parameter is our  is the our Schema name like
module.exports = mongoose.model("User", userData); // <- This  is our Schema Name
// we can store our model in to the constant like

// we can export the our mode like the object
// we will add module A module is a software component or
// part of a program that contains one or more routines. One or more
// independently developed modules make up a program
// by using module after writting the moduel we will add .export() method in this parameter
// we will add our module name like this

// module.exports = {
//     ourfirstmodel
// };
