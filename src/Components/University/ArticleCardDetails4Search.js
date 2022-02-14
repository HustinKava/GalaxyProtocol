import React from 'react';
import { Link } from 'react-router-dom';

function ArticleCardDetails({ article }) {
  const { datePosted, link, title, level } = article;
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

  return (
    <>
      <div className="article-card-details-container">
        <Link to={`/articles/${link}`} className="articleGalleryLink">
          <p className="article-card-title">{title}</p>
        </Link>
      </div>

      <hr></hr>

      <div className="article-card-timeframe-container">
        <p className="article-card-posted">{timeSincePosting}</p>
        {/* <div className="article-card-length"> &#128343;{length}m</div> */}
      </div>
      <div className="level-container">
        <div className={`article-level article-level--${level}`}>
          &bull; {level}
        </div>
      </div>
    </>
  );
}

export default ArticleCardDetails;
