import React from 'react';
import './home.css';
import Navbar from '../../Navbar/index';
import Album from '../../Pages/Album/index';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function Home() {
    const card = [
        {
          name : "Ahmad Rifal" ,
          location : "Jakarta",
          image : require('../../../images/pale.jpeg'),
          likes : "249",
          content : "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
          name : "Alfarel Zaki" ,
          location : "Madura",
          image : require('../../../images/farel.jpeg'),
          likes : "221",
          content : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
        },
        {
          name : "Fariz Albab" ,
          location : "Solo",
          image : require('../../../images/albab.jpeg'),
          likes : "202",
          content : "velit dignissim",
        },
        {
            name : "Grizz" ,
            location : "Yogya",
            image : require('../../../images/grizz.jpeg'),
            likes : "999",
            content : "velit dignissim",
          }
    ]
        return(
            <div>
                <div className="header">
                    <Navbar></Navbar>
                </div>
                <div className="content">
                    <Container>
                        <Row className="justify-content-md-center">
                            <Album></Album>
                        </Row>
                    </Container>
                    <br></br>
                    <Container>
                        <Row className="justify-content-md-center">
                            <CardGroup>
                            {card.map (data=>
                                <Card style={{ width: '18em',margin:'10px' }}>
                                    <Card.Body>
                                        <Card.Title>{data.name}</Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted">{data.location}</Card.Subtitle>
                                        <Card.Img variant="top" src={data.image}/>
                                        <p><strong>Liked by {data.likes} others</strong></p>
                                        <Card.Text>
                                        {data.content}
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            )}
                            </CardGroup>
                        </Row>
                    </Container>
                </div>
                <div className="footer">
                    <h6>Created by Ahmad Rifal</h6>
                </div>
                </div>
        );
    }

export default Home;