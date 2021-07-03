import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../Assets/logo-white_1_25.png';
import ComingSoonBadge from '../../Assets/coming-soon-badge.png';
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

const InternalLink = ({ link, text }) => {
  return (
    <NavLink to={`/${link}`} className="navLink">
      <p className="navText">{text}</p>
    </NavLink>
  );
};

const ComingSoon = ({ text }) => {
  return (
    <div className="comingSoonNav">
      <p className="navText coming">{text}</p>
      <img
        src={ComingSoonBadge}
        alt={`${text} coming soon`}
        className="comingSoon"
      />
    </div>
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
              <ComingSoon text="GalaxySwap" />
              <ComingSoon text="Nebula Launchpad" />
              <InternalLink
                link="galaxyuniversity"
                text="Galaxy Universe&#8209;ity"
              />
              <ExternalLink href="https://safegalaxy.net" text="SafeGalaxy" />
            </div>
          </div>

          <div className="dropdown">
            <p className="dropbtn">Documentation</p>
            <div className="dropdown-content">
              <ExternalLink
                href="https://safegalaxy.medium.com/galaxyprotocol-roadmap-e8a49098dd7a"
                text="Whitepaper V1"
              />
              <InternalLink
                link="migrationdocumentation"
                text="Migration Docs"
              />
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
              <ExternalLink
                href="https://www.facebook.com/SafeGalaxyToken"
                text="Facebook"
              />
              <ExternalLink
                href="https://www.instagram.com/safegalaxytoken/?igshid=jr936k6emyet"
                text="Instagram"
              />
              <ExternalLink
                href="https://www.reddit.com/r/SafeGalaxy/"
                text="Reddit"
              />
              <ExternalLink
                href="https://www.tiktok.com/@safegalaxytoken?"
                text="Tiktok"
              />
            </div>
          </div>

          <div className="dropdown">
            <p className="dropbtn">About</p>
            <div className="dropdown-content">
              <InternalLink link="aboutus" text="About Us" />
              <InternalLink link="meetourteam" text="Meet Our Team" />
              <InternalLink link="faq" text="FAQ" />
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
