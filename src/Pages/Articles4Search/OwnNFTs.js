import OwnNFTsHero from '../../Assets/articles/own-nft.png';
import OwnNFTSlice from '../../Assets/articlesSlice/own-nft-slice.png';

export const OwnNFTs = {
  // id acts as route -> '/articles/:id'
  id: 'OwnNFTs',
  title: 'How to make your own NFTs',
  level: 'Beginner',
  heroImage: OwnNFTsHero,
  imageSlice: OwnNFTSlice,
  categories: ['defi'],
  datePosted: new Date('07/05/2021'),
  length: 10,
  body: [
    {
      subtitle: 'What is an NFT?',
      paraContent: [
        `An NFT (non-fungible token) is a unique crypto asset with properties that differentiate the NFT from other assets on the blockchain. An NFT can represent any number of things, most commonly art, music, videos, or even trading cards. NFTs began on the Bitcoin blockchain as satoshis containing the 'pepe' meme as a way to make the coin unique and differentiate it from others on the blockchain. Each coin is created or 'minted' with the certain properties differentiating it from other coins, whether that property is a piece of art, music, trading cards or simply a meme.`,

        'NFT artwork has recently gained massive popularity for its ability to allow the buyer to prove ownership status over a unique and verifiable piece of work. This provides buyers and sellers the peace of mind that an NFT cannot be counterfeit, whereas artwork in a tangible form can easily be recreated as a knockoff. Even when an NFT is mass-produced, the owner can prove uniqueness through its serial number, such as owning number 23/100 of a piece of artwork. ',
      ],
    },
    {
      subtitle: 'What blockchain should I use to create an NFT?',
      paraContent: [
        'An NFT can be created on numerous blockchains. The very first NFTs were created on the Bitcoin blockchain, however, today they are created with many different crypto assets. The blockchains supporting NFTs include Ethereum, Binance Smart Chain, Flow, Tron, EOS, Polkadot, Tezos and several others.',

        'The most popular blockchains for NFTs are the Ethereum blockchain and Binance Smart Chain, each with its own benefits and drawbacks. Ethereum was the first, and arguably remains the most popular, blockchain to offer NFTs. The drawback to the Ethereum blockchain is the ever rising gas fees associated with minting a new NFT. The cost of creating a single NFT on the Ethereum blockchain can routinely exceed $100, which is an obvious detriment to anyone attempting to create a profit from their NFT.',

        'On the other hand, the Binance Smart Chain is an attractive option to creators looking to pay lower fees for minting an NFT. Binance has created a fast and secure blockchain capable of creating NFTs at a fraction of the cost of the Ethereum blockchain. While rapidly gaining in popularity, due in part to its low gas fees, the Binance Smart Chain is both newer and still slightly less popular than the Ethereum blockchain, meaning fewer potential buyers.',
      ],
    },
    {
      subtitle: 'Where can I create an NFT?',
      paraContent: [
        'NFTs can be created on a number of different platforms. The most popular platforms to create an Ethereum NFT include OpenSea, Rarible or Mintable. For the Binance Smart Chain, BakerySwap, Treasureland and Juggerworld are all popular options for minting an NFT.',

        'These platforms allow you to create an account, produce your NFT and then upload it to a marketplace where it can be seen by potential buyers. Once minted, the NFT can also be removed from the platform to an individual wallet that supports the blockchain where the NFT was created. This allows the artist freedom to transfer their NFTs and not be chained to one platform, meaning the artist should choose the platform they are most comfortable with when creating an NFT. ',
      ],
    },
    {
      subtitle: 'How to get started',
      paraContent: [
        `Now that you have a basic understanding of NFTs, you have decided what blockchain best suits your needs and you have created an account on a platform which supports that blockchain, you are ready to create your first NFT. While each platform's interface may vary, the process on each is relatively straightforward.`,

        `The platform will allow you to create or 'mint' a new NFT. When minting an NFT, you will upload the image, song, gif, video or other supported file that contains your artwork. The platform will then require a gas fee to mint the artwork on a new crypto asset. To pay the fee, you will need to connect a wallet with the supported crypto to cover the gas fee. MetaMask and Trust Wallet are two of the more popular wallets artists use to pay their gas fees. `,

        `Once the asset is minted, you have officially created an NFT. You can choose to upload your NFT to the marketplace to attract potential buyers. Some platforms allow artists to collect a royalty fee on the NFT, which means the artist can collect the fee each time it is sold, even when the artist is no longer the owner of the NFT. You can also choose to retain ownership of your NFT—this is especially important for artists creating a brand or a number of works in a collection, or merely an NFT with high value to the artist.`,

        `Regardless of whether you keep the NFT or put it for sale on the marketplace, you have now officially created your first NFT. `,
      ],
    },
  ],
};
