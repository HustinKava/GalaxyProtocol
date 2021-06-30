import React from 'react';

const AboutUsInfoCard = ({ content }) => {
  return (
    <div className="about-us-info-card">
      <img
        src={content.image}
        alt={`${content.title}`}
        className={`about-us-info-card__image-${content.title}`}
      />
      <div className="about-us-info-card__text-container">
        <h3 className="about-us-h3">{content.title}</h3>
        <p className="about-us-info-card__info-text">{content.infoText}</p>
      </div>
    </div>
  );
};

export default AboutUsInfoCard;
