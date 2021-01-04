import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import Logo from '../../assets/mortgage.svg';
import { Avatar } from '@material-ui/core';
import '../../styles/NavBar.scss';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { UserMenu } from './UserMenu';

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
        <Popup
          trigger={<Avatar src="" alt="User Profile" className="right-nav-link" />}
          position="bottom right"
        >
          <UserMenu />
        </Popup>
      </div>
    </nav>
  );
};
