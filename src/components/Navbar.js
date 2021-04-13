import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const NavBar = () => (
  <header>
    <Navbar variant="dark" style={{backgroundColor: '#2F84D4'}}>
        <Navbar.Brand href="#home">Travel Planet</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Browse Hotels</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href="#logout">Logout</Nav.Link>
        </Nav>
      </Navbar>
  </header>
)

export default NavBar;