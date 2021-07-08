import React from 'react';

const BuybackLowerContainer = () => {
  const PriceInfo = ({ text, integer }) => {
    return (
      <div className="buyback__price-info">
        <div className="buyback__price-info-text">{`${text}`}:</div>
        <div className="buyback__price-info-integer">{`${integer}`}</div>
      </div>
    );
  };

  return (
    <div className="buyback__lower-container">
      <div className="buyback__price-info-container">
        <PriceInfo text="Amount of SafeGalaxy" integer="10,000,000,000" />

        <PriceInfo text="Value of SafeGalaxy" integer="$100" />

        <PriceInfo text="Amount of GALAXIA you receive" integer="$115" />
      </div>

      <button className="buyback__redeem-button">REDEEM GALAXIA</button>
    </div>
  );
};

export default BuybackLowerContainer;
