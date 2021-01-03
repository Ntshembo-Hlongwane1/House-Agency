import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import '../../styles/MainContent.scss';
import picture1 from '../../assets/pic1.jpg';
import picture2 from '../../assets/pic2.jpg';

export const MainContent = () => {
  return (
    <main className="MainContent">
      <div className="MainContent__header">
        <h3 className="MainContent__headerText">Find Your Dream Home</h3>
      </div>
      <div className="MainContent__content">
        <Carousel autoPlay={true} infiniteLoop={true}>
          <div>
            <img src={picture1} />
            <h5 className="legend">Houses For Sale</h5>
          </div>
          <div>
            <img src={picture2} />
            <h5 className="legend">Houses For Rent</h5>
          </div>
        </Carousel>
      </div>
    </main>
  );
};
