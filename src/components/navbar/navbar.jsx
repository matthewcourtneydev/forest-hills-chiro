import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./navbar.scss"

import { GiHamburgerMenu } from "react-icons/gi";


const Navbar = (props) => {

    const navigate = useNavigate()
    function handleOptionSelect(route) {
        navigate(route)
    }
    return (
        <nav className="navbar" id="navbar">
            <span className="hamburger" onClick={() => props.toggleMenu((prev) => !prev)} ><GiHamburgerMenu /></span>
            <div className="nav-items">
                <span className="left">Forest Hills Chiro</span>
                <span className="right">
                    <ul>
                        <li className="nav-item">About</li>
                        <li className="nav-item"><a href="https://intake.mychirotouch.com/?clinic=FHC0002" target="_blank">Patients</a></li>
                        <li className="nav-item"><a href="#">Services</a></li>
                        <li className="nav-item"><a href="#">Review</a></li>
                        <li className="nav-item"><a href="#">Contact</a></li>
                    </ul>
                </span>
            </div>
        </nav>
    );
}

export default Navbar;
