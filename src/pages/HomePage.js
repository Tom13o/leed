import React, { useContext, useState, useEffect } from 'react'
import { getAuth, signOut } from "firebase/auth";
import { useNavigate, Link } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../index"
import { AuthContext } from "../auth";

export default function HomePage() {
    const auth = getAuth();
    const nav = useNavigate();
    const { currentUser } = useContext(AuthContext);
    const [userPrivDoc, setUserPrivDoc] = useState(undefined);
    function handleSignOut() {
        signOut(auth); //FIXME: isn't this a terrible way to handle this? try?
        nav("/"); //FIXME: i guess this could also be back to the login page? something to think about
    }

    useEffect( async function () {
        await getDoc(doc(db, "privateusers/" + currentUser.uid)).then(function (response) {
            if (response.exists()) {
                setUserPrivDoc(response.data());
            }
        })
    }, [])
    
    return(
        <>
            <p>Welcome Back, {currentUser.email}</p>
            <Link to={"/user/" + userPrivDoc?.username} style={{pointerEvents: userPrivDoc ? '' : 'none'}}>View Public Profile</Link>
            <input type="button" value="Sign Out" onClick={handleSignOut} />
        </>
    )
}