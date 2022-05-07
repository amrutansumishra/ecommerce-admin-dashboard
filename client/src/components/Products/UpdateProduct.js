import React, { useState,useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import './UpdateProduct.css';

const UpdateProduct=()=>{
    const [name,setName] = useState("");
    const [price,setPrice] = useState("");
    const [category,setCategory] = useState("");
    const [company,setCompany] = useState("");
    const [desc,setDesc] = useState("");
    const [stock,setStock] = useState("");
    const [photo,setPhoto] = useState("");
    const [photoChange,setPhotoChange] = useState(false);
    const [error,setError] = useState("");
    const navigate = useNavigate();
    const params = useParams();

    useEffect(()=>{
        getProductDetails()
        
    },[])
    
    const getProductDetails= async ()=>{
        let result = await fetch(`http://localhost:5000/api/product/${params.id}`,{
            headers:{
             authorization:"auth "+JSON.parse(localStorage.getItem('token'))
            }
        });
        result = await result.json();
        setName(result.name);
        setPrice(result.price);
        setCategory(result.category);
        setDesc(result.desc);
        setCompany(result.company);
        setStock(result.stock);
        setPhoto(result.image)
    }
    const photochange = (e)=>{
        setPhoto(e);
        setPhotoChange(true)
        
    }

    const onSubmitHandler = async()=>{
        if(!name ||!category|| !company||!price){
            setError(true);
            return false;
        }

        const userId = JSON.parse(localStorage.getItem('user'))._id;

        const formData = new FormData();

        
            if(photoChange){
                formData.append('image',photo)
            }
            
        
        
       
        formData.append('name', name);
        formData.append('category', category);
        formData.append('company', company);
        formData.append('stock', stock);
        formData.append('price', price);
        formData.append('desc', desc);
        formData.append('userId', userId);

                  
        let result = await fetch(`http://localhost:5000/api/product/${params.id}`,{
            method:"PATCH",
            //body:JSON.stringify({name,price,category,desc,company,userId,stock}),
            body:formData,
            headers:{
              //  "Content-Type":"application/json",
                authorization:"auth "+JSON.parse(localStorage.getItem('token'))
            }
        })
      // result = await result.json();
    //    console.log(result);
    if(result){
        navigate('/');
    }
    
        
    }

    return(
        <div className="update_product">
            <div className="product_add_review">
                <div className="product_review_img">
                    { !photoChange? photo ?<img src={"http://localhost:5000/public/images/"+photo}  alt="product_image" />:<></>:<img src={URL.createObjectURL(photo)}  alt="product_image" /> }
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
                <input type="file" onChange={(e)=>{photochange(e.target.files[0])}} className="inputField" />
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