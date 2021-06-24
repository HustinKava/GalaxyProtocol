// import React, { useState } from 'react'
import PositionHero from '../Components/PositionDetails/PositionHero';
import PositionInfo from '../Components/PositionDetails/PositionInfo';

const PositionDetails = () => {
  return (
    <div>
      <div className="mainContainer">
        <PositionHero />
        <PositionInfo />
      </div>
    </div>
  );
};

export default PositionDetails;
