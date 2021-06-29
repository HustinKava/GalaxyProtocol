import ArticleCard from './ArticleCard';
import React from 'react';

function ArticleGallery() {
  return (
    <>
    <div className="articleGalleryContainer">
      <div className="article-gallery">
        {/* first row of article cards */}
        <div className="article-gallery-column">
        <ArticleCard />
        </div>
        <div className="article-gallery-column">
        <ArticleCard />
        </div>
        <div className="article-gallery-column">
        <ArticleCard />
        </div>
        <div className="article-gallery-column">
        <ArticleCard />
        </div>

        {/* second row of article cards */}
        <div className="article-gallery-column">
        <ArticleCard />
        </div>
        <div className="article-gallery-column">
        <ArticleCard />
        </div>
        <div className="article-gallery-column">
        <ArticleCard />
        </div>
        <div className="article-gallery-column">
        <ArticleCard />
        </div>
      </div>
    </div>
    </>
  );
}

export default ArticleGallery;
