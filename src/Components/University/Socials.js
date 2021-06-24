import React from 'react';
import Discord from '../../Assets/Discord-icon-gp.png';
import Telegram from '../../Assets/Telegram-icon-gp.png';
import Twitter from '../../Assets/Twitter-icon-gp.png';
import Facebook from '../../Assets/Facebook-icon-gp.png';
import Instagram from '../../Assets/Instagram-icon-gp.png';
import Reddit from '../../Assets/Reddit-icon-gp.png';
import Tiktok from '../../Assets/Tiktok-icon-gp.png';

const SocialIcon = ({ social }) => {
  return (
    <img src={social} alt={`${social}`} className="university-socials__icon" />
  );
};

const Socials = () => {
  return (
    <div className="mainContainer university-socials">
      <h3>
        <span className="university-socials__bold-text">The Galaxy</span>{' '}
        <span className="university-socials__text">is social</span>
      </h3>
      <div className="university-socials__icon-container">
        <SocialIcon social={Discord} />
        <SocialIcon social={Telegram} />
        <SocialIcon social={Twitter} />
        <SocialIcon social={Facebook} />
        <SocialIcon social={Instagram} />
        <SocialIcon social={Reddit} />
        <SocialIcon social={Tiktok} />
      </div>
    </div>
  );
};

export default Socials;
