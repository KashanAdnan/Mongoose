// Requiring The Mongoose Library
const mongoose = require("mongoose");
const colors = require("colors");
const User = require("./user");
// we are requiring we export in our user.js do we will write
// const data = require("./user.js") // <- the path of the file
// COnnect The Mongoose Library with mongoose (.connect) line and after .connect
// we will add ("url oF DataBase") and after url of Databse we can add a callback function
// like this mongoose.connect("urlOfDatabase" , () = > {
// In This We Can Write Code Here
// Like console.log("The Mongoose is Connected")
// })
// We Can Add Eerror Also Like This
// mongoose.connect("urlOfDatabase" , () = > {
//      console.log("The Mongoose is Connected")
// }, e => console.log(e))
mongoose.connect(
  "mongodb://localhost:27017/test",
  () => {
    console.log("The Mongoose is Connected / Working");
    // if the mongoDB is not Connected It Will Display This Error e we Pass in the Console
  },
  (e) => console.log(e)
);
// and the callback function and the error msg is optional

// const server = http.createServer((req,res) =>{
//     res.writeHead(200 , {"ContentType" : "application/json"});
//     res.write(JSON.stringify(data));
//     res.end("Hello World")
// });
// server.listen(3000 , () =>{
//     console.log("Server is Running On 3000")
// })

// we will add a function


function run() {
  const user = new User({
    name: "Kashan",
    age: 5,
    hobies: ["Footbal", "Cricket"],
    address : {
        street : "11/2 6 number Gali",
        City : "Orangi Town Karachi"
    }
  });
  console.log(user);
}
run();
