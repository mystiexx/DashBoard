import React, { Component } from 'react'
import logo from '../images/logo.png'
import {Navbar, Nav, Button, Form} from 'react-bootstrap';



class Header extends Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark" fixed="top" className="navbar justify-content-between" expand="lg">
                <Navbar.Brand href=""><img src={logo} alt='work'/></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto nav-link">
                        <Navbar.Text className="link">DashBoard</Navbar.Text>
                    </Nav>
                    <Form inline>
                        <Button variant="outline-primary" style={{marginRight: 30}}>Log Out</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}
export default Header;
