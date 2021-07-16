import React from 'react';
import ArticleLevel from './ArticleLevel';
import CategoryBadge from './ArticleCategoryBadge';

function ArticleCard({
  articleName,
  level,
  length,
  link,
  image,
  datePosted,
  categories,
}) {
  // let categories = ['Tokens', 'Blockchain', 'Tech', 'DeFi'];
  let timeSincePosting = '';

  // To calculate time elapsed since the article was posted
  const dateSincePosted = () => {
    let todaysDate = new Date();
    let timeDifference = todaysDate.getTime() - datePosted.getTime();
    let differenceIndays = timeDifference / (1000 * 3600 * 24);
    let roundUptime = Math.floor(differenceIndays);

    if (roundUptime > 7) {
      let timeGap = roundUptime / 7;
      let numOfWeeks = Math.floor(timeGap);

      timeSincePosting = numOfWeeks + `w ago`;
    } else {
      timeSincePosting = roundUptime + `d ago`;
    }
  };

  dateSincePosted();

  // To limit the number of badge categories that can be displayed
  let sumOfBadges = `+ ${categories.length - 3}`;

  return (
    <div className="article-card">
      <div className="article-card-content">
        {/* Main image in Article card */}
        <a href={link} className="articleGalleryLink">
          <div className="article-image-category-container">
            <div className="article-card-image-div">
              <img src={image} alt="" className="article-card-image"></img>
            </div>
            <div className="article-card-badge-container">
              {categories.map((category, index) => {
                if (index < 3) {
                  return <CategoryBadge
                    key={index}
                    categoryType={category[0].toUpperCase() + category.substring(1)} />
                } else {
                  return <CategoryBadge
                    key={index}
                    categoryType={sumOfBadges} />

                }
              }
              )
              }
            </div>
          </div>
        </a>

        <div className="article-card-details-container">
          <a href={link} className="articleGalleryLink">
            <p className="article-card-title">{articleName}</p>
          </a>
        </div>

        <hr></hr>

        <div className="article-card-timeframe-container">
          <p className="article-card-posted">{timeSincePosting}</p>
          {/* <div className="article-card-length"> &#128343;{length}m</div> */}
          <ArticleLevel level={level} />
        </div>
      </div>
    </div>
  );
}

export default ArticleCard;
