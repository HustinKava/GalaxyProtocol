import React from 'react';
import '../Styles/Home.css';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer';
import Generation from '../Components/Home/Generation';
import Destiny from '../Components/Home/Destiny';
import Banners from '../Components/Home/Banners';
import Newsletter from '../Components/Home/Newsletter';

function Home() {
    return (
      <div className='background'>
          <Navbar/>
          <div className='space'/>
          <Generation/>
          <div className='space'/>
          <Destiny/>
          <div className='space'/>
          <Banners/>
          <div className='space'/>
          <Newsletter/>
          <div className='space'/>
          <Footer/>
          <div className='space'/>
      </div>
    );
  }
  
  export default Home;