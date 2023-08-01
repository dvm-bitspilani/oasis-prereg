import React from 'react'
import '../Navbar/Navbar.css'
import OasisLogo from '../../../assets/oasis-logo.png'
import Oasis from '../../../assets/oasis.png'
import ProfileImg from '../../../assets/profile.svg'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className="navbar-container" >
        <div className="navbar-logo">
            <Link to='/home' style={{textDecoration: "none"}}><img src={OasisLogo} alt="Oasis Logo" /></Link>
            <Link to='/home' style={{textDecoration: "none"}}><div className="oasis-container"><img src={Oasis} alt="Oasis"/></div></Link>
        </div>
        <div className="navbar-items">
            <Link to='/contact' style={{textDecoration: "none"}}><span>Contact</span></Link>
            {/* <Link to='/profile' style={{textDecoration: "none"}}><img src={ProfileImg}></img></Link> */}
        </div>
    </div>
  )
}

export default Navbar