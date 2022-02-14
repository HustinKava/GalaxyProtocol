import React from 'react';
import ArticleCardDetails from './ArticleCardDetails4Search';
import ArticleCardImage from './ArticleCardImage4Search';

function ArticleCard({ article }) {
  return (
    <div className="article-card">
      <div className="article-card-content">
        {/* Main image in Article card */}
        <ArticleCardImage article={article} />

        <ArticleCardDetails article={article} />
      </div>
    </div>
  );
}

export default ArticleCard;
