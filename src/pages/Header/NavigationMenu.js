// NavigationMenu.js
import React from 'react';
import { Link } from 'react-router-dom';
import { userGetUserInfo } from "../../hooks/useGetUserinfo";
import { signOut } from "firebase/auth";
import { auth } from "../../config/firebase-config";
import './Header.css'; // Add your styles 

export const NavigationMenu = () => {
  const { name, profilePhoto } = userGetUserInfo();

  const sinUserOut = async () => {
    try {
      await signOut(auth);
      localStorage.clear();
      // Handle navigation after signing out if needed
    } catch (err) {
      console.error(err);
    }
  };

  
  return (
    <nav className="w3-sidebar w3-collapse w3-white w3-animate-left" style={{ zIndex: 3, width: "300px" }} id="mySidebar">
      <div className="w3-container w3-row">
        <div className="w3-col s4">
          {profilePhoto && (
            <img className="w3-circle w3-margin-right"
              src={profilePhoto} alt="profile_photo" style={{ width: '46px' }} />
          )}
        </div>
        <div className="w3-col s8 w3-bar">
          <span>Welcome, <strong>{name}</strong></span><br />
          <a href="#" className="w3-bar-item w3-button"><i className="fa fa-envelope"></i></a>
          <a href="#" className="w3-bar-item w3-button"><i className="fa fa-user"></i></a>
          <a href="#" className="w3-bar-item w3-button"><i className="fa fa-cog"></i></a>
          <button className="sign-out-button" onClick={sinUserOut}>
            Sign Out
          </button>
        </div>
      </div>
      <hr />
      <div className="w3-container">
        <h5>Dashboard</h5>
      </div>
      <div className="w3-bar-block">
        <Link to="/expense-tracker" className="w3-bar-item w3-button w3-padding w3-blue"><i className="fa fa-users fa-fw"></i> Home</Link>
        <Link to="/random-tracker" className="w3-bar-item w3-button w3-padding"><i className="fa fa-eye fa-fw"></i> Random-Generator</Link>
        <a href="#" className="w3-bar-item w3-button w3-padding"><i className="fa fa-users fa-fw"></i> Traffic</a>
        <a href="#" className="w3-bar-item w3-button w3-padding"><i className="fa fa-bullseye fa-fw"></i> Geo</a>
        <a href="#" className="w3-bar-item w3-button w3-padding"><i className="fa fa-diamond fa-fw"></i> Orders</a>
        <a href="#" className="w3-bar-item w3-button w3-padding"><i className="fa fa-bell fa-fw"></i> News</a>
        <a href="#" className="w3-bar-item w3-button w3-padding"><i className="fa fa-bank fa-fw"></i> General</a>
        <a href="#" className="w3-bar-item w3-button w3-padding"><i className="fa fa-history fa-fw"></i> History</a>
        {/* Your additional menu items */}
      </div>
    </nav>
  );
};

export default NavigationMenu;
