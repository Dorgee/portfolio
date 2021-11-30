import React from 'react';
import { Navbar, Nav, Container, Collapse } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/navbar.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export const Header = () => {
  return (
    <Navbar expand='md'>
      <Container>
        <Navbar.Brand href='#home' id='change-color'>
          Dorgee Lama
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='navbar-links'>
            <Nav.Link href='https://github.com/Dorgee' id='change-color'>
              Github
            </Nav.Link>
            <Nav.Link href='www.linkedin.com/in/dorgee-lama' id='change-color'>
              Linkedin
            </Nav.Link>
            <Nav.Link href='mailto: dorgeelama91@gmail.com' id='change-color'>
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
