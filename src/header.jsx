import React from 'react';
import { Navbar, Nav, Container, Collapse } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/navbar.css';

export const Header = () => {
  return (
    <>
      <Navbar expand='md'>
        <Container>
          <Navbar.Brand href='#home' id='change-color'>
            Dorgee Lama
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='navbar-links'>
              <Nav.Link href='#home' id='change-color'>
                Projects
              </Nav.Link>
              <Nav.Link href='#about' id='change-color'>
                About
              </Nav.Link>
              <Nav.Link href='#pricing' id='change-color'>
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
