import ArticleTemplate from '../../Components/Articles/ArticleTemplate';
// Progress bar
import getProgress from '../../Components/ProgressBar/getProgress';
import FarmingHeroImg from '../../Assets/articles/farming.png';

const Farming = () => {
  let content = {
    heroImage: FarmingHeroImg,
    title: 'Farming',
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

export default getProgress(Farming);
