import React from 'react';
import BuybackDetails from '../Components/Buyback/BuybackDetails';
import BuybackLowerContainer from '../Components/Buyback/BuybackLowerContainer';

const Buyback = () => {
  return (
    <div className="buyback">
      <button className="buyback__connect-wallet-button">Connect wallet</button>
      <div className="buyback__header">Buyback</div>
      <div className="buyback__large-container">
        <BuybackDetails />
        <BuybackLowerContainer />
      </div>
    </div>
  );
};

export default Buyback;
