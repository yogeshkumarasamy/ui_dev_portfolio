import React, { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import Home from "./home";
import About from "./about";
import Skills from "./skills"
class Header extends Component {
	
    render() {
        return (
        	<HashRouter>
        	<div>
        	<header>
	          <ul className="header">
	            <li><NavLink to="/">Home</NavLink></li>
	            <li><NavLink to="/about">About</NavLink></li>
	            <li><NavLink to="/skills">Skills</NavLink></li>
	          </ul>
	          </header>
	          <div className="content">
	          <Route exact path="/" component={Home} />
	          <Route path="/about" component={About} />
	          <Route path="/skills" component={Skills} />
	          </div>
	          </div>
        	</HashRouter>
        );
    }
}
export default Header;