import ArticleTemplate from '../../Components/Articles/ArticleTemplate';
// Progress bar
import getProgress from '../../Components/ProgressBar/getProgress';


const Article = () => {
  return (
    <div>
      <div className="mainContainer">
        <ArticleTemplate />
      </div>
    </div>
  );
};

export default getProgress(Article);
