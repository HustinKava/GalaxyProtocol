import ImpermanentLossHero from '../../Assets/articles/impermanent-loss.png';
import ImpermanentLossSlice from '../../Assets/articlesSlice/impermanent-loss-slice.png';

export const ImpermanentLoss = {
  // id acts as route -> '/articles/:id'
  id: 'ImpermanentLoss',
  title: 'Impermanent Loss',
  level: 'Advanced',
  heroImage: ImpermanentLossHero,
  imageSlice: ImpermanentLossSlice,
  categories: ['defi'],
  datePosted: new Date('07/05/2021'),
  length: 10,
  body: [
    {
      subtitle: 'What is Impermanent Loss?',
      paraContent: [
        `Impermanent loss is a term that describes the potential loss of funds associated with providing liquidity to automated market makers (AMMs) in liquidity pools. Liquidity providers join the pool by combining two tokens, usually one of the coins is a stable coin, in order to enable trading of that pair on the exchange. Impermanent loss occurs when the value of one of the coins changes in comparison to the other coin, and occurs both when the price increases or decreases. The resulting loss is due to the change in value in the coin relative to the second coin and is measured by the current value of the asset compared to what the value would have been if you were to HODL rather than provide liquidity.`,
      ],
    },
    {
      subtitle: 'How does Impermanent Loss Occur?',
      paraContent: [
        `AMMs are disconnected from the market, so when a price swing occurs, the value of the coins in the liquidity pool does not change until an individual engages in arbitrage. For example, if the liquidity pool involves Coin A and Coin B, and the value of Coin A in the market has risen in comparison to the value of Coin B, an individual engages in arbitrage by buying the underpriced coin and selling the overpriced coin. This allows prices on the exchange to reflect prices in the market as a whole. However, the arbitrage opportunity hurts the liquidity providers by causing impermanent loss. Now that arbitrage has occurred and the AMM reflects prices in the market, liquidity providers end up with a lesser amount of Coin A and a greater amount of Coin B. This causes the total value of the liquidity provided to be less than the value if the individual had just invested in both Coin A and Coin B individually.`,
      ],
    },
    {
      subtitle: 'How can I Protect Myself?',
      paraContent: [
        `At this time, impermanent loss is simply a fact of life on DeFi exchanges. In order for decentralized exchanges to exist, there must be liquidity providers, and in order for the price in the exchange to reflect the price on the market, arbitrage must occur. `,

        `Fortunately, when providing liquidity, most exchanges offer a percentage of fees from trading (including arbitrage) to its liquidity providers. This fee is generally much higher than staking, due in part to the risk of impermanent loss, which attracts liquidity providers. If the fee received from the exchange outperforms the amount of impermanent loss, the result is still a net positive for the liquidity provider.`,
      ],
    },
  ],
};
