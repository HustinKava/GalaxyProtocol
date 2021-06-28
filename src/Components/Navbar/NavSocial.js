import React from 'react';
import TwitterLogo from '../../Assets/Twitter-icon.png';
import InstagramLogo from '../../Assets/Instagram-icon.png';
import LinkedInLogo from '../../Assets/Linkedin-icon.png';

const SocialIconLink = ({ href, logo, alt }) => {
  return (
    <a href={`${href}`} target="_blank" rel="noopener noreferrer">
      <img src={logo} alt={`${alt}`} className="socialIcon"></img>
    </a>
  );
};

const Navbar = ({ toggle }) => {
  return (
    <div>
      <SocialIconLink href="" logo={LinkedInLogo} alt="Linkedin social icon" />
      <SocialIconLink
        href="https://twitter.com/SafeGalaxyToken"
        logo={TwitterLogo}
        alt="twitter social icon"
      />
      <SocialIconLink
        href="https://www.instagram.com/safegalaxytoken"
        logo={InstagramLogo}
        alt="Instagram social icon"
      />
    </div>
  );
};

export default Navbar;
