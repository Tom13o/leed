import React, {useContext} from 'react'
import { Outlet, Link } from 'react-router-dom'
import { AuthContext } from "../auth.js";

function SignUpButton() {
    const { currentUser } = useContext(AuthContext);
    return (
        <Link to={!!currentUser ? '/home' : '/signup'}>{!!currentUser ? 'Home' : 'Sign Up'}</Link>
    ) //FIXME: maybe something other than Home? maybe 'enter' or something?
}

export default function LandingContainer() {
    return(
        <>
            <ul>
                <li><Link to="/">Leed</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><SignUpButton /></li>
            </ul>
            <Outlet />
            <div className="footer">
                Footer
            </div>
        </>
    )
}