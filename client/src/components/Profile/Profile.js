import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import './Profile.css';
import profile_pic from './profile_pic.png';
const Profile=()=>{
    const [name,setName] = useState("");
    const [changePass,setChangePass] = useState("");
    const [newPass,setNewPass] = useState("");
    const [confrimPass,setConfrimPass] = useState("");
    const [email, setEmail]=useState("");
    const [phone,setPhone]=useState("");
    const [password,setPassword]=useState("");
    const [pass_error,setPassError] = useState(false);
    const navigate = useNavigate();
    useEffect(()=>{
        getUser();
        
    },[])
    const getUser =()=>{
        const auth = JSON.parse(localStorage.getItem('user'));

        setName(auth.name);
        setEmail(auth.email);
        setPhone(auth.phone);
    }
    const passwordChange=async()=>{
        if(!password ||!newPass){
            setPassError(true);
            return false;
        }
        const userId = JSON.parse(localStorage.getItem('user'))._id       
        let result = await fetch(`http://localhost:5000/api/changepassword/${userId}`,{
            method:"PATCH",
            body:JSON.stringify({password,newPass}),
            headers:{
                "Content-Type":"application/json",
                authorization:"auth "+JSON.parse(localStorage.getItem('token'))
            }
        })
       result = await result.json();
        if(result.success){
            localStorage.clear();
            navigate('/login');
        }
       

    }
    const onConfrimPass =(e)=>{
        setConfrimPass(e);
        if ( newPass !== e){
            setPassError(true)
            return false;
        }else{
            setPassError(false)
        } 
    }
    const changeUserData=async()=>{
        const userId = JSON.parse(localStorage.getItem('user'))._id       
        let result = await fetch(`http://localhost:5000/api/register/${userId}`,{
            method:"PATCH",
            body:JSON.stringify({name,email,phone}),
            headers:{
                "Content-Type":"application/json",
                authorization:"auth "+JSON.parse(localStorage.getItem('token'))
            }
        })
       result = await result.json();
        if(result){
            localStorage.clear();
            navigate('/login');
        }
        
    }

    return(
        <div className="profile">
            <div className="profile_content">
            <div className="profile_img_content">
                <img className="profile_img" src={profile_pic} alt="profile_pic" />
            </div>
            <div className="profile_details">
            {
                !changePass?<><input type="text" className="inputField" name="name" value={name} onChange={(e)=>{setName(e.target.value)}} placeholder="Name" />
                <input type="text" className="inputField" name="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder="Email" />
                <input type="text" className="inputField" name="phone" value={phone} onChange={(e)=>{setPhone(e.target.value)}} placeholder="Phone" />
                <input type="button" className="Change_password" onClick={changeUserData} value="Update" />
                <input type="button" className="Change_password" onClick={(e)=>{setChangePass(true)}} value="Change password" />
                </>
                 
                :<><input type="text" className="inputField" name="old_pass" value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder="Old password" />
                {pass_error && !password && <span>Enter the old password</span>}
                <input type="text" className="inputField" name="new_pass" value={newPass} onChange={(e)=>{setNewPass(e.target.value)}}  placeholder="New Password" />
                {pass_error && !newPass && <span>Enter the new password</span>}
                <input type="text" className="inputField" name="c_new_pass" value={confrimPass} onChange={(e)=>{onConfrimPass(e.target.value)}} placeholder="Confrim New Password" />
                {pass_error && <span>confrim password doesnot match</span>}
                <input type="button" className="Change_password" onClick={passwordChange} value="Update password" />
                <input type="button" className="Change_password" onClick={(e)=>{setChangePass(false);setPassword("");setNewPass("");setConfrimPass("");setPassError("")}} value="Cancel" />
                </>
            }
                
                

                

                
            </div>
            </div>
                   
        </div>
    )
}

export default Profile;