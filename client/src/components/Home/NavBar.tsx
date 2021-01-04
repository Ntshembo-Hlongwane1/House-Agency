import React from 'react';
import LanguageIcon from '@material-ui/icons/Language';
import SearchIcon from '@material-ui/icons/Search';
import Logo from '../../assets/mortgage.svg';
import { Avatar } from '@material-ui/core';
import '../../styles/NavBar.scss';

export const NavBar = () => {
  return (
    <nav className="nav-bar">
      <div className="nav-bar-left">
        <img src={Logo} alt="Company Logo" className="nav-logo" />
        <h2 className="nav-company-name">Hlongwane Properties</h2>
      </div>
      <div className="nav-bar-center">
        <input type="text" placeholder="Search..." className="nav-bar-input-field" />
        <SearchIcon />
      </div>
      <div className="nav-bar-right">
        <div className="right__houseListing">
          <h4 className="right-nav-link house-listing-text">Sell / Rent</h4>
        </div>
        <Avatar src="" alt="User Profile" className="right-nav-link" />
      </div>
    </nav>
  );
};
