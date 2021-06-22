import JobCard from './JobCard';
import React from 'react';

function JobsGallery() {
  return (
    <>
      <h3 className="openPosHeader">Open positions</h3>
      <div className="jobs-gallery">
        <div className="jobs-gallery-column">
        <JobCard />
        </div>
        <div className="jobs-gallery-column">
        <JobCard />
        </div>
        <div className="jobs-gallery-column">
        <JobCard />
        </div>
        <div className="jobs-gallery-column">
        <JobCard />
        </div>
      </div>
    </>
  );
}

export default JobsGallery;
