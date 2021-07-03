import React from 'react';
import Header from '../Components/University/Header';
import GradientBar from '../Components/University/GradientBar';
import Partners from '../Components/University/Partners';
import ArticleGallery from '../Components/University/ArticleGallery.js';
import VideosCarousel from '../Components/University/VideoCarousel';
import Socials from '../Components/University/Socials';

const GalaxyUniversity = () => {
  return (
    <div>
      <Header />
      <GradientBar />
      <ArticleGallery />
      <Socials />
      <Partners />
      <VideosCarousel />
    </div>
  );
};

export default GalaxyUniversity;
