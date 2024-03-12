const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model");
const productRoute=require('./routes/product.route')
const app = express();
//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(3000, () => {
  console.log("server running in 3000");
});

//routes
app.use("api/products",productRoute)
 

app.get('/',(res,req)=>{
    res.setEncoding("Hello from Node API Server Updated.")
})



mongoose
  .connect(
    "mongodb+srv://tariqahmed1102:tn04ah3632@backenddb.uamyrqi.mongodb.net/Node-API?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("connected to DB");
  })
  .catch(() => {
    console.log("connection failed", error.message);
  });
