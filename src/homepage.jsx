import React from 'react';
import { Header } from './header';
import { LandingPage } from './landingpage';
import { About } from './about';
import { Skills } from './skills';
import { Projects } from './Projects';

const HomePage = () => {
  return (
    <div>
      <Header />
      <LandingPage />
      <About id='about' />
      <Skills id='skills' />
      <Projects />
    </div>
  );
};

export default HomePage;
