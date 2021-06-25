import React from 'react';
// import Footer from '../Components/Footer';
import Header from '../Components/University/Header';

import Partners from '../Components/University/Partners';
// import { Box } from '@material-ui/core';
import VideosCarousel from '../Components/University/VideoCarousel';

const GalaxyUniversity = () => {
  return (
    <div>
    
      <Header />
      <VideosCarousel/>
      <Partners />
    
    </div>  
  );

};

export default GalaxyUniversity;
