import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import Logo from '../../Assets/logo-white_1_25.png';
import MobileLogo from '../../Assets/mobile-navbar-logo.png';
import TwitterLogo from '../../Assets/Twitter-icon.png';
import InstagramLogo from '../../Assets/Instagram-icon.png';
import LinkedInLogo from '../../Assets/Linkedin-icon.png';
import { NavLink } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

const ExternalLink = ({ href, text }) => {
  return (
    <a
      as="a"
      href={`${href}`}
      target="_blank"
      rel="noopener noreferrer"
      className="navLink"
    >
      <p className="navText">{text}</p>
    </a>
  );
};

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
            <NavLink to='/galaxyUniversity' className='navLink'>
            {/* <Link className="navLink"> */}
              <p className="navText">Galaxy University</p>
            {/* </Link> */}
            </NavLink>
            {/* <NavLink to='/safegalaxy' className='navLink'> */}
            <Link className="navLink">
              <p className="navText">SafeGalaxy</p>
            </Link>
            {/* </NavLink> */}
          </div>
        </div>

        <div className="dropdown">
          <p className="dropbtn">Community</p>
          <div className="dropdown-content">
            <ExternalLink href="https://discord.com/invite/dq7m6R7UAz" target="_blank" rel="noreferrer" className="navLink" text="Discord" />
            <ExternalLink href="https://t.me/safegalaxychat" target="_blank" rel="noreferrer" className="navLink" text="Telegram" />
            <ExternalLink href="https://twitter.com/SafeGalaxyToken" target="_blank" rel="noreferrer" className="navLink" text="Twitter" />
          </div>
        </div>

        <div className="dropdown">
          <p className="dropbtn">About</p>
          <div className="dropdown-content">
            {/* <NavLink to='/aboutus' className='navLink'> */}
            <Link className="navLink">
              <p className="navText">About Us</p>
            </Link>
            <NavLink to="/documentation" className="navLink">
              <p className="navText">Documentation</p>
            </NavLink>
            <ExternalLink href="https://safegalaxy.medium.com/galaxyprotocol-roadmap-e8a49098dd7a" target="_blank" rel="noreferrer" className="navLink" text="Whitepaper V1" />

            {/* </NavLink> */}
            {/* <NavLink to='/meetourteam' className='navLink'> */}
            <ExternalLink href="https://safegalaxy.net/team" target="_blank" rel="noreferrer" className="navLink" text="Meet Our Team" />

            {/* </NavLink> */}
            {/* <NavLink to="/jobs" className="navLink">
              <p className="navText">Jobs</p>
            </NavLink> */}
            <NavLink to="/faq" className="navLink">
              <p className="navText">FAQ</p>
            </NavLink>
            {/* <NavLink to='/presskit' className='navLink'> */}
            {/* <Link className="navLink">
              <p className="navText">Presskit</p>
            </Link> */}
            {/* </NavLink> */}
          </div>
        </div>
      </div>

      {/* Social icons */}
      <div className="socialIcons">
        <a><img src={LinkedInLogo} alt="Linkedin social icon" className="socialIcon"></img></a>
        <a><img src={TwitterLogo} alt="twitter social icon" className="socialIcon"></img></a>
        <a><img src={InstagramLogo} alt="Instagram social icon" className="socialIcon"></img></a>
      </div>


    </div >
  );
};

export default Navbar;
