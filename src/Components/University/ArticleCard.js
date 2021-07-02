import React from 'react';
import ArticleLevel from './ArticleLevel';

function ArticleCard({ articleName, level, length, link, image }) {

    return (
        <div className="article-card">
            <div className="article-card-content">
                {/* Main image in Article card */}
                <a href={link} className="articleGalleryLink">
                    <div className="article-card-image-div">
                        <img src={image} alt="" className="article-card-image"></img>
                    </div>
                </a>

                <div className="article-card-details-container">
                    <a href={link} className="articleGalleryLink">
                        <p className="article-card-title">{articleName}</p>
                    </a>

                    <ArticleLevel
                        level={level} />
                </div>

        {/* <hr></hr> */}

        {/* <div className="article-card-timeframe-container">
                    <div className="article-card-length"> &#128343;{length}m</div>
                </div> */}
      </div>
    </div>
  );
}

export default ArticleCard;
