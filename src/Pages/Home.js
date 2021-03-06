import React from 'react';
import Generation from '../Components/Home/Generation';
import Destiny from '../Components/Home/Destiny';
import OpeningMessage from '../Components/Home/OpeningMessage';
import Banners from '../Components/Home/Banners';

function Home() {
  return (
    <div>
      <Generation />
      <Destiny />
      <OpeningMessage />
      <Banners />
    </div>
  );
}

export default Home;
