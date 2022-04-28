import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../index";

export default function Profile() {
    const { username } = useParams();
    const [checkUsername, setCheckUsername] = useState(undefined);
    const [userInfo, setUserInfo] = useState(undefined)
    // make this react if username is invalid
    useEffect(() => {
        getDoc(doc(db, "publicusers/" + username))
        .then(function (response) {
            setUserInfo(response.data());
            setCheckUsername(response.exists())
        });
    }, [username])
    //FIXME: is the above username call necessary?

    return (
        <>            
            {checkUsername === true &&
                <>
                <p>This user exists.</p>
                <p>@{username}</p>
                <p>First Name is: {userInfo.firstname}</p>
                <p>Last Name is: {userInfo.lastname}</p>
                </>
            }
            {checkUsername === undefined &&
                <p id="loading">Loading...</p>
            }
            {checkUsername === false &&
                <p>This user does not exist.</p>
            }
        </>
    )
}