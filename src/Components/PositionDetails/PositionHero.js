import React from 'react';
import { Link } from '@material-ui/core';

function PositionHero() {
  return (
    <div>
      <h1 className="openPos-hero-header">Work With Us</h1>

      <p className="openPosIntro">
        If you get incredibly excited about Blockchain, cryptocurrency and
        everything that has to do with Starwars, you’re in the right place.
      </p>
      {/* Insert arrow below */}
      <Link href="/jobs">
        <p className="returnToGallery">Back to Open Positions</p>
      </Link>
    </div>
  );
}

export default PositionHero;
