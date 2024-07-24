import React from "react";
import "../Navbar/Navbar.css";
import Oasis from "../../../assets/oasis.png";
import ProfileImg from "../../../assets/profile.svg";
import { Link } from "react-router-dom";
import BackBtn from "../../../assets/backarrow.png";
const Navbar = () => {
  // const history = useHistory();

  // Function to handle the back button click
  const handleBackButtonClick = () => {
    // console.log('first')
    window.history.back(); // Go back to the previous page
  };
  return (
    <div className="navbar-container">
      <div className="navbar-back-button" onClick={handleBackButtonClick}>
        <img src={BackBtn} width="10px" height="auto"></img>
      </div>
      <div className="navbar-logo">
        {/* <Link to="/home" style={{ textDecoration: "none" }}>
          <img src={OasisLogo} alt="Oasis Logo" />
        </Link> */}
        <Link to="/home" style={{ textDecoration: "none" }}>
          <div className="oasis-container">
            <img src={Oasis} alt="Oasis" />
          </div>
        </Link>
      </div>
      <div className="navbar-items">
        <Link to="/contact" style={{ textDecoration: "none" }}>
          <span>Contact</span>
        </Link>
        {/* <Link to='/profile' style={{textDecoration: "none"}}><img src={ProfileImg}></img></Link> */}
      </div>
    </div>
  );
};

export default Navbar;
