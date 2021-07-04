import React from 'react';

// Importing components
import Title from './ArticleTitle'
import Subtitle from './ArticleSubtitle'
import InnerSubtitle from './InnerArticleSubtitle'
import BodyParagraph from './BodyParagraph'
// import BodyImage from './BodyImage'


const ArticleTemplate = ({ heroImage, title, body }) => {
    return (
        <div className="articleContainer">
            <img src={heroImage} alt="" className="heroImage"></img>
            <div className="contentContainer">
                {/* Render h1 for the article */}
                <Title
                    title={title} />

                <hr className="underTitleLine"></hr>

                {/* Article Contents*/}

                <div className="articleBodyContainer">
                    {body.map((section) => {

                        //Render a subtitle if one exists for that section ( render h2)
                        if (section.subtitle) {
                            return (
                                <>
                                    <Subtitle subtitle={section.subtitle} />
                                    {section.paraContent.map((subSection) => {
                                        return (
                                            <BodyParagraph key={subSection} bodyparagraph={subSection} />
                                        )
                                    })}
                                </>
                            )
                        //Render h3 for article if needed
                        } else if (section.innerSubtitle) {
                            return (
                                <>
                                    <InnerSubtitle innerSubtitle={section.innerSubtitle} />
                                    {section.paraContent.map((subSection) => {
                                        return (
                                            <BodyParagraph key={subSection} bodyparagraph={subSection} />
                                        )
                                    })}
                                </>
                            )
                        }
                        // Otherwise just render body text <p>
                        else {
                            return (
                                <>
                                    {section.paraContent.map((subSection) => {
                                        return (
                                            <BodyParagraph key={subSection}  bodyparagraph={subSection} />
                                        )
                                    })}
                                </>
                            )
                        }
                    }
                    )}
                </div>
            </div>
        </div>
    );
};

export default ArticleTemplate;
