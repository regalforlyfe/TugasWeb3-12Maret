import React from 'react';
import './navbar.css';
import Container from 'react-bootstrap/Container'

class Navbar extends React.Component{
    render(){
        return(
            <div className="Nav">
                <Container>
                <ul>
                    <li><a href="#profil">Profil</a></li>
                    <li><a href="#album">Album</a></li>
                    <li><a href="#home">Home</a></li>
                    <li style={{float:"left"}}><a href="#logo">Pale</a></li>
                </ul>
                </Container>
            </div>
        );
    }
}

export default Navbar;