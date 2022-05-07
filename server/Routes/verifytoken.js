const jwt = require("jsonwebtoken");
const jwtKey = "ecom";

exports.verifytoken=(req,res,next)=>{
    let token = req.headers['authorization'];
    if(token){
        token = token.split(' ')[1];
        jwt.verify(token, jwtKey,(err,valid)=>{
            if(err){
                res.status(401).json("Unauthorized")
            }else{
                next()
            }
        })
    }else{
        res.status(403).json("Wrong Token")
    }
}