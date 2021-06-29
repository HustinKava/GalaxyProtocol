import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { NavLink } from 'react-router-dom';
import Logo from '../../Assets/logo-white_1_25.png';
import ComingSoon from '../../Assets/coming-soon-badge.png';
import NavSocial from './NavSocial';

const ExternalLink = ({ href, text }) => {
  return (
    <a
      href={`${href}`}
      target="_blank"
      rel="noopener noreferrer"
      className="navLink"
    >
      <p className="navText">{text}</p>
    </a>
  );
};

const Navbar = () => {
  return (
    <div className="nav">
      {/* Company logo and name */}
      <NavLink to="/" className="navLink">
        <img src={Logo} alt="Logo" className="navLogo" />
      </NavLink>

      <div className="nav__menu-and-icons">
        {/* Menu items */}
        <div className="navMenu">
          <div className="dropdown">
            <p className="dropbtn">Products</p>
            <div className="dropdown-content">
              {/* <NavLink to='/galaxyswap' className='navLink'> */}
              <Link className="navLink">
                <div className="comingSoonNav">
                  <p className="navText coming">GalaxySwap</p>
                  <img src={ComingSoon} alt='' className="comingSoon"></img>
                </div>
              </Link>
              {/* </NavLink> */}
              {/* <NavLink to='/nebulalaunchpad' className='navLink'> */}
              <Link className="navLink">
                <div className="comingSoonNav--2">
                  <p className="navText coming">Nebula Launchpad</p>
                  <img src={ComingSoon} alt='' className="comingSoon"></img>
                </div>
              </Link>
              {/* </NavLink> */}
              <NavLink to="/galaxyUniversity" className="navLink">
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
              <ExternalLink
                href="https://discord.com/invite/dq7m6R7UAz"
                text="Discord"
              />
              <ExternalLink
                href="https://t.me/safegalaxychat"
                text="Telegram"
              />
              <ExternalLink
                href="https://twitter.com/SafeGalaxyToken"
                text="Twitter"
              />
            </div>
          </div>

          <div className="dropdown">
            <p className="dropbtn">About</p>
            <div className="dropdown-content">
              {/* <NavLink to='/aboutus' className='navLink'> */}
              <Link className="navLink">
                <p className="navText">About Us</p>
              </Link>
              <ExternalLink
                href="https://safegalaxy.medium.com/galaxyprotocol-roadmap-e8a49098dd7a"
                text="Whitepaper V1"
              />

              {/* </NavLink> */}
              {/* <NavLink to='/meetourteam' className='navLink'> */}
              <ExternalLink
                href="https://safegalaxy.net/team"
                text="Meet Our Team"
              />

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
        <NavSocial />
      </div>
    </div>
  );
};

export default Navbar;
