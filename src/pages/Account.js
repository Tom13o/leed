import React from 'react'

export default function Account() {
    // if logged in
    // Preload inputs with current account details
    return (
        <>
            <p>Edit Account</p>
            <form>
                <input type="text" name="bio" id="bio" />
            </form>
        </>
    )
}