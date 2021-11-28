import React from 'react';
import { Header } from './header';
import { LandingPage } from './landingpage';
import { About } from './about';
import { Skills } from './skills';

const HomePage = () => {
  return (
    <div>
      <Header />
      <LandingPage />
      <About />
      <Skills />
    </div>
  );
};

export default HomePage;
