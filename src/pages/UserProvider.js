import { doc, getDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { Outlet, useParams } from "react-router-dom";
import { db } from "..";

export const UserContext = React.createContext();

export const UserProvider = () => {
    const { username } = useParams();
    const [userExists, setUserExists] = useState(undefined);
    const [userInfo, setUserInfo] = useState(undefined);

    useEffect(() => {
        getDoc(doc(db, "publicusers/" + username))
        .then(function (response) {
            var data = response.data();
            data.username = username;
            setUserInfo(data);
            setUserExists(response.exists())
        });
    }, [username])

    return (
        <UserContext.Provider
            value={{
                userExists, userInfo
            }}
        >
            <Outlet />
        </UserContext.Provider>
    );
}