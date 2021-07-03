import ArticleTemplate from '../../Components/Articles/ArticleTemplate';
// Progress bar
import getProgress from '../../Components/ProgressBar/getProgress';

import LiquidityHero from '../../Assets/articles/liquidity.png';

const LiquidityandLPTokens = () => {
  let content = {
    heroImage: LiquidityHero,
    title: 'Liquidity & LP Tokens',
    body: [
      {
        subtitle: '',
        paraContent: [],
      },
      {
        subtitle: '',
        paraContent: [],
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

export default getProgress(LiquidityandLPTokens);
