import React from 'react';
import ArticleLevel from './ArticleLevel'

function ArticleCard() {
    return (
        <div className="article-card">
            <div className="article-card-content">
                {/* Main image in Article card */}
                <div className="article-card-image">
                </div>

                <div className="article-card-details-container">
                    <p className="article-card-title">What is Galaxia?</p>
                    <ArticleLevel />
                </div>

                <hr></hr>

                <div className="article-card-timeframe-container">
                    <div className="article-card-length"> &#128343;10m</div>
                </div>

            </div>
        </div>
    );
}

export default ArticleCard;
