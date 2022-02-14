import React from 'react';

function ArticleLevel({ level }) {
  //Dynamic level population and color attribute based on level
  let levelStyle;

  if (level === 'Beginner') {
    levelStyle = 'article-level-beginner';
  } else if (level === 'Intermediate') {
    levelStyle = 'article-level-intermediate';
  } else {
    levelStyle = 'article-level-advanced';
  }

  return <div className={levelStyle}> &bull; {level}</div>;
}

export default ArticleLevel;
