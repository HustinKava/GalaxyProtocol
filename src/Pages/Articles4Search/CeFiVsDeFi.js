import CefiVsDefiHero from '../../Assets/articles/cefi-vs-defi.png';
import CefiVsDefiSlice from '../../Assets/articlesSlice/cefi-vs-defi-slice.png';

export const CefiVsDefi = {
  // id acts as route -> '/articles/:id'
  id: 'CefiVsDefi',
  title: 'CeFi vs DeFi',
  level: 'Beginner',
  heroImage: CefiVsDefiHero,
  imageSlice: CefiVsDefiSlice,
  categories: ['finance'],
  datePosted: new Date('07/05/2021'),
  length: 10,
  body: [
    {
      subtitle: 'What is CeFi?',
      paraContent: [
        `CeFi or Centralized Finance can be easily compared to an online bank. When you go to a bank, you deposit your funds and the bank holds those funds on your behalf. The bank displays that you have x number of x currency credited to your account. You can move those funds between accounts and buy into various funds offered by your bank. However, you don’t actually have cash in hand unless you liquidate your account.`,

        `This is how Centralized Finance works, as well. Centralized Finance takes place on Centralized Exchanges, which are, in effect, banks. You deposit your funds onto the exchange then the exchange credits a certain value of either fiat or crypto currency to your account. While your funds are on a Centralized Exchange, or CEX for short, your assets are held in escrow by the Centralized Exchange, just like a bank.`,

        'Trading takes place Peer-to-Peer on Centralized Exchanges. Prices are determined via the bid-ask spread, which is catalogued in an order book, just like in the stock market. For example, if you want to buy a stock on a stock exchange, you technically negotiate the price from the owner. The average of all the negotiations of a given stock at a given point in time creates the trend line. If you wish to buy stock A at "market value," that means your order for that stock will be immediately filled at whatever the asking price. If you want to create a limit order, you ask to buy the stock at a certain price and your order is only fulfilled when someone is willing to sell their stock at that price. The exact same process happens on Centralized Exchanges. You can place market or limit orders to buy cryptocurrency. Examples of Centralized Exchanges are Binance, Huobi, Coinbase, Kraken, and KuCoin. All of these exchanges provide similar services and have similar fee structures.',

        'You can withdraw your funds at any time and just like when you withdraw your funds from a bank, then you have the cash in hand. If you would like to withdraw your crypto, you have to have a crypto wallet set up. At this point, we find ourselves in Decentralized Finance.',
      ],
    },
    {
      subtitle: 'What is DeFi?',
      paraContent: [
        `DeFi or Decentralized Finance, takes place between cryptocurrency wallets and Smart Contracts. You can make a comparison to banks and DeFi but the analogy is slightly more complicated. Let’s imagine DeFi as a cash based economy. Any time you want to make a purchase, you have to have cash in your wallet. In DeFi, your funds are not held by anyone and you are in complete control. If you would like to buy a different currency, or swap crypto for another crypto, you do not interact with people, you interact with Smart Contracts.`,

        'DeFi was born on the Ethereum Network. Why? Because the Ethereum Network is in effect one massive computer that allows people to host their applications. The Ethereum Network applications are coded in Smart Contracts.',

        'The biggest use case so far for Smart Contracts is their financial applications and the Ethereum Mainnet is still the dominant playground for financial innovation.',

        'Coming back to the cash based economy analogy. In a cash based economy, when you go to a vending machine to buy a chocolate bar for example, you put your cash into the machine and the machine gives you a chocolate bar in return. This is the basic idea of a Decentralized Exchange or DEX for short. After you’ve deposited funds in your crypto wallet, you can visit a Decentralized Exchange and swap your crypto for another crypto. In this comparison, you are still you and the Decentralized Exchange is like a vending machine. If the Decentralized Exchange has ETH, and you have USDT in your wallet and would like to purchase the ETH, you can purchase the ETH directly from the Decentralized Exchange by connecting your wallet to the Exchange.',

        'From whom are you purchasing the ETH? From something called a Liquidity Pool. A Liquidity Pool is an invention by the UniSwap developers and is a Smart Contract that acts as an account of two currencies. In order for there to be a liquid market, there needs to be the ability to trade two currencies. If you only have one currency and a large enough order came through to buy out a particular currency, there would be no more of that currency and the market would become illiquid.',

        'How does a liquidity pool solve this? Via a very simply mathematic equation which is x * y = k. K is constant and then x and y are proportions of k. K must equal 1. This enables there to always be a liquid market and for people to trade freely from crypto to crypto and prices are auto adjusted, as such.',
      ],
    },
    {
      subtitle: 'Closing thoughts',
      paraContent: [
        `Both CeFi and DeFi have their advantages and disadvantages. One advantage of a CEX is the speed at which a transaction can take place. DEXs' transaction speed are dictated by the overall network's volume. When the Ethereum mainnet is busy, it can often take longer for a trade to be accepted. One advantage that a DEX holds over a CEX is that all the trading is controlled by individuals, no central organization holds funds in escrow. Both systems are leading to the mass adoption of cryptocurrencies and are helping pushing financial freedom forward.`,
      ],
    },
  ],
};
