import React from 'react';
import './css/about.css';
import { Container, Row, Col } from 'react-bootstrap';
import img1 from './images/profilepic.jpg';
import img2 from './images/mountain.png';
import img3 from './images/cloud1.png';
export const About = () => {
  return (
    <section>
      <Container className='about'>
        <Row>
          <Col>
            <img src={img3} alt='cloud' className='top-cloud' />
            <h1>I'm Dorgee</h1>
          </Col>
          <Row>
            <Col>
              <p>A Software Engineer</p>
            </Col>
          </Row>
        </Row>
      </Container>
      <div className='con'>
        <img src={img2} alt='mountain' id='mountain' />
      </div>
    </section>
  );
};
