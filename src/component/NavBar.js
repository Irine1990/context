
import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <div className="nav">
            
            <NavLink to="/">HOME</NavLink>
            <NavLink to="/cart"><strong>🛒Cart</strong></NavLink>
        </div>
    );
};

export default Navbar;