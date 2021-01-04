import React from 'react';
import { Banner } from './Banner';
import { Footer } from './Footer';
import { MainContent } from './MainContent';
import { NavBar } from './NavBar';

interface Props {}

export const Home = (props: Props) => {
  return (
    <div className="Home">
      <NavBar />
      <Banner />
      <MainContent />
      <Footer />
    </div>
  );
};
