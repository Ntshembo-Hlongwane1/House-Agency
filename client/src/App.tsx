import React from 'react';
import { Banner } from './components/Home/Banner';
import { Footer } from './components/Home/Footer';
import { MainContent } from './components/Home/MainContent';
import { NavBar } from './components/Home/NavBar';
import './styles/App.scss';

export const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <MainContent />
      <Footer />
    </div>
  );
};

export default App;
