import React from 'react';
import { SidebarContainer } from './SidebarElements';
import { FaTimes } from 'react-icons/fa';
import Logo from '../../Assets/logos/logo-white-text.png';
import ComingSoonBadge from '../../Assets/customButtons/coming-soon-badge.png';
import { NavLink } from 'react-router-dom';

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

      <div className="sidebar-group">
        <ComingSoon text="GalaxySwap" />
        <ComingSoon text="Nebula Launchpad" />
        <InternalLink
          link="galaxyUniversity"
          text="Galaxy Universe&#8209;ity"
          toggle={toggle}
        />
        <ExternalLink href="https://safegalaxy.net/" text="SafeGalaxy" />
      </div>

      {/* Documentation */}
      <p className="sidebar-header">Documentation</p>
      <div className="sidebar-group">
        <InternalLink
          link="whitepaper"
          text="Whitepaper V1"
          toggle={toggle}
        />
        <InternalLink
          link="migrationdocumentation"
          text="Migration Docs"
          toggle={toggle}
        />
      </div>

      {/* Community */}
      <p className="sidebar-header">Community</p>
      <div className="sidebar-group">
        <ExternalLink
          href="https://discord.com/invite/dq7m6R7UAz"
          text="Discord"
        />
        <ExternalLink
          href="https://t.me/GalaxyProtocolOfficialTG"
          text="Telegram"
        />
        <ExternalLink
          href="https://twitter.com/GalaxyProtocol"
          text="Twitter"
        />
      </div>

      {/* About */}
      <p className="sidebar-header">About</p>

      <div className="sidebar-group">
        <InternalLink link="aboutus" text="About Us" toggle={toggle} />
        <InternalLink link="meetourteam" text="Meet Our Team" toggle={toggle} />
        <InternalLink link="faq" text="FAQ" toggle={toggle} />
        <InternalLink link="presskit" text="Presskit" toggle={toggle} />
      </div>
    </SidebarContainer>
  );
}

export default Sidebar;
