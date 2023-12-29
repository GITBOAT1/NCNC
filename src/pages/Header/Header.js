import './Header.css'
import React from 'react';
import { userGetUserInfo } from "../../hooks/useGetUserinfo";
import { signOut } from "firebase/auth";
import { auth } from "../../config/firebase-config";
import { useNavigate, Link} from "react-router-dom";
import Sidebar from './Sidebar.js';
import NavigationMenu from './NavigationMenu.js';



const Header = () => {
  const { name, profilePhoto } = userGetUserInfo();
  const Navigate = useNavigate();

  const sinUserOut = async () => {
    try {
      await signOut(auth);
      localStorage.clear();
      Navigate("/");
    } catch (err) {
      console.error(err);
    }
  };

  const [isSidebarOpen, setSidebarOpen] = React.useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

    return (
      <>
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <NavigationMenu/>
    </>
    );
}

export default Header;

