import JobCard from './JobCard';
import React from 'react';

function JobsGallery() {
  return (
    <>
      <h3 className="openPosHeader">Open positions</h3>
      <div className="jobs-gallery">
        {/* For each new job to be listed add one <Grid item xs={6}> and it's contents */}
        <JobCard />

        <JobCard />

        <JobCard />

        <JobCard />
      </div>
    </>
  );
}

export default JobsGallery;
