import React from 'react'
import './Navbar.scss'
const Navbar = () => {
  return (
    <nav>
      {/* left-part of navbar */}
        <div className="left">
          <a href='/' className='logo'>
            <img src="/logo.png" alt="" />
            <span>LamaEstate</span>
          </a>
          <a href="">Home</a>
          <a href="">About</a>
          <a href="">Contact</a>
          <a href="">Others</a>
          </div>

        {/* Right-part of Navbar */}
        <div className="right">
          <a href="">SignIn</a>
          <a href="" className='SignUp'>SignUp</a>
        </div>
    </nav>
  )
}

export default Navbar