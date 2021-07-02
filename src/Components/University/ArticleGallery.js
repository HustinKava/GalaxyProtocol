import ArticleCard from './ArticleCard';
import React from 'react';

// Images
import GPFarming from '../../Assets/GP-Farming-slice.png'
import GPFlash from '../../Assets/GP-Flash-slice.png'
import GPETCvsBTC from '../../Assets/GP-ETHvsBTC-slice.png'
import BeginnerChart from '../../Assets/GP-beginnerchart-slice.png'
import ChartPatterns from '../../Assets/GP-ChartPatterns-slice.png'

// import { NavLink } from 'react-router-dom';

// const InternalLink = ({ link, text }) => {
//   return (
//     <NavLink to={`/${link}`} className="navLink">
//       <p className="navText">{text}</p>
//     </NavLink>
//   );
// };


function ArticleGallery() {
  return (
    <>
      <div className="articleGalleryContainer">
        <div className="article-gallery">
          {/* first row of article cards */}
          <div className="article-gallery-column">
            <ArticleCard
              articleName={'Chart Patterns'}
              link={'#ChartPatterns'}
              level={'Intermediate'}
              length={10}
              image={ChartPatterns}
            />
          </div>

          <div className="article-gallery-column">
            <ArticleCard
              articleName={'Chart Reading for Beginners'}
              link={'#ChartReading'}
              level={'Advanced'}
              length={10}
              image={BeginnerChart}
            />
          </div>

          <div className="article-gallery-column">
            <ArticleCard
              articleName={'ETH vs BTC'}
              link={'#ETHvsBTC'}
              level={'Advanced'}
              length={10}
              image={GPETCvsBTC}
            />
          </div>

          <div className="article-gallery-column">
            <ArticleCard
              articleName={'Farming'}
              link={'#Farming'}
              level={'Beginner'}
              length={10}
            />
          </div>

          {/* second row of article cards */}
          <div className="article-gallery-column">
            <ArticleCard
              articleName={'Impermanent Loss'}
              link={'#ImpermanentLoss'}
              level={'Beginner'}
              length={10}
            />
          </div>

          <div className="article-gallery-column">
            <ArticleCard
              articleName={'Liquidity and LP Tokens'}
              link={'#LiquidityandLPTokens'}
              level={'Beginner'}
              length={10}
            />
          </div>

          <div className="article-gallery-column">
            <ArticleCard
              articleName={'Staking'}
              link={'#Staking'}
              level={'Beginner'}
              length={10}
            />
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
