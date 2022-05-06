import React, { useState } from "react";
import './UpdateProduct.css';
import product_img1 from './products1.jpg';

const UpdateProduct=()=>{
    const [name,setName] = useState();
    const [price,setPrice] = useState();
    const [category,setCategory] = useState();
    const [company,setCompany] = useState();
    const [desc,setDesc] = useState();
    const [stock,setStock] = useState();
    const [photo,setPhoto] = useState();
    const [error,setError] = useState();

    const onSubmitHandler =()=>{
        if(!name ||!category|| !company||!price || !photo){
            setError(true);
            return false;
        }
    }

    return(
        <div className="update_product">
            <div className="product_add_review">
                <div className="product_review_img">
                    { photo?<img src={photo}  alt="product_image" />:<img src={product_img1}  alt="product_image" /> }
                </div>
                
                <div className="product_details">
                    <div>
                        <h4>Product Name : {name}</h4>
                    </div>
                    <div>
                        <h4>Price : {price}</h4>
                    </div>
                    <div>
                        <h4>Brand : {company}</h4>
                    </div>
                    <div>
                        <h4>category : {category}</h4>
                    </div>
                    <div>
                        <h4>Stock : {stock}</h4>
                    </div>
                    <div>
                        <h4>Description : {desc}</h4>
                    </div>                  
                </div>
            </div>
            <form className="product_edit_form">
                <input type="file" onChange={(e)=>{setPhoto(URL.createObjectURL(e.target.files[0]))}} className="inputField" />
                {error && !photo && <span>Please select a photo</span>}
                <input type="text" placeholder="product name" required className="inputField" name="name" value={name} onChange={(e)=>{setName(e.target.value)}} />
                {error && !name && <span>Enter Valid Name</span>}
                <input type="text" placeholder="product price" className="inputField" name="price" value={price} onChange={(e)=>{setPrice(e.target.value)}} />
                {error && !price && <span>Enter Valid Price</span>}
                <input type="text" placeholder="product category" className="inputField" name="category" value={category} onChange={(e)=>{setCategory(e.target.value)}} />
                {error && !category && <span>Enter Valid category</span>}
                <input type="text" placeholder="product company" className="inputField" name="company" value={company} onChange={(e)=>{setCompany(e.target.value)}} />
                {error && !company && <span>Enter Valid Company</span>}
                <textarea className="inputField" value={desc} onChange={(e)=>{setDesc(e.target.value)}} ></textarea>
                {error && !desc && <span>Enter Valid Description</span>}
                <input type="number" className="inputField" value={stock} onChange={(e)=>{setStock(e.target.value)}} placeholder="stock"/>
                {error && !stock && <span>Enter stock</span>}
                <input type="button" className="product_update_button" onClick={onSubmitHandler} name="update" value="Update Product" />
            </form>
        </div>
    )
}


export default UpdateProduct;