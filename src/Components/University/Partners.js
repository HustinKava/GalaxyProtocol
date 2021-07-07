import React from 'react';
import CoinMarketCap from '../../Assets/partners/coinmarketcap-partner-logo-01.png';
import PancakeSwap from '../../Assets/partners/pancakeswap-partner-logo-02.png';
import MetaMask from '../../Assets/partners/metamask-partner-logo-03.png';
import CoinGecko from '../../Assets/partners/coingecko-partner-logo-04.png';
import CoinTiger from '../../Assets/partners/cointiger-partner-logo-05.png';
// import ProBit from '../../Assets/partners/probit-partner-logo-04.png';
import BscScan from '../../Assets/partners/bscscan-partner-logo-07.png';
import SwftBlockchain from '../../Assets/partners/swft-partner-logo-08.png';
import TrustWallet from '../../Assets/partners/trustwallet-partner-logo-09.png';

const PartnerLogo = ({ partnerName, alt }) => {
  return <img src={partnerName} alt={alt} className="uni-partners__logo" />;
};

const Partners = () => {
  return (
    <div className="uni-partners-container">
      <div className="uni-partners">
        <PartnerLogo partnerName={CoinMarketCap} alt="CoinMarketCap" />
        <PartnerLogo partnerName={PancakeSwap} alt="PancakeSwap" />
        <PartnerLogo partnerName={MetaMask} alt="" />
        <PartnerLogo partnerName={CoinGecko} alt="CoinGecko" />
        <PartnerLogo partnerName={CoinTiger} alt="CoinTiger" />
        {/* <PartnerLogo partnerName={ProBit} alt="ProBit" /> */}
        <PartnerLogo partnerName={BscScan} alt="BscScan" />
        <PartnerLogo partnerName={SwftBlockchain} alt="SwftBlockchain" />
        <PartnerLogo partnerName={TrustWallet} alt="TrustWallet" />
      </div>
    </div>
  );
};

export default Partners;
