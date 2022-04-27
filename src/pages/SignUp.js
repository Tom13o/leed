import React, {useContext} from 'react'
import { Link, Navigate } from 'react-router-dom'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { AuthContext } from "../auth.js";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { db } from "../index";

export default function SignUp() {
    const handleSignUp = async event => {
        event.preventDefault();
        const { username, email, password } = event.target.elements;
        const auth = getAuth();
        // TODO: don't allow signing up if one of the inputs is empty
        if (!checkUser(username.value)) {
            try {
                // TODO: handle error when account already exists
                await createUserWithEmailAndPassword(auth, email.value, password.value)
                    .then(async function(response) {
                        await setDoc(doc(db, "privateusers", response.user.uid), {
                            username: username.value
                        });
                        await setDoc(doc(db, "publicusers", username.value), {
                            uid: response.user.uid
                        });
                    })
            } catch (error) {
                alert(error);
            }
        } else {
            alert("username taken"); // TODO: change this
        }
    };
    
    var typingTimeout;

    async function checkUser(username) {
        await getDoc(doc(db, "publicusers/" + username))
            .then(function (response) {
                    document.getElementById("exists").textContent = response.exists() ? "Sorry, but this username is taken." : "Username is free to use!";
                    return response.exists() ? true : false
                }
            )
    }

    function down() {
        clearTimeout(typingTimeout);
    }

    const up = event => {
        clearTimeout(typingTimeout);
        const username = event.target.value;
        if (username !== "") {
            typingTimeout = setTimeout(checkUser, 1000, username);
        }
    }

    const { currentUser } = useContext(AuthContext);
    if ( !!currentUser ) { return <Navigate to="/home" />} // FIXME: maybe I don't want this happening? should you be able to make an account while already logged in? what happens?

    //TODO: username case

    return (
        // FIXME: maybe dont want to go back to / from signup? nav(-1)?? vv
        // TODO: make this a table maybe? so textboxes are aligned? this'll change anyway
        <>
            <Link to="/">Back</Link> 
            <p>Sign Up</p>

            <form onSubmit={handleSignUp}>
                <label>
                    Username:
                    <input name="username" type="text" placeholder="Username" onKeyDown={() => { down(); this.value = this.value.toLowerCase() }} onKeyUp={up} />
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