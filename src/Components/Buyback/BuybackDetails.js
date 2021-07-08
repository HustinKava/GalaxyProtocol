import React from 'react';

const BuybackDetails = () => {
  const Detail = ({ number, text }) => {
    return (
      <div className="buyback__detail">
        <div className="buyback__circled-number">{number}</div>
        <div>{text}</div>
      </div>
    );
  };

  return (
    <div className="buyback__details-list-container">
      <div className="buyback__details-list">
        <Detail
          number="1"
          text="To take part in the buyback you must hold SAFEGALAXY in your wallet."
        />
        <Detail
          number="2"
          text="Connect web3 wallet and check that balances are correct."
        />
        <Detail number="3" text="Click Redeem." />
        <Detail number="4" text="Receive GALAXIA and smile." />
      </div>
    </div>
  );
};

export default BuybackDetails;
