import ArticleCard from './ArticleCard';
import React from 'react';

// Images
import GPFlash from '../../Assets/GP-Flash-slice.png'
// import GPETCvsBTC from '../../Assets/GP-ETHvsBTC-slice.png'
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
              articleName={'Crypto Wallets Explained'}
              link={'#CryptoWallets'}
              level={'Beginner'}
              length={10}
              image={''}
            />
          </div>

          <div className="article-gallery-column">
            <ArticleCard
              articleName={'ETH vs BTC'}
              link={'#ETHvsBTC'}
              level={'Beginner'}
              // length={10}
              // image={}
            />
          </div>

          <div className="article-gallery-column">
            <ArticleCard
              articleName={'Flash Loans'}
              link={'#FlashLoans'}
              level={'Intermediate'}
              length={10}
              image={GPFlash}
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
              level={'Advanced'}
              length={10}
            />
          </div>

          <div className="article-gallery-column">
            <ArticleCard
              articleName={'How to make your own NFTs'}
              link={'#OwnNFTs'}
              level={'Beginner'}
              length={10}
            />
          </div>

          <div className="article-gallery-column">
            <ArticleCard
              articleName={'Staking'}
              link={'#Staking'}
              level={'Intermediate'}
              length={10}
            />
          </div>

          <div className="article-gallery-column">
            <ArticleCard
              articleName={'Bridging'}
              link={'#Bridging'}
              level={'Beginner'}
              length={10} />
          </div>
        </div>
      </div>
    </>
  );
}

export default ArticleGallery;
