import React from 'react';
import Discord from '../../Assets/socialIcons/Discord-icon-circle.png';
import Telegram from '../../Assets/socialIcons/Telegram-icon-circle.png';
import Twitter from '../../Assets/socialIcons/Twitter-icon-circle.png';
import Facebook from '../../Assets/socialIcons/Facebook-icon-circle.png';
import Instagram from '../../Assets/socialIcons/Instagram-icon-circle.png';
import Reddit from '../../Assets/socialIcons/Reddit-icon-circle.png';
import Tiktok from '../../Assets/socialIcons/Tiktok-icon-circle.png';

const SocialIconLink = ({ icon, alt, href }) => {
  return (
    <a
      href={`${href}`}
      target="_blank"
      rel="noopener noreferrer"
      className="footer-column__link"
    >
      <img src={icon} alt={alt} className="university-socials__icon" />{' '}
    </a>
  );
};

const Socials = () => {
  return (
    <div className="mainContainer university-socials">
      <h3>
        <span className="uni-bold-text university-socials__text">
          The Galaxy
        </span>{' '}
        <span className="uni-text university-socials__text">is social</span>
      </h3>
      <div className="university-socials__icon-container">
        <SocialIconLink
          icon={Discord}
          alt="discord"
          href="https://discord.com/invite/dq7m6R7UAz"
        />
        <SocialIconLink
          icon={Telegram}
          alt="telegram"
          href="https://t.me/GalaxyProtocolOfficialTG"
        />
        <SocialIconLink
          icon={Twitter}
          alt="twitter"
          href="https://twitter.com/GalaxyProtocol"
        />
        <SocialIconLink
          icon={Facebook}
          alt="facebook"
          href="https://www.facebook.com/GalaxyProtocol/"
        />
        <SocialIconLink
          icon={Instagram}
          alt="instagram"
          href="https://www.instagram.com/safegalaxytoken/?igshid=jr936k6emyet"
        />
        <SocialIconLink
          icon={Reddit}
          alt="reddit"
          href="https://www.reddit.com/r/GalaxyProtocolx/"
        />
        <SocialIconLink
          icon={Tiktok}
          alt="tiktok"
          href="https://www.tiktok.com/@safegalaxytoken?"
        />
      </div>
    </div>
  );
};

export default Socials;
