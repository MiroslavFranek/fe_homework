import React from "react";
import "./navbar.css"
import { Link } from "react-router-dom";

const Navbar = (props) => {
    return (
        <nav>
            <Link to="/" id="logo">Home</Link>
            <Link to="/shops">Shops</Link>
            <Link to="/dashboard">Dashboard</Link> 
            <Link to="/marketplace">Vehicle Marketplace</Link> 
        </nav>
    )
}

export default Navbar;
