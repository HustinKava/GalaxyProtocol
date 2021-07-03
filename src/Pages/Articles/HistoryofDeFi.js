import ArticleTemplate from '../../Components/Articles/ArticleTemplate';
// Progress bar
import getProgress from '../../Components/ProgressBar/getProgress';

import HistoryofDeFiHero from '../../Assets/articles/history-defi.png';

const HistoryofDeFi = () => {
  let content = {
    heroImage: HistoryofDeFiHero,
    title: 'History of DeFi',
    body: [
      {
        subtitle: '',
        paraContent: [
          'Bitcoin, Ethereum, and other cryptocurrencies that came to the industry quite early, are currently at the very top. They did so by offering users an opportunity to trade peer-to-peer (P2P) without the involvement of any third party or central authority. Cryptocurrencies are decentralized, and they are issued as well as stored via decentralized methods. This gives users the ability to have full ownership and control of their assets.',

          'In a traditional bank, the bank controls your money, on blockchains, you control your money.',

          'The idea of reproducing traditional financial tools through the usage of the blockchain became the next step in decentralizing the financial system.',

          'To truly understand how all of it happened, let us first take a trip to 2013.',
        ],
      },
      {
        subtitle: 'The Birth of Ethereum',
        paraContent: [
          'Ethereum brought a lot more functionality to the table for DeFi through its creation of smart contracts than Bitcoin ever did. However, Bitcoin laid out the foundation, and showcased that cryptocurrencies could prosper, so by the time 2013 rolled in, it was bound to have some competition.',

          'In 2013, Vitalik Buterin announced the Ethereum Project in a whitepaper known as “A Next-Generation Smart Contract & Decentralized Application Platform.',

          'Ethereum introduced smart contracts, and developers took note. In 2014 we saw the development of MakerDAO. Rune Christensen, Nikolai Mushegian as well as others took up the task of creating what eventually became the first Decentralized Autonomous Organization (DAO) to launch on the Ethereum blockchain',

          'MakerDAO laid the groundwork for what would eventually become what we know as, DeFi. Christensen took things one step further when he introduced the eDollar on March 26th of 2015. The eDollar was the precursor to the single-collateral Dai, which built a testnet for the Ethereum platform',

          'On July 30, 2015, the cryptocurrency world completely changed when the Ethereum blockchain launched. This occurred a year after it was crowdfunded through a sale of over 50 million ETH for a total of 31,500 BTC.',

          'This day marked the dawn of trustless computing and set the groundwork for the creation and release of decentralized applications, also known as dApps for short.',
        ],
      },
      {
        subtitle: 'Decentralized Exchanges Followed',
        paraContent: [
          'April 30th, 2016, a decentralized autonomous organization known as “The DAO” launched a token sale on Ethereum.',

          'The unique aspect of The DAO was the fact that it was designed to operate as a community-run investment fund. It raised more than 11.5 million ETH, which at the time were worth $150 million, and laid down the groundwork for all future DAOs that would come after it. Unfortunately, it was exploited and fell.',

          'Its fall gave birth to what we know today as the Ethereum Classic, which was the result of a hard fork. A hard fork occurs when a radical change to the protocol of a blockchain network occurs and results in two branches. One branch follows the previous protocol, and the other follows the new version.',

          'Later that year, we saw the launch of OasisDEX, which at the time, was the first decentralized exchange on Ethereum. This was a type of cryptocurrency exchange that allowed for direct peer-to-Smart Contract cryptocurrency transactions to take place online securely without the need for an intermediary to hold the funds in escrow.',

          'In 2017, we saw the Single-Collateral DAI or SCD launch on the Ethereum mainnet. The users of the Dai Stable coin System which you now know as the Maker Protocol were finally able to generate Dai tokens against ETH Collateral. SCD essentially provided proof of concept for the idea of a fully decentralized stable coin.',
        ],
      },
      {
        subtitle: 'The Decentralized Finance Expansion',
        paraContent: [
          'At the start of 2018, we saw a lot of dApps launch on Ethereum that attempted, and most of which succeeded, to expand the DeFi ecosystem.',

          'On September 27 of that year, Compound Finance launched its platform, which was the first DeFi borrowing and lending application. With Compound Finance, one could borrow one digital asset against another. The collateral is locked and offers rewards to liquidity providers based on the supply as well as the demand of a given asset.',

          `Then on November 2, we saw the launch of the Uniswap exchange, which popularized Automated Market Maker (AMM) models for DEXs in the cryptocurrency space. This was done through the usage of liquidity pools as well as algorithms that set trading prices instead of the order books that were used previously by centralized exchanges. Uniswap destroyed the competition and their software became the gold standard for DEXs' backend technology.`,

          'In November 2019, we saw the launch of Multi-Collateral DAI or MCD. This enabled anyone to generate Dai against any digital asset in the Maker Protocol’s portfolio.',

          'Why was this important? Well, it set the foundation for the Maker Foundation to accelerate their work to a dissolution.',

          'In September of 2020, the Total Value Locked (TVL) of all DeFi protocols exceeded $10 billion. In November, decentralized stable coins generated 1 billion Dai.',

          `On December 1, 2020, Ethereum 2.0 launched, which was the first of a series of upgrades intended to improve the network's scalability to cope with the volume of DeFi transactions and applications. These upgrades will improve the network’s security, sustainability, efficiency, and decentralization over time`,

          `As of this year, 2021, the total value locked in DeFi is $55.59 billion. There are countless different DeFi dApps being developed on a regular basis, which try to solve many varying issues, and bring financial freedom to anyone with an internet connection.`,
        ],
      },
    ],
  };

  return (
    <div>
      <div className="mainContainer">
        <ArticleTemplate
          heroImage={content.heroImage}
          title={content.title}
          body={content.body}
        />
      </div>
    </div>
  );
};

export default getProgress(HistoryofDeFi);
