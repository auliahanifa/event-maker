import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import './HomePage.css';
import Navbar from './NavbarComponent';
import EventCard from './EventCard';


class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentMenu: 'Home',
        }
    }

    render() {
        return(
            <div>
                <Navbar />
                <div className="container">
                    <div className="homepage-body">
                        <EventCard />       
                    </div>
                </div>
            </div>
        )
    }
}

export default HomePage;