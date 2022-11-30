import React from "react";
import "./Navbar.css"
import Button from '@mui/material/Button';

const Navbar = () => {
    return (
        <div className="Navbar">
        <div className="navContainer">
            <span className="logo"> Shrimp Booking </span>
            <div className="navItem">
            <Button class="navButton" variant="contained">Register</Button>
            <Button class="navButton" variant="contained">Sign in</Button>
            </div>
        </div>
        </div>
    )
} 
export default Navbar;