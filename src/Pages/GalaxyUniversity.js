import React, {useState} from 'react';
import Header from '../Components/University/Header';
import GradientBar from '../Components/University/GradientBar';
import Partners from '../Components/University/Partners';
import ArticleGallery from '../Components/University/ArticleGallery.js';
import VideosCarousel from '../Components/University/VideoCarousel';
import Socials from '../Components/University/Socials';

const GalaxyUniversity = () => {

  const [articleFilters, setArticleFilters] = useState([])

  const handler = (filterType) => {
     let filterWord = filterType[0].toLowerCase()
    //  If the category to filter by already exists in the filtering array
     if(articleFilters.indexOf(filterWord) !== -1){
      //  Find it's index in the array
       const indexOfWordInstance = articleFilters.findIndex(word => word === filterWord)
       // remove it from the array
       articleFilters.splice(indexOfWordInstance, 1)
      //  Hold the new array with out it in a copy

       const filterCopy = articleFilters
      //  Set the fitler state to allow a re-render on item removal
       setArticleFilters([...filterCopy])
    // Otherwise, add it. 
     } else setArticleFilters([...articleFilters, filterWord])
  }
  return (
    <div>
      <Header />
      <GradientBar 
      handler={handler}
      articleFilters={articleFilters}/>
      <ArticleGallery 
      articleFilters={articleFilters}
      />
      <Socials />
      <Partners />
      <VideosCarousel />
    </div>
  );
};

export default GalaxyUniversity;
