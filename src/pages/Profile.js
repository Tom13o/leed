import React, { useContext, useEffect } from 'react'
import { UserContext } from './UserProvider'

export default function Profile() {

    const {userExists, userInfo} = useContext(UserContext);

    return (
        <>  
            {userExists === true &&
                <>
                <p>This user exists.</p>
                <p>@{userInfo.username}</p>
                <p>First Name is: {userInfo.firstname}</p>
                <p>Last Name is: {userInfo.lastname}</p>
                </>
            }
            {userExists === undefined &&
                <p id="loading">Loading...</p>
            }
            {userExists === false &&
                <p>This user does not exist.</p>
            }
        </>
    )
}