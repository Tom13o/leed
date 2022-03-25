import React from 'react'
import { Route, Routes } from 'react-router-dom'

export default function LandingPage() {
    return(
        <>
            <div>
                <input type="button" value="Button 1" />
                <input type="button" value="Button 2" />
                <input type="button" value="Button 3" />
                <input type="button" value="Button 4" />
                <input type="button" value="Button 5" />
            </div>
            <p>LandingPage</p>
            {/* the login button should show as "enter" if logged */}
            <p>needs to be a switch</p>
            <Routes>
                
            </Routes>

        </>
    )
}