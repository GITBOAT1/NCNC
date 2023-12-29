// Sidebar.js
import React from 'react';
import './Header.css';
import NavigationMenu from './NavigationMenu';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <>
      {/* Top container */}
      <div className="w3-bar w3-top w3-black w3-large" style={{ zIndex: 4 }}>
        <button
          className="w3-bar-item w3-button w3-hide-large w3-hover-none w3-hover-text-light-grey"
          onClick={toggleSidebar}
        >
          <i className="fa fa-bars"></i> Menu
        </button>
        <span className="w3-bar-item w3-right">Logo</span>
      </div>

      {/* Sidebar */}
      <div className={`w3-sidebar w3-collapse w3-white w3-animate-left ${isOpen ? 'show' : ''}`} style={{ zIndex: 3, width: '300px' }}>
        {/* Content of your sidebar */}
        <NavigationMenu />
      </div>

      {/* Overlay effect */}
      <div
        className={`overlay-bg ${isOpen ? 'show' : ''}`}
        onClick={toggleSidebar}
      ></div>
    </>
  );
};

export default Sidebar;
