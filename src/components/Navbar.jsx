import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {

  const [open, setopen] = useState(false)

  return (
    <div className='navbar'>
      <div className="navbar1">
        <h1>Aivon</h1>
      <div className={`nav-inside ${open ? "active" : ""}`}>
       <NavLink
       to='/'
       onClick={() => setopen(false)}
       style={({isActive}) => ({
        color: isActive ? "red": "rgb(226, 226, 226)"
       })}
       >Home</NavLink>
       <NavLink
       to='/aitools'
       onClick={() => setopen(false)}
       style={({isActive}) => ({
        color: isActive ? "red": "rgb(226, 226, 226)"
       })}
       >AI Tools</NavLink>
       <NavLink
       to='/docs'
       onClick={() => setopen(false)}
       style={({isActive}) => ({
        color: isActive ? "red": "rgb(226, 226, 226)"
       })}
       >Docs</NavLink>
      </div>
      </div>
      <div className='menu-icon' onClick={() => setopen(!open)}>
        <i className={open ? "ri-close-line" : "ri-menu-line"}></i>
       </div>
    </div>
  )
}

export default Navbar
