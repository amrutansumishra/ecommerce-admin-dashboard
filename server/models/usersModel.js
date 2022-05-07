const mongoose = require("mongoose");


const userSchema = new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    phone:{type:Number,required:true},
    password:{type:String,required:true}
})

const users = mongoose.model("users",userSchema);
module.exports = users;