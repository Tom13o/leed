import React from 'react'
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
    const auth = getAuth();
    const nav = useNavigate();
    function handleSignOut() {
        signOut(auth); //FIXME: isn't this a terrible way to handle this? try?
        nav("/"); //FIXME: i guess this could also be back to the login page? something to think about
    }
    return(
        <>
            <p>Welcome Back, "UID" (example)</p>
            <input type="button" value="Sign Out" onClick={handleSignOut} />
        </>
    )
}