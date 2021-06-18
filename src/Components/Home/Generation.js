import React from 'react';
import Background from '../../Assets/GP-Emblem.png';

const Generation = () => {
  return (
    <div className="home-sub-container gen">
      <img src={Background} alt="background" className="gen__background" />
      <h1 className="gen__header">
        The next Generation <br /> De-fi protocol
      </h1>
      <p className="gen__text">Create, trade, learn & interact</p>
      <div className="gen__buttons-container">
        <button className="gen-btn gen-btn--1">Learn</button>
        <br className="responsiveButtons" />
        <button className="gen-btn gen-btn--2">Read Documents</button>
      </div>
    </div>
  );
};

export default Generation;
