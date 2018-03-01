import React, { Component } from "react";
import { Route, HashRouter } from "react-router-dom";
import Home from "./home";
import About from "./about";
import Skills from "./skills"
class Content extends Component {

    render() {
        return (
        	<HashRouter>
        	<div>
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
export default Content;