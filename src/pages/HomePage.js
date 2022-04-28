import React, { useContext } from 'react'
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../auth";

export default function HomePage() {
    const auth = getAuth();
    const nav = useNavigate();
    function handleSignOut() {
        signOut(auth); //FIXME: isn't this a terrible way to handle this? try?
        nav("/"); //FIXME: i guess this could also be back to the login page? something to think about
    }
    const { currentUser } = useContext(AuthContext);
    return(
        <>
            <p>Welcome Back, {currentUser.email}</p>
            <input type="button" value="Sign Out" onClick={handleSignOut} />
        </>
    )
}