import React from 'react';

const ArticleHeader = ({ article }) => {
  const { heroImage, title } = article;
  return (
    <div>
      <img src={heroImage} alt={`${title}`} className="heroImage" />
      {/* Render h1 for the article */}
      <p className="articleTitle">{title}</p>

      <hr className="underTitleLine" />
    </div>
  );
};

export default ArticleHeader;
