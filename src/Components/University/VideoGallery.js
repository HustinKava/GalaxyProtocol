import VideoCard from './VideoCard';
import React from 'react';

function VideoGallery() {
  return (
    <>
    <div className="videoGalleryContainer">
      <div className="video-gallery">
        {/* first row of article cards */}
        <div className="video-gallery-column">
        <VideoCard />
        </div>
        <div className="video-gallery-column">
        <VideoCard />
        </div>
        <div className="video-gallery-column">
        <VideoCard />
        </div>
        <div className="video-gallery-column">
        <VideoCard />
        </div>

        {/* second row of article cards */}
        <div className="video-gallery-column">
        <VideoCard />
        </div>
        <div className="video-gallery-column">
        <VideoCard />
        </div>
        <div className="video-gallery-column">
        <VideoCard />
        </div>
        <div className="video-gallery-column">
        <VideoCard />
        </div>
      </div>
    </div>
    </>
  );
}

export default VideoGallery;
