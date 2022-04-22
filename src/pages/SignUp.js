import React, {useContext} from 'react'
import { Link, Navigate } from 'react-router-dom'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { AuthContext } from "../auth.js";

export default function SignUp() {
    const handleSignUp = async event => {
        event.preventDefault();
        const { email, password } = event.target.elements;
        const auth = getAuth();
        // TODO: don't allow signing up if one of the inputs is empty
        try {
            // TODO: handle error when account already exists
            await createUserWithEmailAndPassword(auth, email.value, password.value);
        } catch (error) {
            alert(error);
        }
    };
    const { currentUser } = useContext(AuthContext)
    if ( !!currentUser ) { return <Navigate to="/home" />} // FIXME: maybe I don't want this happening? should you be able to make an account while already logged in? what happens?

    return (
        // FIXME: maybe dont want to go back to / from signup? nav(-1)?? vv
        <>
            <Link to="/">Back</Link> 
            <p>Sign Up</p>

            <form onSubmit={handleSignUp}>
                <label>
                    Email: 
                    <input name="email" type="email" placeholder="Email" />
                </label>
                <br />
                <label>
                    Password: 
                    <input name="password" type="password" placeholder="Password" />
                </label>
                <button type="submit">Sign Up</button>
                <br />
                Already have an acccount? <Link to="/login">Login</Link>
            </form>
        </>
    )
}