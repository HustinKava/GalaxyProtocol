import React from 'react';

const ArticleBody = ({ article }) => {
  return (
    <div className="contentContainer">
      {/* Article Contents*/}
      <div className="articleBodyContainer">
        {article.body.map((section, i) => {
          return (
            <div key={`${section}${i}`}>
              {/* This will only load what's there. If there's no subtitle, it just moves on to the next step */}
              <h2 className="articleSubtitle">{section.subtitle}</h2>
              <h3 className="innerArticleSubtitle">{section.innerSubtitle}</h3>
              {section.paraContent.map((subSection) => {
                return (
                  <p key={subSection} className="bodyText">
                    {subSection}
                  </p>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ArticleBody;
