import React, { Component } from 'react'
import logo from '../images/logo.png'
import {Navbar, Nav, Button, Form} from 'react-bootstrap';
import {Link} from 'react-router-dom'



class Header extends Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark" fixed="top" className="navbar justify-content-between position-sticky" expand="lg">
                <Navbar.Brand href=""><img src={logo} alt='work'/></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto nav-link">
                        <Navbar.Text className="link"><Link to="/dashboard">DashBoard</Link></Navbar.Text>
                    </Nav>
                    <Form inline>
                        <Button 
                            variant="outline-primary" 
                            style={{marginRight: 30}}>Log Out</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}
export default Header;
