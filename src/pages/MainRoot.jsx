// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Outlet, useLocation } from "react-router-dom";

// components
import Navbar from "./../components/layout/Navbar"
import Footer from "./../components/layout/Footer"

const MainRoot = () => {
  const location = useLocation();
  const isVideoPage = location.pathname === "/video";

  return (
    <>
      {!isVideoPage && <Navbar />}
      <Outlet />
      {!isVideoPage && <Footer />}
    </>
  )
}

export default MainRoot