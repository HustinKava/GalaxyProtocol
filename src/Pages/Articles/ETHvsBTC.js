import ArticleTemplate from '../../Components/Articles/ArticleTemplate';
// Progress bar
import getProgress from '../../Components/ProgressBar/getProgress';

import ETCHvsBTCHero from '../../Assets/articles/eth-vs-btc.png';
const ETHvsBTC = () => {
  let content = {
    heroImage: ETCHvsBTCHero,
    title: 'Ethereum vs Bitcoin blockchain',
    body: [
      {
        subtitle: '',
        paraContent: [
          `Bitcoin and Ethereum have outgrown the whole crypto market. Bitcoin is known to be the crowned premium digital currency while Ethereum falls closely behind. The influence of both these currencies over the market can be understood by the fact that their combined market cap makes 63% of the whole market (at the time of writing).`,

          `Although Ethereum and Bitcoin are categorized under the same umbrella of "cryptocurrencies", they are worlds apart when it comes to technology and what they are capable of in terms of use case. To understand the difference, let's take a look at what goes on behind these giants.`,
        ],
      },
      {
        subtitle: 'Bitcoin:',
        paraContent: [
          `Bitcoin is undoubtedly the king of all currencies, the "digital gold" if you will. Bitcoin was invented back in 2009 with the aim to create a currency that is free of middlemen, is transparent, decentralized, and fast. This set the grounds for all the currencies that entered later on in the market.`,

          `The point to note here is that Bitcoin was invented to create an alternative to currencies. So, the use case was limited to being a transactional currency until the limited supply hampered the process and skyrocketed the price due to the illusion of scarcity. Bitcoin has transitioned from a mere digital currency to digital gold ever since and has garnered a lot of interest from retail and institutional investors.`,
        ],
      },
      {
        innterSubtitle: 'Limitations as a transactional medium:',
        paraContent: [
          `Due to the factors stated below, the crypto space has started to disregard bitcoin as a medium of transactions and payments and has considered it as digital gold:`,
          `- Price volatility - Bitcoin's price has been soaring ever since it came into existence. The currency that used to be of a few cents apiece currently stands at around $35,000.`,
          `- Transaction speed - A single transaction can take up to 10 minutes.`,

          `While bitcoin lacks the aforementioned factors, it still fulfills the checklist that makes an asset a currency:`,
          `- Durability`,
          `- Portability`,
          `- Divisibility`,
          `- Fungability`,
        ],
      },
      {
        innerSubtitle: `Bitcoin's blockchain:`,
        paraContent: [
          `The technology behind bitcoin is basically a decentralized ledger or a blockchain. This ledger is:`,
          `- Immutable, consistent`,
          `- Timestamped`,
          `- Accurate`,
          `- Contains description of a transaction`,

          `Whenever a transaction is executed in the blockchain, this ledger is updated by a network of nodes called miners. Although bitcoin is an overall complex amalgamation of finance and technology, the crux of what goes behind the scenes is simple and limited to transactions. This is where Ethereum enters the game with its extremely innovative approach.`,
        ],
      },
      {
        subtitle: 'Ethereum',
        paraContent: [
          `Ethereum entered the market in 2015, a long time after bitcoin. This gave Vitalik Buterin, the founder of Ethereum, and his team a lot of time to understand what decentralized technology is capable of achieving and implementing these innovations. Consequently, they integrated the functionality of “Smart Contracts” (Integration of computer code) within the blockchain which opened a lot of doors for new entrants in the market. This made Ethereum transcend the title of a currency into a realm of tokens with intrinsic value.`,

          `Overall, Etheruem is viewed more as a “platform” that allows developers to build applications and tokens.`,
        ],
      },
      {
        subtitle: 'Ether vs BTC',
        paraContent: [
          `While bitcoin has a value that solely works on trust, adoption, and Supply & Demand, Ethereum is an investment in a tech platform. Imagine holding a share of Tesla which is divisible and can be used as a currency, Ethereum does exactly that.`,

          `If we compare the transaction speeds, Ethereum is much faster than bitcoin that can handle up to 12 transactions per second. Although this is much faster than the former alternative, this still is considerably slower than the centralized alternatives like VISA.`,
        ],
      },
      {
        innerSubtitle: 'Ethereum’s blockchain:',
        paraContent: [
          `As explained earlier, Ethereum’s blockchain contains Smart Contracts, which is essentially an integration of computer code that has a set of instructions to perform a specific task. This gives developers a platform to form decentralized applications as well as make their own tokens. The prime example of Ethereum-based tokens is Tether, a stablecoin whose value remains pegged to a dollar.`,
          `Unlike Bitcoin which is a payment network, Ethereum is more of a platform that aims to create a technological infrastructure for other projects to build on.`,
          `Ethereum can also be held responsible for the Decentralized Finance boom as most of the DeFi platforms are build either on Ethereum or using the same concepts of integrating computer code.`,
        ],
      },

      {
        subtitle: 'Similarities in Mining',
        paraContent: [
          `Both of the currencies employ the same algorithm for mining: Proof of Work. To simply define it, Proof of Work is an algorithm that incentivizes miners to secure the blockchain from any false transactions in the most decentralized manner.`,

          `To understand Proof of Work, let’s see how each transaction occurs. Since there is no centralized body controlling and monitoring each transaction, users are responsible for carrying out this act. For this, some of the users in the network volunteer to maintain the security and integrity of the chain. These users are called miners. These miners would check if the transaction that a user is performing is valid. Each transaction comes coupled with a cryptographic puzzle attached to it. Miners use their computing resources to compete to solve this puzzle the earliest of the lot. Once a miner gets the solution, other users in the network check to see if the solution is indeed right after which the miner gets to add the transaction to the block. The question that arises is that why would anyone exhaust their resources to secure a system. The answer is simple, in return for rewards.`,

          `As the number of miners in the network increases, the difficulty of the puzzle increases as well, and competing becomes very expensive.`,

          `Due to the increasing difficulty, the time associated with a transaction also increases. This creates issues regarding scaling the transaction speeds. To avoid this, Ethereum is moving to a much more efficient consensus algorithm called Proof of Stake.`,
        ],
      },
      {
        subtitle: 'Conclusion:',
        paraContent: [
          `When it comes to both of these currencies, there is no competition as one of them is considered to be the next big asset while the other is a platform that is helping the crypto world to expand. The drastic difference in the use cases has led the investors to categorize them differently as well. Bitcoin is generally considered a hedge against inflation and an asset investment while Ethereum is considered as a tech stock in the crypto market.`,
          `Due to these differences, it is safe to say that these currencies are in the leagues of their own and neither would overstep in the realm of the other.`,
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

export default getProgress(ETHvsBTC);
