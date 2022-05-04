import React, {useContext} from 'react'
import { Link, Navigate } from 'react-router-dom'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { AuthContext } from "../auth.js";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { db } from "../index";

export default function SignUp() {
    const handleSignUp = async event => {
        event.preventDefault();
        const { username, email, password, firstname, lastname } = event.target.elements;
        const auth = getAuth();
        // TODO: don't allow signing up if one of the inputs is empty
        checkUser(username.value).then(async function(value) {
            console.log(value);
            if (value === false) {
                try {
                    // TODO: handle error when account already exists
                    await createUserWithEmailAndPassword(auth, email.value, password.value)
                    .then(async function(response) {
                        await setDoc(doc(db, "privateusers", response.user.uid), {
                            username: username.value,
                            email: email.value
                        });
                        await setDoc(doc(db, "publicusers", username.value), {
                            uid: response.user.uid,
                            firstname: firstname.value,
                            lastname: lastname.value
                        });
                    })
                } catch (error) {
                    alert(error);
                }
            } else {
                alert("username taken"); // TODO: change this
            }
        })
    };
    
    var typingTimeout;

    async function checkUser(username) {
        return new Promise(async function(resolve) {
            await getDoc(doc(db, "publicusers/" + username))
                .then(function (response) {
                        document.getElementById("exists").textContent = response.exists() ? "Sorry, but this username is taken." : "Username is free to use!";
                        console.log(response.exists() + "incheckuser");
                        resolve(response.exists())
                    }
                )
            });
    }

    function down() {
        clearTimeout(typingTimeout);
    }

    const up = event => {
        clearTimeout(typingTimeout);
        const p = event.target.selectionStart;
        const username = event.target.value;
        if (username !== "") {
            typingTimeout = setTimeout(checkUser, 1000, username);
        }
        event.target.value = event.target.value.toLowerCase()
        event.target.setSelectionRange(p, p);
    }

    const { currentUser } = useContext(AuthContext);
    if ( !!currentUser ) { return <Navigate to="/home" />} // FIXME: maybe I don't want this happening? should you be able to make an account while already logged in? what happens?

    //TODO: username case

    return (
        // FIXME: maybe dont want to go back to / from signup? nav(-1)?? vv
        // TODO: make this a table maybe? so textboxes are aligned? this'll change anyway
        // TODO: make component for cleaner code
        <>
            <Link to="/">Back</Link> 
            <p>Sign Up</p>

            <form onSubmit={handleSignUp}>
                <label>
                    Username:
                    <input name="username" type="text" placeholder="@username" onKeyDown={down} onKeyUp={up} style={{textTransform: "lowercase"}} />
                </label>
                <p id="exists" style={{display: 'inline'}}></p>
                <br />
                <label>
                    First:
                    <input type="text" name="firstname" />
                </label>
                <label>
                    Last:
                    <input type="text" name="lastname" />
                </label>
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