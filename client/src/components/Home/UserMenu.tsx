import React from 'react';
import LanguageIcon from '@material-ui/icons/Language';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import LockIcon from '@material-ui/icons/Lock';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import '../../styles/UserMenu.scss';

export const UserMenu = () => {
  return (
    <div className="UserMenu">
      <div className="usermenu__signup">
        <LockIcon />
        <h4 className="menu__linkText">SignUp</h4>
      </div>
      <div className="usermenu__signin">
        <LockOpenIcon />
        <h4 className="menu__linkText">SignIn</h4>
      </div>
      <div className="user__houseList">
        <LanguageIcon />
        <h4 className="menu__linkText">List Your House</h4>
      </div>
    </div>
  );
};
