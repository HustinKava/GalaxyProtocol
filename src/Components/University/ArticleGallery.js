import ArticleCard from './ArticleCard';
import React, { useState } from 'react';

// Images
// import BeginnerChart from '../../Assets/articlesSlice/beginner-chart-slice.png';
import Bridging from '../../Assets/articlesSlice/bridging-slice.png';
// import ChartPatterns from '../../Assets/articlesSlice/chart-patterns-slice.png';
import CryptoWallets from '../../Assets/articlesSlice/crypto-wallets-slice.png';
import DltAndBlockchain from '../../Assets/articlesSlice/dlt-and-blockchain-slice.png';
import FlashLoans from '../../Assets/articlesSlice/flash-loans-slice.png';
import ImpermanentLoss from '../../Assets/articlesSlice/impermanent-loss-slice.png';
import OwnNFT from '../../Assets/articlesSlice/own-nft-slice.png';
import SmartContract from '../../Assets/articlesSlice/smart-contract-slice.png';
import EthVsBtc from '../../Assets/articlesSlice/eth-vs-btc-slice.png';
import Staking from '../../Assets/articlesSlice/staking-slice.png';
import HistoryOfDefi from '../../Assets/articlesSlice/history-defi-slice.png';
import CefiVsDefi from '../../Assets/articlesSlice/cefi-vs-defi-slice.png';
import SmartChain from '../../Assets/articlesSlice/binance-smart-slice.png';
import BeginnerChart from '../../Assets/articlesSlice/beginner-chart-slice.png';
import Slippage from '../../Assets/articlesSlice/slippage-slice.png';

function ArticleGallery({ articleFilters }) {
  // State to toggle showing the hidden articles
  const [showMore, setShowMore] = useState(false);
  const [totalArticlesDisplayed, setTotalArticlesDisplay] = useState(8);
  const [btnText, setBtnText] = useState('See all articles');
  //Creating an array of article objects
  const articles = [
    {
      articleName: 'Crypto Wallets Explained',
      link: '#CryptoWallets',
      level: 'Beginner',
      length: 10,
      image: CryptoWallets,
      categories: ['blockchain'],
      datePosted: new Date('07/05/2021'),
    },
    {
      articleName: 'ETH vs BTC',
      link: '#ETHvsBTC',
      level: 'Beginner',
      length: 10,
      image: EthVsBtc,
      categories: ['blockchain'],
      datePosted: new Date('07/05/2021'),
    },
    {
      articleName: 'Flash Loans',
      link: '#FlashLoans',
      level: 'Intermediate',
      length: 10,
      image: FlashLoans,
      categories: ['defi'],
      datePosted: new Date('07/05/2021'),
    },
    {
      articleName: 'DLT and Blockchain',
      link: '#DLTandBlockchain',
      level: 'Intermediate',
      length: 10,
      image: DltAndBlockchain,
      categories: ['blockchain'],
      datePosted: new Date('07/05/2021'),
    },
    {
      articleName: 'Impermanent Loss',
      link: '#ImpermanentLoss',
      level: 'Advanced',
      length: 10,
      image: ImpermanentLoss,
      categories: ['defi'],
      datePosted: new Date('07/05/2021'),
    },
    {
      articleName: 'How to make your own NFTs',
      link: '#OwnNFTs',
      level: 'Beginner',
      length: 10,
      image: OwnNFT,
      categories: ['defi'],
      datePosted: new Date('07/05/2021'),
    },
    {
      articleName: 'Bridging',
      link: '#Bridging',
      level: 'Beginner',
      length: 10,
      image: Bridging,
      categories: ['blockchain'],
      datePosted: new Date('07/05/2021'),
    },
    {
      articleName: 'Smart Contracts and the Ethereum Virtual Machine',
      link: '#SmartContractsandtheEthereumVirtualMachine',
      level: 'Advanced',
      length: 10,
      image: SmartContract,
      categories: ['blockchain'],
      datePosted: new Date('07/05/2021'),
    },
    {
      articleName: 'Staking',
      link: '#Staking',
      level: 'Intermediate',
      length: 10,
      image: Staking,
      categories: ['defi'],
      datePosted: new Date('07/05/2021'),
    },
    {
      articleName: 'History of Defi',
      link: '#HistoryofDefi',
      level: 'Beginner',
      length: 10,
      image: HistoryOfDefi,
      categories: ['defi'],
      datePosted: new Date('07/05/2021'),
    },
    {
      articleName: 'CeFi vs DeFi',
      link: '#CefiVsDefi',
      level: 'Beginner',
      length: 10,
      image: CefiVsDefi,
      categories: ['finance'],
      datePosted: new Date('07/05/2021'),
    },
    {
      articleName: 'Binance Smart Chain',
      link: '#binancesmart',
      level: 'Beginner',
      length: 10,
      image: SmartChain,
      categories: ['blockchain'],
      datePosted: new Date('07/05/2021'),
    },
    {
      articleName: 'Reading a chart for beginners',
      link: '#beginnerchart',
      level: 'Beginner',
      length: 10,
      image: BeginnerChart,
      categories: ['finance'],
      datePosted: new Date('07/05/2021'),
    },
    {
      articleName: 'Slippage',
      link: '#slippage',
      level: 'Beginner',
      length: 10,
      image: Slippage,
      categories: ['finance'],
      datePosted: new Date('07/05/2021'),
    },
  ];

  // Using the array of categories as filter
  // Find articles that contain any of the filters chosen by the user
  const articlesInSelectedCategories = articles.filter((article) =>
    articleFilters.some((category) => article.categories.includes(category))
  );

  function toggleArticles() {
    // If the user hasn't selected any categories toggle between 8 and all articles
    if (!showMore && articlesInSelectedCategories.length === 0) {
      setShowMore(true)
      setTotalArticlesDisplay(articles.length)
      setBtnText('Hide articles')
    } else if (showMore && articlesInSelectedCategories.length === 0) {
      setTotalArticlesDisplay(8)
      setShowMore(false)
      setBtnText('See all articles')
    } else if (!showMore && articlesInSelectedCategories.length > 0) {
      setShowMore(true)
      setTotalArticlesDisplay(articlesInSelectedCategories.length)
      setBtnText('Hide articles')
    } else {
      setTotalArticlesDisplay(8);
      setShowMore(false);
      setBtnText('See all articles');
    }
  }

  return (
    <>
          <div className="articles-heading-container">
            <h3 className="articles-heading">
              <span className="uni-text">{articles.length}</span>{' '}
              <span className="uni-bold-text">Articles</span>
            </h3>
          </div>
      <div className="articleGalleryContainer">
        <div className="article-gallery">
          {/* If the user has selected categories to filter by, show those */}
          {articlesInSelectedCategories.length === 0 ? articles.slice(0, totalArticlesDisplayed).map(article => (
            <ArticleCard
              key={article.articleName}
              articleName={article.articleName}
              link={article.link}
              level={article.level}
              length={article.length}
              image={article.image}
              datePosted={article.datePosted}
              categories={article.categories}
            />
            //Otherwise render the first eight 
          )) : articlesInSelectedCategories.length > 0 ? articlesInSelectedCategories.slice(0, totalArticlesDisplayed).map(article => (
            <ArticleCard
              key={article.articleName}
              articleName={article.articleName}
              link={article.link}
              level={article.level}
              length={article.length}
              image={article.image}
              datePosted={article.datePosted}
              categories={article.categories}

            />)) : ''}
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
