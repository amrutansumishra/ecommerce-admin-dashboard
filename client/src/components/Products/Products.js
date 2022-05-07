import React, { useEffect, useState } from "react";
import { Link,useNavigate } from 'react-router-dom';
import './Products.css';
import product_img1 from './products1.jpg';
const Products=()=>{
    const [products,setProducts]= useState();
    const navigate= useNavigate();
    useEffect(()=>{
        getProduct();
        
    },[])
    const getProduct = async ()=>{
       let result= await fetch('http://localhost:5000/api/product',{
           headers:{
            authorization:"auth "+JSON.parse(localStorage.getItem('token'))
           }
       });
        result = await result.json();
        if(result!=="Unauthorized"){
            setProducts(result);
        }else{
            localStorage.clear();
            navigate('/login');
        }
        
    }
    const deleteProduct= async(id)=>{
        let result = await fetch(`http://localhost:5000/api/product/${id}`,{
            method:"Delete",
            headers:{
                authorization:"auth "+JSON.parse(localStorage.getItem('token'))
            }
        });
       result= result.json();
       if(result){
           getProduct();
       }
    }
    const searchProduct = async (val)=>{
        if (val!==""){
            let result = await fetch(`http://localhost:5000/api/product/search/${val}`,{
                headers:{
                    authorization:"auth "+JSON.parse(localStorage.getItem('token'))
                }
            })
            result = await result.json();
            setProducts(result);
        }else{
            getProduct();
        }
       
    }
    return(
<div className="product_page">
    <div className="search_product">
    <center>
    <input type="text" className="inputField" name="search" onChange={(e)=>searchProduct(e.target.value)} placeholder="Search product"  />

        </center>    </div>

    <div className="all_products">
         
         { products ?(
                products.map((val,index)=>
                <div key={val._id} className="product_content">
                <div className="product_img">
                    <img src={"http://localhost:5000/public/images/"+val.image} alt="product_image" />
                </div>
                <div className="prodduct_name">
                    {val.name}
                </div>
                <div className="product-price">${val.price}</div>
                <div className="product_update"><Link to={"/update-product/"+val._id}>Edit</Link></div>
                <div className="product_delete" onClick={()=>deleteProduct(val._id)}>Delete</div>
                {
                    val.stock >0?<div className="product_stock">Stock left : {val.stock}</div>:<div className="product_stock_alert">Out of stock</div>
                }
                
        </div>
                )
           ):(
               <h2>No result Found</h2>
           )
               
           } 
        <div className="product_content">
                <div className="product_img">
                    <img src={product_img1} alt="product_image" />
                </div>
                <div className="prodduct_name">
                    Round Neck T-Shirt
                </div>
                <div className="product-price">$200</div>
                <div className="product_update"><Link to="/update-product">Edit</Link></div>
                <div className="product_stock">Stock left : 20</div>
        </div>
        <div className="product_content">
                <div className="product_img">
                    <img src={product_img1} alt="product_image" />
                </div>
                <div className="prodduct_name">
                    Round Neck T-Shirt
                </div>
                <div className="product-price">$200</div>
                <div className="product_update"><Link to="/update-product">Edit</Link></div>
                <div className="product_stock_alert">Out of stock</div>
        </div>
    </div>
    </div>
    )
 
}

export default Products;