import React from 'react';
import Footer from '../Components/Footer';
import Generation from '../Components/Home/Generation';
import Destiny from '../Components/Home/Destiny';
import Banners from '../Components/Home/Banners';

function Home() {
  return (
    <div>
      <Generation />
      <Destiny />
      <Banners />
      <Footer />
    </div>
  );
}

export default Home;
