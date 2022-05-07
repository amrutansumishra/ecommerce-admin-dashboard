import React from "react";
import { Navigate,Outlet } from "react-router-dom";

const PrivateRoutes =()=>{
    const auth = localStorage.getItem("user");
    return auth?<Outlet/>:<Navigate to="/register" />
}


export default PrivateRoutes;