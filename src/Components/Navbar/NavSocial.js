import React from 'react';
import TwitterLogo from '../../Assets/Twitter-icon.png';
import TelegramLogo from '../../Assets/Telegram-icon-nocircle.png';
import DiscordLogo from '../../Assets/Discord-icon-nocircle.png';

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
      <SocialIconLink
        href="https://twitter.com/GalaxyProtocol"
        logo={TwitterLogo}
        alt="twitter social icon"
      />
      <SocialIconLink 
      href="https://t.me/GalaxyProtocolOfficialTG" 
      logo={TelegramLogo} 
      alt="telegram social icon" 
      />
      <SocialIconLink
        href="https://discord.com/invite/dq7m6R7UAz"
        logo={DiscordLogo}
        alt="discord social icon"
      />
    </div>
  );
};

export default Navbar;
