import React, { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth"

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(undefined);

    const auth = getAuth();
    useEffect(() => {
        onAuthStateChanged(auth, setCurrentUser);
    }, [auth])

    return (
        <AuthContext.Provider
            value={{
                currentUser
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}