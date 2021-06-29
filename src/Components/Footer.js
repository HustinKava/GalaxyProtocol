import React from 'react';
import Grid from '@material-ui/core/Grid';
import { NavLink } from 'react-router-dom';
import Logo from '../Assets/logo-white_1_25.png';
import ComingSoonBadge from '../Assets/coming-soon-badge.png';
import ScrollIntoView from './ScrollIntoView';

const ExternalLink = ({ href, text }) => {
  return (
    <a
      href={`${href}`}
      target="_blank"
      rel="noopener noreferrer"
      className="footer-column__link"
    >
      <p className="footer-column__text">{text}</p>
    </a>
  );
};

const InternalLink = ({ link, text }) => {
  return (
    <NavLink to={`/${link}`} className="footer-column__link">
      <p className="footer-column__text">{text}</p>
    </NavLink>
  );
};

const ComingSoon = ({ text }) => {
  return (
    <div className="footer-column__coming-soon-container">
      <p className="footer-column__text">{text}</p>
      <img
        src={ComingSoonBadge}
        alt={`${text} coming soon`}
        className="footer-column__coming-soon"
      />
    </div>
  );
};

function Footer() {
  return (
    <div>
      <ScrollIntoView>
        <Grid container spacing={1} className="footerSectionContainer">
          {/* Footer company logo and name */}
          <Grid item xs={12} sm={12} md={12} lg={4}>
            <div className="footerLogoAndAddress">
              <img src={Logo} alt="Logo" className="footerLogo" />
              <p className="footerAddress">Country name here </p>
              <p className="footerAddress">Address line here, ZIP CODE</p>
            </div>
          </Grid>

          <Grid item xs={12} sm={3} md={3} lg={2}>
            {/* Footer items */}
            <div className="footer-column">
              <hr className="footer-column__divider" />
              <p className="footer-column__heading">Products</p>
              <ExternalLink href="https://safegalaxy.net" text="SafeGalaxy" />
              {/* <ExternalLink href="#" text="GalaxySwap" /> */}
              <ComingSoon text="GalaxySwap" />
              <InternalLink link="galaxyuniversity" text="Galaxy University" />
              {/* <ExternalLink href="#" text="Nebula Launchpad" /> */}
              <ComingSoon text="Nebula Launchpad" />
              <ExternalLink href="#" text="Galaxy Merchandise" />
            </div>
          </Grid>

          <Grid item xs={12} sm={3} md={3} lg={2}>
            <div className="footer-column">
              <hr className="footer-column__divider" />
              <p className="footer-column__heading">Developers</p>
              {/* <NavLink to='/whitepaperv1' className='footLinks'> */}
              <p className="footer-column__text">Whitepaper V1</p>
              {/* </NavLink> */}
              {/* <NavLink to='/audit' className='footLinks'> */}
              <p className="footer-column__text">Audit</p>
              {/* </NavLink> */}
              <NavLink
                to="/partnershipoverview"
                className="footer-column__link"
              >
                <p className="footer-column__text">Partnership Overview</p>
              </NavLink>
              {/* <NavLink to='/terms&conditions' className='footLinks'> */}
              <p className="footer-column__text">Terms & Conditions</p>
              {/* </NavLink> */}
              {/* <NavLink to='/privacy&policy' className='footLinks'> */}
              <p className="footer-column__text">Privacy & Policy</p>
              {/* </NavLink> */}
            </div>
          </Grid>

          <Grid item xs={12} sm={3} md={3} lg={2}>
            <div className="footer-column">
              <hr className="footer-column__divider" />
              <p className="footer-column__heading">About</p>
              <InternalLink link="aboutus" text="About Us" />
              <InternalLink link="meetourteam" text="Meet Our Team" />
              {/* <InternalLink link="jobs" text="Jobs" /> */}
              <InternalLink link="faq" text="FAQ" />
              {/* <InternalLink link="presskit" text="Presskit" /> */}
            </div>
          </Grid>

          <Grid item xs={12} sm={3} md={3} lg={2}>
            <div className="footer-column">
              <hr className="footer-column__divider" />
              <p className="footer-column__heading">Community</p>
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
          </Grid>
        </Grid>
      </ScrollIntoView>
      <p className="footer-copyright">
        Copyright © {new Date().getFullYear()} Cryptonite Technologies Ltd
      </p>
    </div>
  );
}

export default Footer;
