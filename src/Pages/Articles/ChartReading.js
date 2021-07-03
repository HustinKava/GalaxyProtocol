import ArticleTemplate from '../../Components/Articles/ArticleTemplate';
// Progress bar
import getProgress from '../../Components/ProgressBar/getProgress';

import BeginnerChart from '../../Assets/articles/beginner-chart.png';

const ChartReading = () => {
  let content = {
    heroImage: BeginnerChart,
    title: 'Chart Reading for Beginners',
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

export default getProgress(ChartReading);
