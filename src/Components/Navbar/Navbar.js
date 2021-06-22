import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import Logo from '../../Assets/logo-white_1_25.png';
import MobileLogo from '../../Assets/mobile-navbar-logo.png';
import { NavLink } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

const Navbar = ({ toggle }) => {
  return (
    <div className="nav">
      {/* Company logo and name */}
      <FaBars className="mobileMenu" onClick={toggle} />
      <NavLink to="/" className="navLink">
        <img src={Logo} alt="Logo" className="navLogo" />
        <img src={MobileLogo} alt="Mobile Logo" className="navMobileLogo" />
      </NavLink>

      {/* Menu items */}
      <div className="navMenu">
        <div className="dropdown">
          <p className="dropbtn">Products</p>
          <div className="dropdown-content">
            {/* <NavLink to='/galaxyswap' className='navLink'> */}
            <Link className="navLink">
              <p className="navText">GalaxySwap</p>
            </Link>
            {/* </NavLink> */}
            {/* <NavLink to='/nebulalaunchpad' className='navLink'> */}
            <Link className="navLink">
              <p className="navText">Nebula Launchpad</p>
            </Link>
            {/* </NavLink> */}
            {/* <NavLink to='/galaxyuniverse' className='navLink'> */}
            <Link className="navLink">
              <p className="navText">Galaxy Universe</p>
            </Link>
            {/* </NavLink> */}
            {/* <NavLink to='/safegalaxy' className='navLink'> */}
            <Link className="navLink">
              <p className="navText">SafeGalaxy</p>
            </Link>
            {/* </NavLink> */}
          </div>
        </div>

        <div className="dropdown">
          <p className="dropbtn">Developers</p>
          <div className="dropdown-content">
            <NavLink to="/documentation" className="navLink">
              <p className="navText">Documentation</p>
            </NavLink>
            {/* <NavLink to='/whitepaperv1' className='navLink'> */}
            <Link className="navLink">
              <p className="navText">Whitepaper V1</p>
            </Link>
            {/* </NavLink> */}
            {/* <NavLink to='/audit' className='navLink'> */}
            <Link className="navLink">
              <p className="navText">Audit</p>
            </Link>
            {/* </NavLink> */}
          </div>
        </div>

        <div className="dropdown">
          <p className="dropbtn">Community</p>
          <div className="dropdown-content">
            <Link to="/#footerDiscord" className="navLink">
              <p className="navText">Discord</p>
            </Link>
            <Link to="/#footerTelegram" className="navLink">
              <p className="navText">Telegram</p>
            </Link>
            {/* <NavLink to='/twitter' className='navLink'> */}
            <Link className="navLink">
              <p className="navText">Twitter</p>
            </Link>
            {/* </NavLink> */}
          </div>
        </div>

        <div className="dropdown">
          <p className="dropbtn">About</p>
          <div className="dropdown-content">
            {/* <NavLink to='/aboutus' className='navLink'> */}
            <Link className="navLink">
              <p className="navText">About Us</p>
            </Link>
            {/* </NavLink> */}
            {/* <NavLink to='/meetourteam' className='navLink'> */}
            <Link className="navLink">
              <p className="navText">Meet Our Team</p>
            </Link>
            {/* </NavLink> */}
            <NavLink to="/jobs" className="navLink">
              <p className="navText">Jobs</p>
            </NavLink>
            <NavLink to="/faq" className="navLink">
              <p className="navText">FAQ</p>
            </NavLink>
            {/* <NavLink to='/presskit' className='navLink'> */}
            <Link className="navLink">
              <p className="navText">Presskit</p>
            </Link>
            {/* </NavLink> */}
          </div>
        </div>
      </div>

      <div className="navBtn">
        <NavLink to="/galaxyswap" className="navBtnLink">
          <span className="navUseGalaxy">Use&nbsp;Galaxy</span>
          <span className="navSwap">Swap</span>
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
