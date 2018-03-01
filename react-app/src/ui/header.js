import React, { Component } from "react";
import { NavLink,  HashRouter } from "react-router-dom";
class Header extends Component {
    render() {
        return (
        	<HashRouter>
        	<header>
	          <ul className="header">
	            <li><NavLink to="/">Home</NavLink></li>
	            <li><NavLink to="/about">About</NavLink></li>
	            <li><NavLink to="/skills">Skills</NavLink></li>
	          </ul>
	          </header>
	          </HashRouter>
        );
    }
}
export default Header;