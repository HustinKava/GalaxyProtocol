import ArticleCard from './ArticleCard4Search';
import React, { useState } from 'react';
import { articles } from '../../Pages/Articles4Search/articles';

function ArticleGallery({ articleFilters }) {
  // State to toggle showing the hidden articles
  const [showMore, setShowMore] = useState(false);
  const [totalArticlesDisplayed, setTotalArticlesDisplay] = useState(8);
  const [btnText, setBtnText] = useState('See all articles');
  //Creating an array of article objects

  // Using the array of categories as filter
  // Find articles that contain any of the filters chosen by the user
  const articlesInSelectedCategories = articles.filter((article) =>
    articleFilters.some((category) => article.categories.includes(category))
  );

  function toggleArticles() {
    // If the user hasn't selected any categories toggle between 8 and all articles
    if (!showMore && articlesInSelectedCategories.length === 0) {
      setShowMore(true);
      setTotalArticlesDisplay(articles.length);
      setBtnText('Hide articles');
    } else if (showMore && articlesInSelectedCategories.length === 0) {
      setTotalArticlesDisplay(8);
      setShowMore(false);
      setBtnText('See all articles');
    } else if (!showMore && articlesInSelectedCategories.length > 0) {
      setShowMore(true);
      setTotalArticlesDisplay(articlesInSelectedCategories.length);
      setBtnText('Hide articles');
    } else {
      setTotalArticlesDisplay(8);
      setShowMore(false);
      setBtnText('See all articles');
    }
  }

  return (
    <>
      <div className="articleGalleryContainer">
        <div className="totalArticlesContainer">
          {/* <p className="totalArticles">{articles.length} <span className="totalArticles--1">Articles</span></p> */}
        </div>
        <div className="article-gallery">
          {/* If the user has selected categories to filter by, show those */}
          {articlesInSelectedCategories.length === 0
            ? articles.slice(0, totalArticlesDisplayed).map((article) => (
                <ArticleCard key={article.id} article={article} />
                //Otherwise render the first eight
              ))
            : articlesInSelectedCategories.length > 0
            ? articlesInSelectedCategories
                .slice(0, totalArticlesDisplayed)
                .map((article) => (
                  <ArticleCard key={article.id} article={article} />
                ))
            : ''}
        </div>
      </div>
      <div className="moreBtnContainer">
        <button className="article-more-btn" onClick={toggleArticles}>
          {btnText}
        </button>
      </div>
    </>
  );
}

export default ArticleGallery;
