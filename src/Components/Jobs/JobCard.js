import React from 'react';
// import { Container } from '@material-ui/core';
import { NavLink } from 'react-router-dom';

function JobCard() {
  return (
    <div className="job-card">
      <div className="postingType">
        <div className="postingType__text">Remote</div>
      </div>

      <div className="job-info">
        <h2 className="job-info__title">Job title here</h2>
        <p className="job-info__desc">
          We’re in search of a marketing specialist to join our team! In this
          role, you’ll deliver impactful storytelling across various digital
          platforms.
        </p>
      </div>

      <div className="learnMore">
        <NavLink to="/positionDetails" className="learnMore__link">
          <p className="learnMore__inner">Learn more</p>
        </NavLink>
      </div>
    </div>
  );
}

export default JobCard;
