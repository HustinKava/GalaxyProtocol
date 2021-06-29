import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { SidebarContainer } from './SidebarElements';
import { FaTimes } from 'react-icons/fa';
import Logo from '../../Assets/logo-white_1_25.png';
import ComingSoon from '../../Assets/coming-soon-badge.png';
import { NavLink } from 'react-router-dom';

const ExternalLink = ({ href, text }) => {
  return (
    <a
      as="a"
      href={`${href}`}
      target="_blank"
      rel="noopener noreferrer"
      className="sidebar-links"
    >
      <p className="sidebar-text">{text}</p>
    </a>
  );
};

function Sidebar({ isOpen, toggle }) {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <div className="sidebar-navbar">
        {/* Sidebar logo */}
        <img src={Logo} alt="Logo" className="sidebar-navbar__logo" />

        {/* Close button */}
        <div className="sidebar-navbar__icon" onClick={toggle}>
          <FaTimes className="sidebar-navbar__closeBtn" />
        </div>
      </div>

      {/* Products */}
      <p className="sidebar-header">Products</p>

      <div>
        {/* <NavLink to='/galaxyswap' className='sidebar-links'> */}
        <Link className="sidebar-links">
          <p className="sidebar-text">GalaxySwap</p>
          <img src={ComingSoon} alt='' className="comingSoon"></img>
        </Link>
        {/* </NavLink> */}
        {/* <NavLink to='/nebulalaunchpad' className='sidebar-links'> */}
        <Link className="sidebar-links">
          <p className="sidebar-text">Nebula Launchpad</p>
          <img src={ComingSoon} alt='' className="comingSoon"></img>
        </Link>
        {/* </NavLink> */}
        <NavLink to='/galaxyUniversity' className='sidebar-links'>
          <p className="sidebar-text">Galaxy University</p>
        </NavLink>
        {/* <NavLink to='/safegalaxy' className='navLink'> */}
        <Link className="sidebar-links">
          <p className="sidebar-text">SafeGalaxy</p>
        </Link>
        {/* </NavLink> */}
      </div>

      {/* Documentation */}
      <p className="sidebar-header">Documentation</p>
        <ExternalLink href="https://safegalaxy.medium.com/galaxyprotocol-roadmap-e8a49098dd7a" target="_blank" rel="noreferrer" text="Whitepaper V1" />
        {/* <NavLink to='/safegalaxy' className='navLink'> */}
        <Link className="sidebar-links">
          <p className="sidebar-text">Migration Docs</p>
        </Link>
        {/* </NavLink> */}

      {/* Community */}
      <p className="sidebar-header">Community</p>
        <div>
          <ExternalLink href="https://discord.com/invite/dq7m6R7UAz" target="_blank" rel="noreferrer" text="Discord" />
          <ExternalLink href="https://t.me/safegalaxychat" target="_blank" rel="noreferrer" text="Telegram" />
          <ExternalLink href="https://twitter.com/SafeGalaxyToken" target="_blank" rel="noreferrer" text="Twitter" />
        </div>



      {/* About */}
      <p className="sidebar-header">About</p>

      <div>
            {/* <NavLink to='/aboutus' className='navLink'> */}
            <Link className="sidebar-links">
              <p className="sidebar-text">About Us</p>
            </Link>
            {/* </NavLink> */}

            <ExternalLink href="https://safegalaxy.net/team" target="_blank" rel="noreferrer" text="Meet Our Team" />

            <NavLink to="/faq" className="sidebar-links">
              <p className="sidebar-text">FAQ</p>
            </NavLink>
      </div>
    </SidebarContainer>
  );
}

export default Sidebar;
