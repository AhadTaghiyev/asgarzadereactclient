import React from 'react'
import LoginSection from '../components/Main/Login'
import { Helmet } from 'react-helmet-async'

const Login = () => {
  
  return (
    <>
      <Helmet>
        <title>Login | Music School</title>
        <meta name='description' content='It is about Login page of Music School' />
      </Helmet>
      <LoginSection />
    </>

  )
}

export default Login