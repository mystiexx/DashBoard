import React, { Component } from 'react'
import logo from '../images/logo.png'
import {Navbar} from 'react-bootstrap';



class Header2 extends Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark" fixed="top" className="navbar justify-content-between" expand="lg">
                <Navbar.Brand href=""><img src={logo} alt='work'/></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            </Navbar>
        )
    }
}
export default Header2;
