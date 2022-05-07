const route = require('express').Router();
const multer = require('multer');
const {createProduct,deleteProduct,getProduct,getSingleProduct,updateProduct,searchProduct } = require('../controller/productController');
const {verifytoken} = require('./verifytoken');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/images')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + uniqueSuffix+'_'+file.originalname)
    }
  })
  
  const upload = multer({ storage: storage })
route.post('/product',verifytoken,upload.single('image'),createProduct);
route.get('/product',verifytoken,getProduct);
route.get('/product/:id',verifytoken,getSingleProduct);
route.delete('/product/:id',verifytoken,deleteProduct);
route.patch('/product/:id',verifytoken,upload.single('image'),updateProduct);
route.get('/product/search/:key',verifytoken,searchProduct);
module.exports = route;