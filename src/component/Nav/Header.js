import React, { Component } from 'react'
import logo from '../images/logo.png'
import {Navbar, Nav, Button, Form} from 'react-bootstrap';
import { Link } from 'react-router-dom'



class Header extends Component {

    state = {
        loggedIn: true
    }

    componentDidMount () {
        const token = localStorage.getItem('token');
        if (!token) this.setState({ loggedIn: false});
    }
    logOut = () => {
        localStorage.removeItem('token');
        window.location.href='/';
    }
    render() {
        return (
            <Navbar fixed="top" className="position-sticky" expand="md">
                <Navbar.Brand><img src={logo} alt='work'/></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link><Link to="/dashboard" className="link">DashBoard</Link></Nav.Link>
                        <Nav.Link><Link to="/story" className="link">Story</Link></Nav.Link>
                    </Nav>
                    <Form inline>
                        <Button 
                             onClick={this.logOut}
                            variant="outline-primary" className="log-btn mr-sm-2" 
                            >Log Out</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}
export default Header;
