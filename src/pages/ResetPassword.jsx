import React from 'react'
import ResetPassword from '../components/Main/ResetPassword'
import { Helmet } from 'react-helmet-async'

const Login = () => {
  return (
    <>
      <Helmet>
        <title>Login | Music School</title>
        <meta name='description' content='It is about Login page of Music School' />
      </Helmet>
      <ResetPassword />
    </>

  )
}

export default Login