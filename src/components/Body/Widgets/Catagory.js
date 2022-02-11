import React from 'react'
import './Catagory.css'
import { NavLink, Outlet } from 'react-router-dom'
function Catagory() {
  return (
    <div className='catagory'>
      <div className="catagory-nav">
        <div className="catagory-title">
          <p>Whats<span>New</span></p>
        </div>
        <div className="links">
          <NavLink to=''>Buisness</NavLink>
          <NavLink to='Entertainment'>Entertainment</NavLink>
          <NavLink to='Health'>Health</NavLink>
          <NavLink to='Science'>Science</NavLink>
          <NavLink to='Sports'>Sports</NavLink>
          <NavLink to='Technology'>Technology</NavLink>
        </div>
      </div>
      <div className="catagory-body">
        <Outlet />
      </div>
    </div>
  )
}

export default Catagory