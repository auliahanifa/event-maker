import React, { Component } from 'react';
import { Button, Col, Row, Form, Carousel } from 'react-bootstrap';
import './FormAddEvent.css';
import Navbar from '../Home/NavbarComponent';
import Pic1 from '../../assets/img/meet.jpg';
import Pic2 from '../../assets/img/meet2.jpg';

class FormAddEvent extends Component {
    constructor(props){
        super(props);
        this.state = {
            eventId: 0,
            title: '',
            participants: [ ],
            location: '',
            date: null,
            note: '',
            allParticipants: [
                {id:1, name: "Amanda Ciassera"},
                {id:2, name: "Reinaldy Akbar"},
                {id:3, name: "Rinsa Sari A."},
                {id:4, name: "Gilang Firmansyah"},
                {id:5, name: "Hanif Maulana"},
                {id:6, name: "Amanda Ciassera"},
            ]            
        }
    }


    render() {
        return (
            <div>
                <Navbar />
                <div className="container">                
                    
                    <div className="body-form">
                    <Col>
                        <h3>Add event</h3>

                        <div className="form-add-event">
                            <Form.Label>Title</Form.Label>
                            <Form.Control type="text" placeholder="Event title" />
                            <Row className="loc-and-date">
                                <Col>
                                    <Form.Label>Location</Form.Label>
                                    <Form.Control type="text" placeholder="Location" />
                                </Col>
                                <Col>
                                    <Form.Label>Date</Form.Label>
                                    <Form.Control type="date"/>
                                </Col>
                            </Row>
                            <Form.Label>Participant</Form.Label>
                            <Form.Control as="select">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </Form.Control>
                            <Form.Label>Note</Form.Label>
                            <Form.Control as="textarea" rows={3} placeholder="type the description or summary of the event here.."/>

                            <div className="mb-3">
                                <Form.File id="formcheck-api-regular">
                                <Form.File.Label>Upload image</Form.File.Label>
                                <Form.File.Input type="file" name="myImage" accept="image/png, image/gif, image/jpeg"/>
                                </Form.File>
                            </div>
                            <Button variant="primary" size="md" active>
                                Submit
                            </Button>{' '}
                        </div>
                    </Col>

                    <Col className = "picture-section">
                        <Carousel fade>
                            <Carousel.Item>
                                <img
                                className="form-img-carousel"
                                src= {Pic1}
                                alt="First slide"
                                />
                                <Carousel.Caption>
                                <h3>Create your own event</h3>
                                {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                className="form-img-carousel"
                                src={Pic2}
                                alt="Second slide"
                                />

                                <Carousel.Caption>
                                <h3>You can make it public now</h3>
                                {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                                </Carousel.Caption>
                            </Carousel.Item>
                            </Carousel>
                        </Col>
                    </div>
                </div>
            </div>
        )
    }
}

export default FormAddEvent;