import React from 'react';
import './album.css';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import CardGroup from 'react-bootstrap/CardGroup';

class Album extends React.Component {
    state = {
        totalLikes:0
    }

    handleLike = () => {
        if(this.state.totalLikes === 0){
            this.setState({
                totalLikes: this.state.totalLikes + 1
            })
        }
    }

    handleUnlike = () => {
        if(this.state.totalLikes > 0){
            this.setState({
                totalLikes: this.state.totalLikes - 1
            })
        }
    }

    render(){
        return (
            <CardGroup>
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>Ice Bears</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">We Bare Bears</Card.Subtitle>
                        <Card.Img variant="top" src="https://pbs.twimg.com/media/DaOLBjeUwAEOjEC?format=jpg&name=medium"  />
                        <p><strong>Liked by {this.state.totalLikes} others</strong></p>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        <Row className="justify-content-md-center">
                            <button className="like" onClick={this.handleLike}>Like</button>
                            <button className="unlike" onClick={this.handleUnlike}>Unlike</button>
                        </Row>
                    </Card.Body>
                </Card>
            </CardGroup>
        );
    }
}

Album.defaulProps ={

}

export default Album;