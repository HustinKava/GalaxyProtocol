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
  const [showMore, setShowMore] = useState(false)
  const [totalArticlesDisplayed, setTotalArticlesDisplay] = useState(8);
  const [btnText, setBtnText] = useState('See all articles')
  //Creating an array of article objects
  const articles = [
    {
      articleName: 'Crypto Wallets Explained',
      link: '#CryptoWallets',
      level: 'Beginner',
      length: 10,
      image: CryptoWallets,
      catagory: ['crypto', 'trading']
    },
    {
      articleName: 'ETH vs BTC',
      link: '#ETHvsBTC',
      level: 'Beginner',
      length: 10,
      image: EthVsBtc,
      catagory: ['blockchain', 'investing']

    },
    {
      articleName: 'Flash Loans',
      link: '#FlashLoans',
      level: 'Intermediate',
      length: 10,
      image: FlashLoans,
      catagory: ['crypto', 'trading']

    },
    {
      articleName: 'DLT and Blockchain',
      link: '#DLTandBlockchain',
      level: 'Intermediate',
      length: 10,
      image: DltAndBlockchain,
      catagory: ['blockchain', 'investing']

    },
    {
      articleName: 'Impermanent Loss',
      link: '#ImpermanentLoss',
      level: 'Advanced',
      length: 10,
      image: ImpermanentLoss,
      catagory: ['crypto']

    },
    {
      articleName: 'How to make your own NFTs',
      link: '#OwnNFTs',
      level: 'Beginner',
      length: 10,
      image: OwnNFT,
      catagory: ['blockchain', 'investing']

    },
    {
      articleName: 'Bridging',
      link: '#Bridging',
      level: 'Beginner',
      length: 10,
      image: Bridging,
      catagory: ['crypto']

    },
    {
      articleName: 'Smart Contracts and the Ethereum Virtual Machine',
      link: '#SmartContractsandtheEthereumVirtualMachine',
      level: 'Advanced',
      length: 10,
      image: SmartContract,
      catagory: ['trading']

    },
    {
      articleName: 'Staking',
      link: '#Staking',
      level: 'Intermediate',
      length: 10,
      image: Staking,
      catagory: ['blockchain',]

    },
    {
      articleName: 'History of Defi',
      link: '#HistoryofDefi',
      level: 'Beginner',
      length: 10,
      image: HistoryOfDefi,
      catagory: ['blockchain']

    },
    {
      articleName: 'CeFi vs DeFi',
      link: '#CefiVsDefi',
      level: 'Beginner',
      length: 10,
      image: CefiVsDefi,
      catagory: ['blockchain', 'investing']

    }
  ]

  // Using the array of catagories as filter
  // Find articles that contain any of the filters chosen by the user
  const articlesInselectedCatagories = articles.filter(
    article => articleFilters.some(
      catagory => article.catagory.includes(catagory)
    )
  )

  function toggleArticles() {
    // If the user hasn't selected any catagories toggle between 8 and all articles
    if (!showMore && articlesInselectedCatagories.length === 0) {
      setShowMore(true)
      setTotalArticlesDisplay(articles.length)
      setBtnText('Hide articles')
    } else if(showMore && articlesInselectedCatagories.length === 0) {
      setTotalArticlesDisplay(8)
      setShowMore(false)
      setBtnText('See all articles')
    } else if (!showMore  && articlesInselectedCatagories.length > 0){
      setShowMore(true)
      setTotalArticlesDisplay(articlesInselectedCatagories.length)
      setBtnText('Hide articles')
    } else {
      setTotalArticlesDisplay(8)
      setShowMore(false)
      setBtnText('See all articles')
    }
  }

  return (
    <>
      <div className="articleGalleryContainer">
        <div className="article-gallery">

          {/* If the user has selected catagories to filter by, show those */}
          {articlesInselectedCatagories.length === 0 ? articles.slice(0, totalArticlesDisplayed).map(article => (
            <ArticleCard
              key={article.articleName}
              articleName={article.articleName}
              link={article.link}
              level={article.level}
              length={article.length}
              image={article.image}
            />
            //Otherwise render the first eight 
          )) : articlesInselectedCatagories.length > 0 ? articlesInselectedCatagories.slice(0, totalArticlesDisplayed).map(article => (
            <ArticleCard
              key={article.articleName}
              articleName={article.articleName}
              link={article.link}
              level={article.level}
              length={article.length}
              image={article.image}
            />)) : ''}


          <div className="article-gallery-column">
            <ArticleCard
              articleName={'Binance Smart Chain'}
              link={'#binancesmart'}
              level={'Beginner'}
              length={10}
              image={SmartChain}
            />
          </div>

          {/* fourth row of article cards */}
          <div className="article-gallery-column">
            <ArticleCard
              articleName={'Reading a chart for beginners'}
              link={'#beginnerchart'}
              level={'Beginner'}
              length={10}
              image={BeginnerChart}
            />
          </div>

          <div className="article-gallery-column">
            <ArticleCard
              articleName={'Slippage'}
              link={'#slippage'}
              level={'Beginner'}
              length={10}
              image={Slippage}
            />
          </div>


        </div>
      </div>
      <div className="moreBtnContainer">
        <button className="article-more-btn" onClick={toggleArticles}>{btnText}</button>
      </div>
    </>
  );
}

export default ArticleGallery;
