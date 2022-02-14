import React from 'react';
import { Link } from 'react-router-dom';

function ArticleCard({ article }) {
  const { link, imageSlice } = article;
  // const { link, imageSlice, categories } = article;
  // To limit the number of badge categories that can be displayed
  // let sumOfBadges = `+ ${categories.length - 3}`;

  return (
    <>
      {/* Main image in Article card */}
      <Link to={`/articles/${link}`} className="articleGalleryLink">
        <div className="article-image-category-container">
          <div className="article-card-image-div">
            <img src={imageSlice} alt="" className="article-card-image"></img>
          </div>
          <div className="article-card-badge-container">
            {/* {categories.map((category, index) => {
              if (index < 3) {
                return (
                  <p key={index} className="category-badge">
                    {category}
                  </p>
                );
              } else {
                return (
                  <p key={index} className="category-badge">
                    {sumOfBadges}
                  </p>
                );
              }
            })} */}
          </div>
        </div>
      </Link>
    </>
  );
}

export default ArticleCard;
