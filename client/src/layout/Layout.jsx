import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'
import { useDispatch } from 'react-redux'
import { authUser, notAuthUser } from '../redux/slices/authSlice'

function Layout() {
  const dispatch = useDispatch()

  useEffect(() => {
    const storedUser = localStorage.getItem('cometChatUser')
    if (storedUser) {
      // Optionally, you can parse and validate storedUser here
      dispatch(authUser())
    } else {
      dispatch(notAuthUser())
    }
  }, [dispatch])

  return (
    <>
      <Navbar />
      <div className="layout-container relative min-h-[100vh]  w-[100vw]   flex flex-col justify-center items-center bg-gradient-to-b from-[#181818] to-[#1f1f1f]  ">
        <Outlet />
      </div>
    </>
  )
}

export default Layout
