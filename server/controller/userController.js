const express= require('express');
const User = require('../models/usersModel');
const jwt = require('jsonwebtoken');
const e = require('express');

const jwtKey = "ecom";

exports.createUser= async (req,res)=>{
    try{
        const user = await new User(req.body);
        const userSave =await user.save();
        const {password, ...data} = userSave._doc;
        jwt.sign({data}, jwtKey,{expiresIn:"2h"},(err,token)=>{
            if(err){
                res.status(500).json('something went wrong');
            }
            res.status(201).json({data,auth:token})
        })
    }catch(error){
        res.status(500).json(error);
    }
  
}
exports.editPassword= async (req,res)=>{
    try{
        let user = await User.findById(req.params.id);
        if (user.password == req.body.password){
            user.password = req.body.newPass;
            user.save();
            res.status(200).json({success:true});
        }else{
            res.status(400).json({success:false});
        }
        
    }catch(error){
        res.status(500).json(error)
    }
  
}

exports.editUser= async (req,res)=>{
    try{
        let user = await User.findByIdAndUpdate(req.params.id,req.body,{
            new : true,
            runValidators : true
          })
        res.status(200).json(user);
    }catch(error){
        res.status(500).json(error)
    }
  
}

exports.loginUser= async (req,res)=>{
    try{
        const user = await User.findOne({email:req.body.email});
        !user && res.status(400).json({
            success:false,
            message:"Wrong Credentials"
        })
        if (user.password === req.body.password){
            const {password, ...data} = user._doc;
            jwt.sign({data}, jwtKey,{expiresIn:"2h"},(err,token)=>{
                if(err){
                    res.status(500).json('something went wrong');
                }
                res.status(200).json({data,auth:token})
            })
        }else{
            res.status(400).json(
                {
                    success:false,
                    message:"Incorrect Password"
                }
            ) 
        }
    }catch(error){
        res.status(500).json();
    }
   

}
