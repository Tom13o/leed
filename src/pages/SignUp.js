import React, {useContext} from 'react'
import { Link, Navigate } from 'react-router-dom'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { AuthContext } from "../auth.js";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { db } from "../index";

export default function SignUp() {
    const handleSignUp = async event => {
        event.preventDefault();
        const { email, password } = event.target.elements;
        const auth = getAuth();
        // TODO: don't allow signing up if one of the inputs is empty
        try {
            // TODO: handle error when account already exists
            await createUserWithEmailAndPassword(auth, email.value, password.value)
                .then(async function(response) {
                    console.log(response);
                    await setDoc(doc(db, "publicusers", response.user.uid), {
                        test: "test"
                    });
                })
        } catch (error) {
            alert(error + "among us");
        }
    };
    
    var typingTimeout;

    async function checkUser(username) {
        await getDoc(doc(db, "publicusers/" + username))
            .then(function (response) {
                    document.getElementById("exists").textContent = response.exists() ? "Sorry, but this username is taken." : "Username is free to use!";
                }
            )
    }

    function down() {
        clearTimeout(typingTimeout);
    }

    const up = event => {
        clearTimeout(typingTimeout);
        console.log(event);
        const username = event.target.value;
        if (username !== "") {
            typingTimeout = setTimeout(checkUser, 1000, username);
        }
    }

    const { currentUser } = useContext(AuthContext);
    if ( !!currentUser ) { return <Navigate to="/home" />} // FIXME: maybe I don't want this happening? should you be able to make an account while already logged in? what happens?

    return (
        // FIXME: maybe dont want to go back to / from signup? nav(-1)?? vv
        // TODO: make this a table maybe? so textboxes are aligned? this'll change anyway
        <>
            <Link to="/">Back</Link> 
            <p>Sign Up</p>

            <form onSubmit={handleSignUp}>
                <label>
                    Username:
                    <input name="username" type="text" placeholder="Username" onKeyDown={down} onKeyUp={up} />
                </label>
                <p id="exists"></p>
                <br />
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
                Already have an account? <Link to="/login">Login</Link>
            </form>
        </>
    )
}