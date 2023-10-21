import React from 'react'
import { Helmet } from 'react-helmet-async'
import Profile from '../components/Main/Profile/Profile'

const UserProfile = () => {
    return (
        <>
            <Helmet>
                <title>Profile | Music School</title>
            <meta name='description' content='It is about Profile page of Music School' />
            </Helmet>
            <Profile />
        </>
    )
}

export default UserProfile