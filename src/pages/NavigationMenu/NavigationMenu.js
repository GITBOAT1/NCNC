// NavigationMenu.js
import React from 'react';
import { Link } from 'react-router-dom';
import { userGetUserInfo } from "../../hooks/useGetUserinfo";

import SignOut from '../signout/SignOut';

const NavigationMenu = () => {
  const { name, profilePhoto } = userGetUserInfo();

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
          <Link to="" className="w3-bar-item w3-button"><i className="fa fa-envelope"></i></Link>
          <Link to="" className="w3-bar-item w3-button"><i className="fa fa-user"></i></Link>
          <Link to="" className="w3-bar-item w3-button"><i className="fa fa-cog"></i></Link>
          <SignOut />
        </div>
      </div>
      <hr />
      <div className="w3-container">
        <h5>Dashboard</h5>
      </div>
      <div className="w3-bar-block">
        <Link to="/expense-tracker" className="w3-bar-item w3-button w3-padding w3-blue"><i className="fa fa-users fa-fw"></i> Home</Link>
        <Link to="/random-tracker" className="w3-bar-item w3-button w3-padding"><i className="fa fa-eye fa-fw"></i> Random-Generator</Link>
        <Link to="/roomSelector" className="w3-bar-item w3-button w3-padding"><i className="fa fa-users fa-fw"></i> chat</Link>

        <Link to="" className="w3-bar-item w3-button w3-padding"><i className="fa fa-bullseye fa-fw"></i> Geo</Link>
        <Link to="" className="w3-bar-item w3-button w3-padding"><i className="fa fa-diamond fa-fw"></i> Orders</Link>
        <Link to="" className="w3-bar-item w3-button w3-padding"><i className="fa fa-bell fa-fw"></i> News</Link>
        <Link to="" className="w3-bar-item w3-button w3-padding"><i className="fa fa-bank fa-fw"></i> General</Link>
        <Link to="" className="w3-bar-item w3-button w3-padding"><i className="fa fa-history fa-fw"></i> History</Link>
      </div>
    </nav>
  );
};

export default NavigationMenu;
