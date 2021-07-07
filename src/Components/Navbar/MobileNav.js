import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import MobileLogo from '../../Assets/logos/gp-emblem-color-small.png';
import NavSocial from './NavSocial';

const MobileNav = ({ toggle }) => {
  return (
    <div className="mobile-nav">
      {/* Company logo and name */}
      <div className="mobile-nav__container">
        <div>
          <FaBars className="mobile-nav__burger" onClick={toggle} />
          <NavLink to="/" className="navLink">
            <img
              src={MobileLogo}
              alt="Mobile Logo"
              className="mobile-nav__logo"
            />
          </NavLink>
        </div>

        {/* Social icons */}
        <NavSocial />
      </div>
    </div>
  );
};

export default MobileNav;
