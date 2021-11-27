import React from 'react';
import { Navbar, Nav, Container, Collapse } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/navbar.css';

export const Header = () => {
  return (
    <>
      <Navbar bg='light' variant='light' expand='md'>
        <Container>
          <Navbar.Brand href='#home'>Dorgee Lama</Navbar.Brand>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='navbar-links'>
              <Nav.Link href='#home'>Projects</Nav.Link>
              <Nav.Link href='#features'>About</Nav.Link>
              <Nav.Link href='#pricing'>Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
