import './Footer.css'
import React from "react";
import { getFullYear, getFooterCopy } from '../utils/utils.js'

const Footer = () => {
    return (
        <div className="App-footer">
        <p> Copyright {getFullYear()} - {getFooterCopy(true)}</p>
      </div>
    );
}
export default Footer;