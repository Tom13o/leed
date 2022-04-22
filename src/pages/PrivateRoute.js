import React, {useContext} from 'react'
import { Navigate } from "react-router-dom";
import { AuthContext } from "../auth";

const PrivateRoute = ({ children }) => {
    const { currentUser } = useContext(AuthContext);
    return !!currentUser ? children : <Navigate to="/signup"/> //FIXME: maybe want this to be /login instead?
};

export default PrivateRoute;