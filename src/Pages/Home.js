import React from 'react';
import '../Styles/Global.css';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer';
import Generation from '../Components/Home/Generation';
import Destiny from '../Components/Home/Destiny';
import Banners from '../Components/Home/Banners';

function Home() {
  return (
    <div>
      <Navbar />
      <div className='space' />
      <Generation />
      <div className='space' />
      <div className='space' />
      <Destiny />
      <div className='space' />
      <div className='space' />
      <Banners />
      <div className='space' />
      <Footer />
    </div>
  );
}

export default Home;