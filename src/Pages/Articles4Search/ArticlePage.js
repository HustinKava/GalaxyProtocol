import { withRouter } from 'react-router-dom';
import ArticleContent from '../../Components/Articles/ArticleContent';
// Progress bar
import getProgress from '../../Components/ProgressBar/getProgress';
import { articles } from './articles';

const ArticlePage = ({ match, location }) => {
  const {
    params: { articleId },
  } = match;

  return (
    <div className="mainContainer">
      {articles
        .filter((article) => article.id === articleId)
        .map((article) => {
          return <ArticleContent article={article} />;
        })}
    </div>
  );
};

export default getProgress(withRouter(ArticlePage));
