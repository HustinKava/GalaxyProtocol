import React from 'react';
import ComingSoonBadge from '../../Assets/customButtons/coming-soon-badge.png';

const UseGalaxySwap = () => {

  const ComingSoon = ({ galaxy, swap }) => {
    return (
      <div className="comingSoonNav">
        <div className="galaxyswap-button galaxyswap-text">
          <p className="nav-galaxy-1 coming">{galaxy}</p>
          <p className="nav-galaxy-2 coming">{swap}</p>
        </div>
        <img
          src={ComingSoonBadge}
          alt={`${galaxy} coming soon`}
          className="galaxswap-comingsoon"
        />
      </div>
    );
  };

  return (
    <div>
        <ComingSoon galaxy="Galaxy" swap="Swap" />
    </div>
  );
};

export default UseGalaxySwap;
