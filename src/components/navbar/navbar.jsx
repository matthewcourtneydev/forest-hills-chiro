import React from 'react';
import "./navbar.scss"

import { GiHamburgerMenu } from "react-icons/gi";


const Navbar = (props) => {
    return (
        <nav className="navbar" id="navbar">
            <span onClick={() => props.toggleMenu((prev) => !prev)} ><GiHamburgerMenu /></span>
        </nav>
    );
}

export default Navbar;
