import StakingHero from '../../Assets/articles/staking.png';
import StakingSlice from '../../Assets/articlesSlice/staking-slice.png';

export const Staking = {
  // id acts as route -> '/articles/:id'
  id: 'Staking',
  title: 'Staking',
  level: 'Intermediate',
  heroImage: StakingHero,
  imageSlice: StakingSlice,
  categories: ['defi'],
  datePosted: new Date('07/05/2021'),
  length: 10,
  body: [
    {
      subtitle: 'TLDR;',
      paraContent: [
        'Staking is the process by which one deposits cryptocurrency tokens into a vault or pool (smart contract) in order to earn rewards. This is conceptually similar to a traditional savings account at your local bank, although staking in cryptocurrency is far more versatile and lucrative.',
      ],
    },
    {
      subtitle: 'History of Staking',
      paraContent: [
        'Invented in 2012 and more widely adopted after the 2017 bull run, staking is one of the largest and most significant evolutions to happen in blockchain technology. Born out of a need to reduce the energy consumption of Proof of Work (PoW) consensus algorithms, staking allows network nodes to validate blocks and reach consensus without the need to solve complex cryptographic algorithms. This reduces the amount of computing power required to process transactions on the blockchain, thus lowering emissions and increasing the efficiency of the network.',

        `A Proof of Stake (PoS) system operates in a similar fashion to a traditional PoW system, with one key difference. Miners, now called validators, deposit, or 'stake,' a network's native cryptocurrency into a vault, smart contract, in order to be awarded the opportunity to validate a block of transactions. In doing so, a validator earns freshly minted coins as the reward for validating the block (this is also called a block reward). The more coins a validator stakes the higher chance they have of being awarded the opportunity to validate a block.`,
      ],
    },
    {
      subtitle: 'How does it work?',
      paraContent: [
        'Staking in cryptocurrency is analogous to a savings account in traditional finance. When you deposit fiat currency into traditional savings account at a registered financial institution, the financial institution loans your money out and collects interest. The financial institution then returns a portion of the collected interest to yourself and pockets the difference. In cryptocurrency, staking follows the same path conceptually, although the specific mechanics differ depending on the type of staking you are involved in.',
      ],
    },
    {
      subtitle: 'Different types of staking:',
      paraContent: [
        'Although all methods of staking are essentially the same, they differ in how the staked tokens are utilized and how rewards are generated. For these reasons, four main types of staking exist.',
      ],
    },
    {
      innerSubtitle: 'Consensus/Validation Staking (PoS)',
      paraContent: [
        'This method of staking involves a user depositing cryptocurrency tokens into the smart contract of a validation node. Validators are awarded the opportunity to validate transaction blocks based on the size of their stake in the network, i.e. the number of coins they have staked compared to other validators on the network. When a node validates a block, it collects the block reward for doing so. For more info on PoS staking check out Ethereum 2.0 staking.',
      ],
    },
    {
      innerSubtitle: 'Distribution/Standard Staking',
      paraContent: [
        'This method of staking is the one that most of us are familiar with. PancakeSwap, SushiSwap, and GalaxySwap all utilize an inflationary distribution model in which new tokens are minted every block. These new tokens are distributed as rewards to those who have deposited tokens into the farming and staking pools. Depositing tokens into a swap helps to increase the liquidity and overall health of the swap, for this reason, swap developers offer high yields on staked tokens.',
      ],
    },
    {
      innerSubtitle: 'Liquidity Staking (aka Yield Farming)',
      paraContent: [
        'This method of staking is employed by swaps to allow for decentralized trading. Users, known as liquidity providers (LPs), deposit tokens into the liquidity pool of a trading pair in order to allow other users to swap between them. Liquidity providers earn trading fees on their deposited liquidity as well as rewards from staking LP tokens. Providing liquidity involves more complex mechanics and requires its own article.',
      ],
    },
    {
      innerSubtitle: 'Lending Staking',
      paraContent: [
        'The last form of staking is lending. This method of staking is most similar to the traditional financial model. Platforms like Compound Finance and AAVE Protocol allow users to stake tokens at a given interest rate, for example, 5% and allow other users to borrow those same tokens at a higher interest rate, for example, 10%. In this example, both the staker and the platform earn 5% interest on the staked tokens.',
      ],
    },
    {
      subtitle: 'Conclusion:',
      paraContent: [
        'Staking is a secure way to generate passive income on crypto assets and a fantastic method of bringing stable growth to any crypto portfolio. Always DYOR before staking with a new platform. Remember any tokens that are not held by your private keys, are not your tokens. If a staking protocol happens to get hacked or is malicious by nature you could lose your investment.',
      ],
    },
  ],
};
