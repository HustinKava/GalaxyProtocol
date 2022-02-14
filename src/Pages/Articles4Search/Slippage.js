import SlippageHero from '../../Assets/articles/slippage.png';
import SlippageSlice from '../../Assets/articlesSlice/slippage-slice.png';

export const Slippage = {
  // id acts as route -> '/articles/:id'
  id: 'Slippage',
  title: 'Slippage',
  level: 'Beginner',
  heroImage: SlippageHero,
  imageSlice: SlippageSlice,
  categories: ['finance'],
  datePosted: new Date('07/05/2021'),
  length: 10,
  body: [
    {
      subtitle: 'What is Slippage?',
      paraContent: [
        `Slippage is a general investing term, both in crypto and fiat markets, which describes the difference in the price a trade is requested at and the price the trade is actually executed at. Markets are constantly moving and the price of assets on an exchange fluctuate throughout the day. As a result, orders are rarely filled at the requested prices.`,

        'Slippage is generally thought to describe losses that occur from executing a trade, but in reality, slippage can earn you money as well. If price were to decrease from the time of order placement to the time of order execution, you would have purchased the asset at a lower price, which actually saves you money. On the other hand, any increase in price and the slippage would result in a loss of funds. Decentralized exchanges are especially prone to slippage due to the volatility in the price of assets and other factors such as low volume and liquidity.',
      ],
    },
    {
      subtitle: 'Market Orders',
      paraContent: [
        'Slippage most commonly occurs in a market order due to instantaneous changes in price on an exchange. For example, you place a market order for an asset trading for $5.00. Before the order is filled, the price of the asset has moved to $5.05. Since the order is placed as a market order, it is filled at the current price of $5.05 per unit. The difference in price, $0.05 per unit, is slippage.',
      ],
    },
    {
      subtitle: 'Limit Orders',
      paraContent: [
        'Limit orders are triggered when an asset reaches a target price, however, once that price is reached the market continues to move. A limit order may be placed for $5.00 and will be triggered when the asset reaches this price, but the order may actually be filled for $4.95 if the price were to continue to decrease after the order is triggered. Keep in mind, the resulting slippage from a limit order would save you money in this scenario, but the difference in price is still referred to as slippage.',
      ],
    },
    {
      subtitle: 'Large Volume Orders ',
      paraContent: [
        `Large volume orders are especially prone to slippage. The culprit is low volume. All assets trade at a decentralized price, however, for large volume orders, the resulting trade will be at a range of prices, rather than a singular price. You may place an order for 100,000,000 units of an asset at $5.00, but due to the large volume of your order, several units will be executed at higher (or lower) prices as the market continues to move and the required liquidity to fill such an order is high.`,
      ],
    },
    {
      subtitle: 'Can I Avoid Slippage?',
      paraContent: [
        `Unfortunately, slippage is a fact of life, however, decentralized exchanges allow you to minimize slippage by adjusting settings. The 'Slippage Tolerance' setting allows a user to set a maximum allowed slippage. On most exchanges, the default is 0.5%. A trade attempting to fill at anything above your slippage tolerance setting will simply fail to execute. Another helpful feature is the 'Price Impact' tool. Normally displayed at the bottom of a trade, price impact will give you an idea of the actual slippage to expect when executing your trade. Slippage will always be a fact of life in trading, but the slippage tolerance and price impact tools can help you minimize its effects when executing a trade.`,
      ],
    },
  ],
};
