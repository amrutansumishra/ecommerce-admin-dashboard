const express = require('express');
const Product = require('../models/productModel');


exports.createProduct = async (req,res)=>{
    try{
        const image = req.file.filename;
        const {name,category,price,company,desc,stock} = req.body
        const data = new Product({name,category,price,image,company,desc,stock});
        const add_product = await data.save();
        res.status(200).send(
            {
                success:true,
                add_product
            }
        )
    }catch(err){
        res.status(400).json(err);
    }
}
exports.getProduct = async (req,res)=>{
 try{
    const product = await Product.find();
    res.status(200).json(product)
 }catch(error){
     res.status(500).json(error);
 }
}
exports.deleteProduct = async (req,res)=>{
    try{
       const product = await Product.deleteOne({_id:req.params.id});
       res.status(200).json(product)
    }catch(error){
        res.status(500).json(error);
    }
   }
exports.getSingleProduct = async (req,res)=>{
    try{
       const product = await Product.findOne({_id:req.params.id});
       res.status(200).json(product)
    }catch(error){
        res.status(500).json(error);
    }
   }

exports.updateProduct = async(req,res)=>{
    try{
        
        const {name,category,price,company,desc,stock} = req.body;
        if(req.file){
            const image = req.file.filename;
            
            let product = await Product.findByIdAndUpdate(req.params.id,{name,category,price,image,company,desc,stock},{
                new : true,
                runValidators : true
              })
              res.status(200).json(product);
        }else{
            console.log(name)
            let product = await Product.findByIdAndUpdate(req.params.id,{name,category,price,company,desc,stock},{
                new : true,
                runValidators : true
              })
            res.status(200).json(product);
        }
        
    }catch(error){
        res.status(500).json(error)
    }
}

exports.searchProduct = async (req,res)=>{
    try{
        const product = await Product.find(
            {"$or" :[
                {name:{$regex:req.params.key}},
                {category:{$regex:req.params.key}},
                {company:{$regex:req.params.key}}
            ]}
        )
        res.status(200).json(product);
    }catch(error){
        res.status(500).json(error)
    }
}