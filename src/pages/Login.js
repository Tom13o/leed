import React, {useContext} from 'react'
import { Link, Navigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { AuthContext } from "../auth.js";
// TODO: make login and signup the same page? component within container??

export default function Login() {
    const handleLogIn = async event => {
        event.preventDefault();
        const { email, password } = event.target.elements;
        const auth = getAuth();
        // TODO: don't allow logging in if one of the inputs is empty
        try {
            await signInWithEmailAndPassword(auth, email.value, password.value);
        } catch (error) {
            alert(error);
        }
    };
    const { currentUser } = useContext(AuthContext)
    if ( !!currentUser ) { return <Navigate to="/home" />}
    // TODO: loading until login is tested? how is login kept??

    return(
        //FIXME: again, maybe want to link to something else instead of /? nav(-1)??
        <>
            <Link to="/">Back</Link>
            <p>Login</p>

            <form onSubmit={handleLogIn}>
                <label>
                    Email: 
                    <input name="email" type="email" placeholder="Email" />
                </label>
                <br />
                <label>
                    Password: 
                    <input name="password" type="password" placeholder="Password" />
                </label>
                <button type="submit">Log In</button>
                <br />
                Don't have an account? <Link to="/signup">Sign Up</Link>
            </form>
        </>
    )
}