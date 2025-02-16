import React from 'react'
import { Link, Outlet } from 'react-router'


const Contact = () => {
  return (
    <>
    <nav>
        <Link to="404">404</Link>
      </nav>
    <h1>This is Contact Page</h1>
    <Outlet></Outlet>
    </>
  )
}

export default Contact