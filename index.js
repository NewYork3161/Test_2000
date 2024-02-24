const express = require("express");
const path = require("path");
const methodOverride = require("method-override");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv").config();

mongoose.connect(process.env.URI)
.then(()=>{

  console.log("You connected to mongoose");

})
.catch(error=>{

console.log(error);

});

const app = express();




const _portNumber = 3000;
const _PortString = `you can now access your web page using this link http://localhost:${_portNumber}`

app.set("view engine","ejs");
app.use(express.static("public"));
app.use(methodOverride("_method"));
app.use(bodyParser.urlencoded({extended:false}));


app.get("/home",(req,res)=>{
res.render("index");


});


app.listen(_portNumber,(req,res)=>{

console.log(_PortString);

});