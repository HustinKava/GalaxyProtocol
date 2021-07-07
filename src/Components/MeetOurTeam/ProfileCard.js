import React from 'react';
import Logo3D from '../../Assets/team/Logo-3D-small.png';
import LinkedInLogo from '../../Assets/socialIcons/Linkedin-logo-full.png';
import Kal from '../../Assets/team/Kal-tongue-out.png';

const ProfileCard = ({ name, jobTitle, image, linkedIn, alt }) => {
  return (
    <div className="profile-card">
      <div className="profile-card__pic-container">
        <div className="profile-card__text">
          <div className="profile-card__name">{name}</div>
          <div className="profile-card__job-title">{jobTitle}</div>
        </div>
        {image ? (
          <img src={image} alt={name} className="profile-card__image" />
        ) : name === 'Kal' ? (
          <div className="profile-card__logo-3d-container">
            <img src={Kal} alt={name} className="profile-card__logo-3d" />
          </div>
        ) : (
          <div className="profile-card__logo-3d-container">
            <img src={Logo3D} alt={name} className="profile-card__logo-3d" />
          </div>
        )}
      </div>
      {linkedIn ? (
        <a href={linkedIn} target="_blank" rel="noopener noreferrer">
          <img
            src={LinkedInLogo}
            alt={alt}
            className="profile-card__linkedIn"
          ></img>
        </a>
      ) : null}
    </div>
  );
};

export default ProfileCard;
