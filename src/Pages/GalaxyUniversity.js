import React from 'react';
import Header from '../Components/University/Header';
import GradientBar from '../Components/University/GradientBar';
import Partners from '../Components/University/Partners';
import VideosCarousel from '../Components/University/VideoCarousel';
import getProgress from '../Components/ProgressBar/getProgress';


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

export default getProgress(GalaxyUniversity);
