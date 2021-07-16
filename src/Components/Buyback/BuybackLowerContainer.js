import React from 'react';
import { BigNumber } from 'bignumber.js';

const BuybackLowerContainer = ({ balances, onRedeem, redeemLabel }) => {
  const PriceInfo = ({ text, integer }) => {
    return (
      <div className="buyback__price-info">
        <div className="buyback__price-info-text">{`${text}`}:</div>
        <div className="buyback__price-info-integer">{`${integer}`}</div>
      </div>
    );
  };

  const formatBalance = (balance, decimal) => {
    return new BigNumber(balance).div(new BigNumber(10 ** decimal)).decimalPlaces(5).toString();
  }

  return (
    <div className="buyback__lower-container">
      <div className="buyback__price-info-container">
        <PriceInfo text="Amount of SafeGalaxy" integer={ formatBalance(balances[0], 9) } />
        <PriceInfo text="Value of SafeGalaxy" integer={ '$ ' + formatBalance(balances[1], 18) } />
        <PriceInfo text="Amount of GALAXIA you receive" integer={ formatBalance(balances[2], 18) } />
      </div>

      <button className="buyback__redeem-button" onClick={onRedeem} >{ redeemLabel }</button>
    </div>
  );
};

export default BuybackLowerContainer;
