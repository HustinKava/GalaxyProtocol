import React from 'react';
import Generation from '../Components/Home/Generation';
import Destiny from '../Components/Home/Destiny';
import Banners from '../Components/Home/Banners';
import getProgress from '../Components/ProgressBar/getProgress';

function Home() {
  return (
    <div>
      <Generation />
      <Destiny />
      <Banners />
    </div>
  );
}

export default getProgress(Home);
