import React from 'react';
import CoinMarketCap from '../../Assets/coinmarketcap-partner-logo-01.png';
import PancakeSwap from '../../Assets/pancakeswap-partner-logo-02.png';
import MetaMask from '../../Assets/metamask-partner-logo-03.png';
import CoinGecko from '../../Assets/coingecko-partner-logo-04.png';
import CoinTiger from '../../Assets/cointiger-partner-logo-05.png';
import ProBit from '../../Assets/probit-partner-logo-04.png';
import BscScan from '../../Assets/bscscan-partner-logo-07.png';
import SwftBlockchain from '../../Assets/swft-partner-logo-08.png';
import TrustWallet from '../../Assets/trustwallet-partner-logo-09.png';

const PartnerLogo = ({ partnerName, alt }) => {
  return <img src={partnerName} alt={alt} className="uni-partners__logo" />;
};

const Partners = () => {
  return (
    <div className="uni-partners">
      <div className="uni-partners__column">
        <PartnerLogo partnerName={CoinMarketCap} alt="CoinMarketCap" />
        <PartnerLogo partnerName={PancakeSwap} alt="PancakeSwap" />
        <PartnerLogo partnerName={MetaMask} alt="" />
      </div>
      <div className="uni-partners__column">
        <PartnerLogo partnerName={CoinGecko} alt="CoinGecko" />
        <PartnerLogo partnerName={CoinTiger} alt="CoinTiger" />
        <PartnerLogo partnerName={ProBit} alt="ProBit" />
      </div>
      <div className="uni-partners__column">
        <PartnerLogo partnerName={BscScan} alt="BscScan" />
        <PartnerLogo partnerName={SwftBlockchain} alt="SwftBlockchain" />
        <PartnerLogo partnerName={TrustWallet} alt="TrustWallet" />
      </div>
    </div>
  );
};

export default Partners;
