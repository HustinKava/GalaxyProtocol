import React from 'react';

// Importing components
import ArticleHeader from './ArticleHeader';
import ArticleBody from './ArticleBody';

const ArticleContent = ({ article }) => {
  return (
    <div className="article-set-container">
      <div className="articleContainer">
        <ArticleHeader article={article} />

        {/* Article Contents*/}
        <ArticleBody article={article} />
      </div>
    </div>
  );
};

export default ArticleContent;
