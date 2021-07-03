import ArticleCard from './ArticleCard';
import React from 'react';

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
              image={CryptoWallets}
            />
          </div>

          <div className="article-gallery-column">
            <ArticleCard
              articleName={'ETH vs BTC'}
              link={'#ETHvsBTC'}
              level={'Beginner'}
              // length={10}
              image={EthVsBtc}
            />
          </div>

          <div className="article-gallery-column">
            <ArticleCard
              articleName={'Flash Loans'}
              link={'#FlashLoans'}
              level={'Intermediate'}
              length={10}
              image={FlashLoans}
            />
          </div>

          {/* <div className="article-gallery-column">
            <ArticleCard
              articleName={'Farming'}
              link={'#Farming'}
              level={'Beginner'}
              length={10}
            />
          </div> */}

          <div className="article-gallery-column">
            <ArticleCard
              articleName={'DLT and Blockchain'}
              link={'#DLTandBlockchain'}
              level={'Intermediate'}
              length={10}
              image={DltAndBlockchain}
            />
          </div>

          {/* second row of article cards */}
          <div className="article-gallery-column">
            <ArticleCard
              articleName={'Impermanent Loss'}
              link={'#ImpermanentLoss'}
              level={'Advanced'}
              length={10}
              image={ImpermanentLoss}
            />
          </div>

          <div className="article-gallery-column">
            <ArticleCard
              articleName={'How to make your own NFTs'}
              link={'#OwnNFTs'}
              level={'Beginner'}
              length={10}
              image={OwnNFT}
            />
          </div>

          <div className="article-gallery-column">
            <ArticleCard
              articleName={'Bridging'}
              link={'#Bridging'}
              level={'Beginner'}
              length={10}
              image={Bridging}
            />
          </div>

          <div className="article-gallery-column">
            <ArticleCard
              articleName={'Smart Contracts and the Ethereum Virtual Machine'}
              link={'#SmartContractsandtheEthereumVirtualMachine'}
              level={'Advanced'}
              length={10}
              image={SmartContract}
            />
          </div>
          
          {/* third row of article cards  */}
          <div className="article-gallery-column">
            <ArticleCard
              articleName={'Staking'}
              link={'#Staking'}
              level={'Intermediate'}
              length={10}
              image={Staking}
            />
          </div>

          <div className="article-gallery-column">
            <ArticleCard
              articleName={'History of Defi'}
              link={'#HistoryofDefi'}
              level={'Beginner'}
              length={10}
              image={HistoryOfDefi}
            />
          </div>

          <div className="article-gallery-column">
            <ArticleCard
              articleName={'CeFi vs DeFi'}
              link={'#CefiVsDefi'}
              level={'Beginner'}
              length={10}
              image={CefiVsDefi}
            />
          </div>


        </div>
      </div>
    </>
  );
}

export default ArticleGallery;
