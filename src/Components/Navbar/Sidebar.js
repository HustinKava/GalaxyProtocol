import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { SidebarContainer } from './SidebarElements';
import { FaTimes } from 'react-icons/fa';
import Logo from '../../Assets/logo-white_1_25.png';
import { NavLink } from 'react-router-dom';

function Sidebar({ isOpen, toggle }) {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <div className='sidebar-navbar'>
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
        </Link>
        {/* </NavLink> */}
        <Link to="/#footerUniversity" className="sidebar-links">
          <p className="sidebar-text">Galaxy University</p>
        </Link>
        {/* <NavLink to='/nebulalaunchpad' className='sidebar-links'> */}
        <Link className="sidebar-links">
          <p className="sidebar-text">Nebula Launchpad</p>
        </Link>
        {/* </NavLink> */}
        {/* <NavLink to='/galaxystation' className='sidebar-links'> */}
        <Link className="sidebar-links">
          <p className="sidebar-text">Galaxy Station</p>
        </Link>
        {/* </NavLink> */}
        <Link to="/#footerMerchandise" className="sidebar-links">
          <p className="sidebar-text">Galaxy Merchandise</p>
        </Link>
      </div>

      {/* Developers */}
      <p className="sidebar-header">Developers</p>

      <div>
        <NavLink to="/documentation" className="sidebar-links">
          <p className="sidebar-text">Documentation</p>
        </NavLink>
        {/* <NavLink to='/whitepaperv1' className='sidebar-links'> */}
        <Link className="sidebar-links">
          <p className="sidebar-text">Whitepaper V1</p>
        </Link>
        {/* </NavLink> */}
        {/* <NavLink to='/audit' className='sidebar-links'> */}
        <Link className="sidebar-links">
          <p className="sidebar-text">Audit</p>
        </Link>
        {/* </NavLink> */}
        {/* <NavLink to='/partnershipoverview' className='sidebar-links'> */}
        <Link className="sidebar-links">
          <p className="sidebar-text">Partnership Overview</p>
        </Link>
        {/* </NavLink> */}
        {/* <NavLink to='/term&conditions' className='sidebar-links'> */}
        <Link className="sidebar-links">
          <p className="sidebar-text">Terms & Conditions</p>
        </Link>
        {/* </NavLink> */}
        {/* <NavLink to='/privacy&policy' className='sidebar-links'> */}
        <Link className="sidebar-links">
          <p className="sidebar-text">Privacy & Policy</p>
        </Link>
        {/* </NavLink> */}
      </div>

      {/* About */}
      <p className="sidebar-header">About</p>

      <div>
        {/* <NavLink to='/aboutus' className='sidebar-links'> */}
        <Link className="sidebar-links">
          <p className="sidebar-text">About Us</p>
        </Link>
        {/* </NavLink> */}
        {/* <NavLink to='/meetourteam' className='sidebar-links'> */}
        <Link className="sidebar-links">
          <p className="sidebar-text">Meet Our Team</p>
        </Link>
        {/* </NavLink> */}
        <NavLink to="/jobs" className="sidebar-links">
          <p className="sidebar-text">Jobs</p>
        </NavLink>
        <NavLink to="/faq" className="sidebar-links">
          <p className="sidebar-text">FAQ</p>
        </NavLink>
        {/* <NavLink to='/presskit' className='sidebar-links'> */}
        <Link className="sidebar-links">
          <p className="sidebar-text">Presskit</p>
        </Link>
        {/* </NavLink> */}
      </div>
    </SidebarContainer>
  );
}

export default Sidebar;
