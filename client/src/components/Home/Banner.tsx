import React from 'react';
import BannerImg from '../../assets/Home-Banner.png';
import '../../styles/Banner.scss';

export const Banner = () => {
  return (
    <div className="Banner">
      <img src={BannerImg} alt="Home Banner" className="Home-Banner" />
    </div>
  );
};
