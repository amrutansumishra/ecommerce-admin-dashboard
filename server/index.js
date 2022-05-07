const { config } = require("dotenv");
const express = require("express");
const mangoose = require("mongoose");
const dotenv =require("dotenv")
const cors = require('cors');

const app = new express();

const PORT = process.env.PORT || 5000;
dotenv.config()


mangoose.connect(process.env.MONGODB_URL).then(()=>{
    console.log("MangoDB connected")
}).catch((err)=>{
    console.log(err.message)
})

const userRoute = require('./Routes/users');
const productRoute = require('./Routes/products');
app.use('/public',express.static('public'));
app.use(express.json());
app.use(cors());
app.use('/api/',userRoute);
app.use('/api/',productRoute);

app.listen(PORT,()=>{
    console.log(`server running on port ${PORT}`);
});