import React from "react";
import { Link } from 'react-router-dom';
import './Products.css';
import product_img1 from './products1.jpg';
const Products=()=>{
    return(
    <div className="all_products">
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
        <div className="product_content">
                <div className="product_img">
                    <img src={product_img1} alt="product_image" />
                </div>
                <div className="prodduct_name">
                    Round Neck T-Shirt
                </div>
                <div className="product-price">$200</div>
        </div>
     
        <div className="product_content">
                <div className="product_img">
                    <img src={product_img1} alt="product_image" />
                </div>
                <div className="prodduct_name">
                    Round Neck T-Shirt
                </div>
                <div className="product-price">$200</div>
        </div>
        <div className="product_content">
                <div className="product_img">
                    <img src={product_img1} alt="product_image" />
                </div>
                <div className="prodduct_name">
                    Round Neck T-Shirt
                </div>
                <div className="product-price">$200</div>
        </div>
        <div className="product_content">
                <div className="product_img">
                    <img src={product_img1} alt="product_image" />
                </div>
                <div className="prodduct_name">
                    Round Neck T-Shirt
                </div>
                <div className="product-price">$200</div>
        </div>
    </div>
    )
 
}

export default Products;