import React from 'react'
import { Outlet, Link } from 'react-router-dom'

function LoginButton() {
    var a = true
    return (
        <Link to={a ? '/home' : '/login'}>{a ? 'Home' : 'Login'}</Link>
    )
}

export default function LandingContainer() {
    return(
        <>
            <ul>
                <li><Link to="/">Leed</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><LoginButton /></li>
            </ul>
            <Outlet />
        </>
    )
}