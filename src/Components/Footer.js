import React from 'react';
import Grid from '@material-ui/core/Grid';
import { NavLink } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import Logo from '../Assets/logo-white_1_25.png';

import ScrollIntoView from './ScrollIntoView';
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
              {/* <NavLink to='/safegalaxy' className='footLinks'>     */}
              <p className="footer-column__text">SafeGalaxy</p>
              {/* </NavLink> */}
              {/* <NavLink to='/galaxyswap' className='footLinks'> */}
              <p className="footer-column__text">GalaxySwap</p>
              {/* </NavLink> */}
              {/* <NavLink to='/galaxystation' className='footLinks'> */}
              <p className="footer-column__text">GalaxyStation</p>
              {/* </NavLink> */}
              {/* <NavLink to='/nebulalaunchpad' className='footLinks'> */}
              <p className="footer-column__text">Nebula Launchpad</p>
              {/* </NavLink> */}
              <Link to="/#footerUniversity" className="footer-column__link">
                <p className="footer-column__text">Galaxy University</p>
              </Link>
              <Link to="/#footerMerchandise" className="footer-column__link">
                <p className="footer-column__text">Galaxy Merchandise</p>
              </Link>
            </div>
          </Grid>

          <Grid item xs={12} sm={3} md={3} lg={2}>
            <div className="footer-column">
              <hr className="footer-column__divider" />
              <p className="footer-column__heading">Developers</p>
              <NavLink to="/documentation" className="footer-column__link">
                <p className="footer-column__text">Documentation</p>
              </NavLink>
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
              {/* <NavLink to='/aboutus' className='footLinks'> */}
              <p className="footer-column__text">About Us</p>
              {/* </NavLink> */}
              {/* <NavLink to='/meetourteam' className='footLinks'> */}
              <p className="footer-column__text">Meet Our Team</p>
              {/* </NavLink> */}
              {/* <NavLink to="/jobs" className="footer-column__link">
                <p className="footer-column__text">Jobs</p>
              </NavLink> */}
              <NavLink to="/faq" className="footer-column__link">
                <p className="footer-column__text">FAQ</p>
              </NavLink>
              {/* <NavLink to='/presskit' className='footLinks'> */}
              <p className="footer-column__text">Presskit</p>
              {/* </NavLink> */}
            </div>
          </Grid>

          <Grid item xs={12} sm={3} md={3} lg={2}>
            <div className="footer-column">
              <hr className="footer-column__divider" />
              <p className="footer-column__heading">Community</p>
              <Link to="/#footerDiscord" className="footer-column__link">
                <p className="footer-column__text">Discord</p>
              </Link>
              <Link to="/#footerTelegram" className="footer-column__link">
                <p className="footer-column__text">Telegram</p>
              </Link>
              {/* <Link to='/footerTwitter' className='footLinks'> */}
              <p className="footer-column__text">Twitter</p>
              {/* </Link> */}
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
