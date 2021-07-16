import React, { useState } from 'react';
import { SidebarContainer } from './SidebarElements';
import { FaTimes } from 'react-icons/fa';
import Logo from '../../Assets/logos/logo-white-text.png';
import ComingSoonBadge from '../../Assets/customButtons/coming-soon-badge.png';
import { NavLink } from 'react-router-dom';
import { Modal } from '../Modal/Modal';
import { modalContent } from '../Modal/modalContent';

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
  const [termsModal, setTermsModal] = useState(false);
  const [privacyModal, setPrivacyModal] = useState(false);

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
        <ExternalLink href="https://safegalaxy.net/" text="SafeGalaxy" />
        <InternalLink
          link="galaxyUniversity"
          text="Galaxy Universe&#8209;ity"
          toggle={toggle}
        />
        <InternalLink
          link="buyback"
          text="BuyBack"
          toggle={toggle}
        />
        <ComingSoon text="GalaxySwap" />

        <ExternalLink
          href="https://intergalacticmerch.myshopify.com/"
          text="Galaxy Merchandise"
        />
        <ComingSoon text="Nebula Launchpad" />
      </div>

      {/* Documentation */}
      <p className="sidebar-header">Documentation</p>
      <div className="sidebar-group">
        <InternalLink link="whitepaper" text="Whitepaper V1" toggle={toggle} />
        <InternalLink
          link="migrationdocumentation"
          text="Migration Docs"
          toggle={toggle}
        />
        <div className="sidebar-links">
          <button
            className="sidebar-text"
            onClick={() => {
              setTermsModal(true);
            }}
          >
            Terms & Conditions
          </button>
          {termsModal && (
            <Modal
              modalContent={modalContent.termsModal}
              closeModal={setTermsModal}
            />
          )}
        </div>
        <div className="sidebar-links">
          <button
            className="sidebar-text"
            onClick={() => {
              setPrivacyModal(true);
            }}
          >
            Privacy & Policy
          </button>
          {privacyModal && (
            <Modal
              modalContent={modalContent.privacyModal}
              closeModal={setPrivacyModal}
            />
          )}
        </div>
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
        <ExternalLink
          href="https://www.facebook.com/GalaxyProtocol/"
          text="Facebook"
        />
        <ExternalLink
          href="https://www.instagram.com/safegalaxytoken/?igshid=jr936k6emyet"
          text="Instagram"
        />
        <ExternalLink
          href="https://www.reddit.com/r/GalaxyProtocolx/"
          text="Reddit"
        />
        <ExternalLink
          href="https://www.tiktok.com/@safegalaxytoken?"
          text="Tiktok"
        />
      </div>

      {/* About */}
      <p className="sidebar-header">About</p>

      <div className="sidebar-group">
        <InternalLink link="aboutus" text="About Us" toggle={toggle} />
        <InternalLink link="meetourteam" text="Meet Our Team" toggle={toggle} />
        <InternalLink link="faq" text="FAQ" toggle={toggle} />
        {/* <InternalLink link="presskit" text="Presskit" toggle={toggle} /> */}
      </div>
    </SidebarContainer>
  );
}

export default Sidebar;
