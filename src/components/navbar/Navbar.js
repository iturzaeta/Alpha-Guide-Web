import React, { Fragment, useEffect, useState, useRef } from 'react'
import { Link, Redirect, useLocation } from 'react-router-dom'
import {WithAuthConsumer} from '../../contexts/AuthContext'
import logo from '../../logo.svg'
import './Navbar.css'


const Navbar = ({ currentUser }) => {
  const { pathname } = useLocation()
  const whiteBackground = (pathname === '/login' || pathname === '/register')
  const [navHeight, setNavHeight] = useState(null)

  const navRef = useRef(null)
  useEffect(() => {
    setNavHeight(navRef.current.getBoundingClientRect().height)
  }, [])
 
  return (
    // <header style={{ marginBottom: `${navHeight}px`}}>
    <header>
    <nav ref={navRef} className={`navbar nav-transparent ${whiteBackground ? 'nav-white' : ''}`}>
      <Link to="/"><img src={logo} alt="logo-alpha-guide"></img></Link>

      {currentUser ? (
        <Fragment>
          <Link to="/profile"><i className="icon-profile ri-user-3-line"></i></Link>
          {/* <button onClick={logout} className="logout-btn"><i class="logout-icon ri-shut-down-line"></i></button> */}
        </Fragment>
      ):(
        <Fragment>
          <Link to="/login"><i className="icon-profile ri-user-3-line"></i></Link>
        </Fragment>
      )}
    </nav>
  </header>
  )
}

export default WithAuthConsumer(Navbar)