import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './Navbar.css';

class NavbarComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentMenu: 'Home'
        }
    }

    render() {
        return(
            <div>
            <Navbar bg="light" variant="light">
                <Navbar.Brand href="home">Event.maker</Navbar.Brand>
                <Nav className="ml-auto">
                    <Nav.Link href="add-event">Add Event</Nav.Link>
                    <Nav.Link href="dashboard">Dashboard</Nav.Link>
                </Nav>
            </Navbar>
            </div>
        )
    }
}

export default NavbarComponent;