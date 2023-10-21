import React from 'react'
import Signup from '../components/Main/Signup'
import { Helmet } from 'react-helmet-async'

const Login = () => {
  return (
    <>
      <Helmet>
        <title>Login | Music School</title>
        <meta name='description' content='It is about Login page of Music School' />
      </Helmet>
      <Signup />
    </>

  )
}

export default Login