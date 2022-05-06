import React, { useState } from "react";
import './Profile.css';
import profile_pic from './profile_pic.png';
const Profile=()=>{
    const [name,setName] = useState();
    const [changepass,setChangePass] = useState();
    const [email, setEmail]=useState("");
    const [phone,setPhone]=useState("");
    const [password,setPassword]=useState("");

    return(
        <div className="profile">
            <div className="profile_content">
            <div className="profile_img_content">
                <img className="profile_img" src={profile_pic} alt="profile_pic" />
            </div>
            <div className="profile_details">
            {
                !changepass?<><input type="text" className="inputField" name="name" value={name} onChange={(e)=>{setName(e.target.value)}} placeholder="Name" />
                <input type="text" className="inputField" name="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder="Email" />
                <input type="text" className="inputField" name="phone" value={phone} onChange={(e)=>{setPhone(e.target.value)}} placeholder="Phone" />
                <input type="button" className="Change_password" onClick={(e)=>{setChangePass(true)}} value="Update" />
                <input type="button" className="Change_password" onClick={(e)=>{setChangePass(true)}} value="Change password" />
                </>
                 
                :<><input type="text" className="inputField" name="old_pass" value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder="Old password" />
                <input type="text" className="inputField" name="new_pass"  placeholder="New Password" />
                <input type="text" className="inputField" name="c_new_pass"  placeholder="Confrim New Password" />
                <input type="button" className="Change_password" onClick={(e)=>{setChangePass(true)}} value="Update password" />
                <input type="button" className="Change_password" onClick={(e)=>{setChangePass(false)}} value="Cancel" />
                </>
            }
                
                

                

                
            </div>
            </div>
                   
        </div>
    )
}

export default Profile;