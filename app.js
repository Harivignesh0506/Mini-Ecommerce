const express = require("express");
const mongoose =require('mongoose');
const connect =require("./config/connectDatabase")
const app = express();
const cors = require('cors')
require("dotenv").config();
connect();

app.use(express.json());
app.use(cors());
const products=require('./routes/products');
const order=require('./routes/order'); 

app.use('/api/v1/',products);
app.use('/api/v1/',order);

const port = process.env.PORT || 8000;
app.listen(port,()=>{
    console.log(`server is runing on https://localhost:${port}`);
    
})