import React from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';

const NavBar = () => {
    return (
        <div style={{marginBottom:'4%'}}>
           <Navbar bg="light" variant="light">
        <Container>
          <img   style={{height:"30px",  width:"30px", marginRight:"1%"}} src="icon.ico"/>
          <Navbar.Brand href="/">Movie App</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      
        </div>
    );
};

export default NavBar;