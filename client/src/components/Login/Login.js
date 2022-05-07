import React,{useEffect, useState} from "react";
import './Login.css';
import { useNavigate,Link } from "react-router-dom";
const Login=()=>{

const [email, setEmail]=useState("");
const [password,setPassword]=useState("");
const [error,setError]=useState("");
const navigate= useNavigate();

useEffect(()=>{
    const auth = localStorage.getItem('user');
    if(auth){
        navigate('/');
    }
})

const onSubmitHandler= async()=>{

    let result =await fetch('http://localhost:5000/api/login',{
        method:"POST",
        body:JSON.stringify({email,password}),
        headers:{
            "Content-Type":"application/json"
        }
    })
    result = await result.json();

    if(result.auth){
        console.log(result);
        localStorage.setItem("user",JSON.stringify(result.data))
        localStorage.setItem("token",JSON.stringify(result.auth))
        navigate('/');
    }else{
        setError(result.message);
    }
};
    return (
        <div className="login">
            <div className="login_content">
                <div className="login_avatar"></div>
                <div className="login_text"><p>Admin Login</p></div>                
                <form>                
                    <input type="text" className="inputField" name="email" value={email} onChange={(e)=>{setEmail(e.target.value);setError("")}} placeholder="Email"  /> 
                    <input type="password" className="inputField" name="password" value={password} onChange={(e)=>{setPassword(e.target.value);setError("")}} placeholder="Password " />  
                      <span>{error}</span>
                    <input type="button" onClick={onSubmitHandler} className="login_button" name="login" value="Login" />
                    <div className="login_forget"><Link to="/register" >Forget password?</Link></div> 
                </form>
            </div>

            
        </div>
    )
}

export default Login;