import ArticleTemplate from '../../Components/Articles/ArticleTemplate';
// Progress bar
import getProgress from '../../Components/ProgressBar/getProgress';
import BinanceSmartHero from '../../Assets/articles/binance-smart.png';

const BinanceSmart = () => {
  let content = {
    heroImage: BinanceSmartHero,
    title: 'Binance Smart Chain',
    body: [
      {
        subtitle: 'What is the Binance Smart Chain?',
        paraContent: [
          `The Binance Smart Chain ("BSC") is a blockchain network created by Binance for the purpose of running smart contract applications. BSC runs in parallel to the Binance Chain ("BC") and allows developers to create decentralized applications. While BSC runs parallel to BC, it is also a standalone blockchain that does not require BC to operate.`,

          `BSC is an attractive alternative to the Ethereum blockchain for developers. Ethereum's blockchain has encountered issues with high gas fees, congestion and slow transaction speeds. BSC was created as a faster and more affordable alternative to Ethereum's blockchain and has already gained substantial traction and attracted many developers in 2021.`,

          `In addition to speed and affordability, BSC offers compatibility with the Ethereum blockchain which is very attractive to developers. This allows Ethereum developers and users to easily migrate projects from Ethereum's blockchain to BSC without starting from scratch. This has furthered BSC's popularity due to the minimal friction created by its Ethereum compatibility.`
        ],
      },
      {
        subtitle: 'How is it Different from the Binance Chain?',
        paraContent: [
          'Why does Binance have two separate blockchains? Functionality. The Binance Chain was created solely as a blockchain that would enable incredibly fast trading. In order to allow for such quick trades, BC was made without as many features as other blockchains. One main feature is programmability, which developers use to create applications.',

          `Why does Binance have two separate blockchains? Functionality. The Binance Chain was created solely as a blockchain that would enable incredibly fast trading. In order to allow for such quick trades, BC was made without as many features as other blockchains. One main feature is programmability, which developers use to create applications.`,

          `While BC and BSC operate independently, the interoperability of the two blockchains allows users to move crypto and data between the two almost seamlessly. Together, BSC and BC offer a range of functionalities to its users.`
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

export default getProgress(BinanceSmart);
