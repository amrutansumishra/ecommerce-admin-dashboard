import React,{ useState} from "react";
import './Register.css';
import { Link } from "react-router-dom";
const SignUp=()=>{

    const [name,setName]=useState("");
const [email, setEmail]=useState("");
const [phone,setPhone]=useState("");
const [password,setPassword]=useState("");



    return (
        <div className="register">
            <div className="register_content">
            <div className="register_avatar"></div>
                <div className="register_text"><p>Admin Register</p></div> 
           
                <form>
                    <input type="text" className="inputField" name="name" value={name} onChange={(e)=>{setName(e.target.value)}} placeholder="Enter name"  />
                 
                    <input type="text" className="inputField" name="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder="Enter Email"  />
                        
                    <input type="text" className="inputField" name="phone" value={phone} onChange={(e)=>{setPhone(e.target.value)}} placeholder="Enter phone number" />  
                       
                    <input type="password" className="inputField" name="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder="Enter password " />  
                      
                    <input type="button" className="register_button" name="name" value="Register" />
                    <div className="login_forget"><Link to="/login" >Have a account ? </Link></div>   


                </form>
            </div>

            
        </div>
    )
}

export default SignUp;