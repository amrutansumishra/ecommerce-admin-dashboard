const route = require("express").Router();
const {createUser,loginUser, editUser, editPassword} = require('../controller/userController');
const {verifytoken} = require('./verifytoken');


route.post('/register',createUser);
route.patch('/register/:id',verifytoken,editUser);
route.patch('/changepassword/:id',verifytoken,editPassword);
route.post('/login',loginUser);

module.exports =route