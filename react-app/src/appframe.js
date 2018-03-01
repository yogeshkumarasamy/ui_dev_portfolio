import React, { Component } from "react";
import Header from "./ui/header";
import Content from "./ui/content";
import Footer from "./ui/footer";
class Appframe extends Component {
    render() {
        return (
        	<div>
        	<Header></Header>
        	<Content />
        	<Footer />
        	</div>
        );
    }
}
export default Appframe;