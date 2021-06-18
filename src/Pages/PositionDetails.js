// import React, { useState } from 'react'
import Footer from '../Components/Footer';
import PositionHero from '../Components/PositionDetails/PositionHero';
import PositionInfo from '../Components/PositionDetails/PositionInfo';

const PositionDetails = () => {
  return (
    <div>
      <div className="mainContainer">
        <PositionHero />
        <PositionInfo />
      </div>
      <Footer />
    </div>
  );
};

export default PositionDetails;
