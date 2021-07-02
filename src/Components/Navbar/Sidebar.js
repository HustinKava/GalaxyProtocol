import React, { useState } from 'react';
import { SidebarContainer } from './SidebarElements';
import { FaTimes } from 'react-icons/fa';
import Logo from '../../Assets/logo-white_1_25.png';
import ComingSoonBadge from '../../Assets/coming-soon-badge.png';
import { NavLink } from 'react-router-dom';
import { Modal as MainModal } from '../../Components/Modal/Modal';
import { modalContent } from '../../Components/Modal/modalContent';

const ExternalLink = ({ href, text }) => {
  return (
    <a
      href={`${href}`}
      target="_blank"
      rel="noopener noreferrer"
      className="sidebar-links"
    >
      <p className="sidebar-text">{text}</p>
    </a>
  );
};

const InternalLink = ({ link, text, toggle }) => {
  return (
    <NavLink to={`/${link}`} className="sidebar-links" onClick={toggle}>
      <p className="sidebar-text">{text}</p>
    </NavLink>
  );
};

const ComingSoon = ({ text }) => {
  return (
    <div className="sidebar-links">
      <p className="sidebar-text">{text}</p>
      <img
        src={ComingSoonBadge}
        alt={`${text} coming soon`}
        className="comingSoon"
      />
    </div>
  );
};

function Sidebar({ isOpen, toggle }) {

  const [buyBackModal, setBuyBackModal] = useState(false);

  return (
    <SidebarContainer isOpen={isOpen}>
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
        <ComingSoon text="GalaxySwap" />
        <ComingSoon text="Nebula Launchpad" />
        <InternalLink link="galaxyUniversity" text="Galaxy University" toggle={toggle}/>
        <ExternalLink href="https://safegalaxy.net/" text="SafeGalaxy" />
      </div>

      {/* Documentation */}
      <p className="sidebar-header">Documentation</p>
      <ExternalLink
        href="https://safegalaxy.medium.com/galaxyprotocol-roadmap-e8a49098dd7a"
        text="Whitepaper V1"
      />
      {/* <InternalLink link="migrationdocs" text="Migration Docs" /> */}
      
      <div className="sidebar-links" >
        <button 
        className='sidebar-text'
        onClick={() => {
          setBuyBackModal(true);
        }}>
          Migration Docs
        </button>
        {buyBackModal && <MainModal modalContent={modalContent.buyBackModal} closeModal={setBuyBackModal}/>}
      </div>

      {/* Community */}
      <p className="sidebar-header">Community</p>
      <div>
        <ExternalLink
          href="https://discord.com/invite/dq7m6R7UAz"
          text="Discord"
        />
        <ExternalLink href="https://t.me/safegalaxychat" text="Telegram" />
        <ExternalLink
          href="https://twitter.com/SafeGalaxyToken"
          text="Twitter"
        />
      </div>

      {/* About */}
      <p className="sidebar-header">About</p>

      <div>
        <InternalLink link="aboutus" text="About Us" toggle={toggle}/>
        <InternalLink link="meetourteam" text="Meet Our Team" toggle={toggle}/>
        <InternalLink link="faq" text="FAQ" toggle={toggle}/>
      </div>
    </SidebarContainer>
  );
}

export default Sidebar;
