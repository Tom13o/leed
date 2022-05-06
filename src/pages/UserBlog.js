import React, { useContext } from 'react'
import { UserContext } from './UserProvider'

export default function UserBlog() {

    const {userExists, userInfo} = useContext(UserContext)

    return (
        <>
            {userExists === true &&
                <>
                    <p>{userInfo.username}'s Blog</p>
                </>
            }
        </>
    )
}