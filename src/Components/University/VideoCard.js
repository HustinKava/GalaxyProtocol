import React from 'react';
import VideoLevel from './VideoLevel'

function VideoCard() {
    return (
        <div className="video-card">
            <div className="video-card-content">
                {/* Main image in video card */}
                <div className="video-card-image">
                </div>

                <div className="video-card-details-container">
                    <p className="video-card-title">What is Galaxia?</p>
                    <VideoLevel />
                </div>

                <hr></hr>

                <div className="video-card-timeframe-container">
                    <div className="video-card-length"> &#128343;10m</div>
                </div>

            </div>
        </div>
    );
}

export default VideoCard;
