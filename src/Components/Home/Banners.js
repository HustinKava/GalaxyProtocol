import React from 'react';
import Swap from './BannerSwap';
import University from './BannerUniversity';
// import Newsletter from '../../Components/Home/Newsletter';
import Merch from './BannerMerch';
import Telegram from './BannerTelegram';
import Discord from './BannerDiscord';

const Banners = () => {
  return (
    <div className="home-sub-container">
      <Swap />
      <University />
      {/* <Newsletter /> */}
      <Merch />
      <Telegram />
      <Discord />
    </div>
  );
};

export default Banners;
