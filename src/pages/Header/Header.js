import './Header.css'
import React from 'react';

import Sidebar from './Sidebar.js';
import NavigationMenu from '../NavigationMenu/NavigationMenu.js';



const Header = () => {
  const [isSidebarOpen, setSidebarOpen] = React.useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

    return (
      <>
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <NavigationMenu />
    </>
    );
}

export default Header;

