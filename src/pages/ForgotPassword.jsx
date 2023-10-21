import React from 'react'
import ForgotPassword from '../components/Main/ForgetPassword'
import { Helmet } from 'react-helmet-async'

const Login = () => {
  return (
    <>
      <Helmet>
        <title>Login | Music School</title>
        <meta name='description' content='It is about Login page of Music School' />
      </Helmet>
      <ForgotPassword />
    </>

  )
}

export default Login