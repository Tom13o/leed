import React from 'react'
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const a = false;
    return a ? children : <Navigate to="/login"/>
};

export default PrivateRoute;