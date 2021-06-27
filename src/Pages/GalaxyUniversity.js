import React from 'react';
// import Footer from '../Components/Footer';
import Header from '../Components/University/Header';
import GradientBar from '../Components/University/GradientBar';

import Partners from '../Components/University/Partners';
// import { Box } from '@material-ui/core';
import VideosCarousel from '../Components/University/VideoCarousel';

const GalaxyUniversity = () => {
  return (
    <div>
    
      <Header />
      <GradientBar />
      <VideosCarousel/>
      <Partners />
    
    </div>  
  );

};

export default GalaxyUniversity;
