const express = require('express');
const mongoose = require('mongoose');

const ProdcutSchema = new mongoose.Schema({
    name:{type:String,required:true},
    price:{type:String,require:true},
    category:{type:String,required:true},
    desc:{type:String},
    image:{type:String},
    userId:{type:String,required:true},
    company:{type:String},
    stock:{type:String}
})

const Product = mongoose.model('Products',ProdcutSchema)
module.exports=Product;