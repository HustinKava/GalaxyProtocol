import React from 'react';
// placeholders until we get the assets
import Discord from '../../Assets/Trade-icon.png';
import Telegram from '../../Assets/Trade-icon.png';
import Twitter from '../../Assets/Trade-icon.png';
import Facebook from '../../Assets/Trade-icon.png';
import Instagram from '../../Assets/Trade-icon.png';
import Reddit from '../../Assets/Trade-icon.png';
import Tiktok from '../../Assets/Trade-icon.png';

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
