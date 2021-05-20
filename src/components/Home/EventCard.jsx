import React, { Component } from 'react';
import Pic1 from '../../assets/img/meet.jpg';
import 'react-multi-carousel/lib/styles.css';
import  { Card } from 'react-bootstrap';
import Carousel from "react-multi-carousel";

class EventCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: 
            [{eventId: 1, eventTitle: "Choosing The Right Company That Works For Your Career", location: "Menara BNI Lt. 49", date: "2021-08-11", note: "Memilih perusahaan tempat bekerja itu penting karena berpengaruh besar ke perkembangan karirmu. Untungnya, ada webinar gratis dari Glints yang akan membahas cara memilih perusahaan yang tepat untuk karirmu. Mulai dari perbedaan jenis perusahaan (NGO, start up, perusahaan multinasional, BUMN, dll.)", image: Pic1},
            {eventId: 2, eventTitle: "Kelas Kreatif: Let’s Create Your Original Character", location: "Menara 101", date: "2021-06-22", note: "Di sini kemampuan gambarmu akan dikembangkan lebih jauh dengan cara membuat karaktermu sendiri. Mulai dari anatomi dasar, desain karakter, tips, sampai pengembangan karakter, semuanya akan dikupas tuntas.", image: Pic1},
            {eventId: 3, eventTitle: "Webinarku: Tips and Tricks on Essay Writing for Scholarship LPDP ", location: "Gd. Balairung Universitas Negeri Jakarta", date: "2021-07-02", note: "kesempatan ikut webinar tips dan trik penulisan esai LPDP secara gratis di sini. Peserta bisa bertanya langsung ke pembicara yang sukses mendapat beasiswa LPDP, dihadiri alumni Kobe University dan juga London School of Economics.", image: Pic1},
            ],
        }
    }

    render() {
        return(
            <div className="container">
                <Carousel
                additionalTransfrom={0}
                arrows
                autoPlay
                autoPlaySpeed={3000}
                centerMode={false}
                className=""
                containerClass="container-with-dots"
                dotListClass=""
                draggable
                focusOnSelect={false}
                infinite
                itemClass=""
                keyBoardControl
                minimumTouchDrag={80}
                renderButtonGroupOutside={false}
                renderDotsOutside={false}
                responsive={{
                    desktop: {
                    breakpoint: {
                        max: 3000,
                        min: 1024
                    },
                    items: 2,
                    partialVisibilityGutter: 40
                    },
                    mobile: {
                    breakpoint: {
                        max: 464,
                        min: 0
                    },
                    items: 1,
                    partialVisibilityGutter: 30
                    },
                    tablet: {
                    breakpoint: {
                        max: 1024,
                        min: 464
                    },
                    items: 2,
                    partialVisibilityGutter: 30
                    }
                }}
                showDots={false}
                sliderClass=""
                slidesToSlide={2}
                swipeable
                >
                    {this.state.data.map((event) => (
                    <Card className="event-card" key={event.eventId} >
                        <Card.Img variant="top" src={event.image} />
                        <Card.Body>
                        <Card.Title>{event.eventTitle}</Card.Title>
                        <Card.Text>
                            {event.note}
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <small className="text-muted">{event.location}{' '}
                        {event.date}</small>
                        </Card.Footer>
                    </Card>
                    ))}
                </Carousel>                
            </div>
        )
    }
}

export default EventCard;