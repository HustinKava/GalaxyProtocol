import ArticleTemplate from '../../Components/Articles/ArticleTemplate';
// Progress bar
import getProgress from '../../Components/ProgressBar/getProgress';

import BridgingHero from '../../Assets/articles/bridging.png';

const Bridging = () => {
  let content = {
    heroImage: BridgingHero,
    title: 'Bridging',
    body: [
      {
        subtitle: 'What is a Blockchain Bridge?',
        paraContent: [
          `A bridge is a method of connecting two different blockchains and allowing tokens or data to be shared from one blockchain to another. Each blockchain contains different functionalities and runs on a different network. Projects will only work within the blockchain network they are created on, which limits their impact and creates a glaring roadblock to the future of decentralization. Bridges knock down this barrier by creating compatibility between two blockchains so that an application created on one blockchain can be utilized on another.`,
        ],
      },
      {
        subtitle: 'How Do Bridges Work?',
        paraContent: [
          `Bridges enable operability between separate blockchains, or related (parent and child blockchains) that utilize different rules or security. In order to deploy assets on one blockchain to a different network, a bridge follows two steps. First the token(s) are locked on the blockchain where it was created. Once the tokens are locked, an equal amount are minted on the new blockchain where the tokens are being 'sent.' If a token is then sent back to the original blockchain, the original tokens are unlocked and the newly minted tokens on the second blockchain now become locked. This preserves the amount of a token so that it can transfer between blockchains without changing the circulating supply.`,
        ],
      },
      {
        subtitle: 'What Bridging Means for the Future of DeFi',
        paraContent: [
          `Blockchain bridges are essential to the future of DeFi because they destroy the isolation of projects to a single network. For example, the well noted issues of the Ethereum blockchain, such as processing speed and gas fees, are often overlooked due to the massive community of users it presents. Bridges allow developers to create projects on more efficient blockchains and still deploy the project on networks with large communities such as Ethereum. Bridges will help DeFi take the next step by creating compatibility throughout the world of crypto projects.`,
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

export default getProgress(Bridging);
