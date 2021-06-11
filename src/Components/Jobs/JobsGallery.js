import JobCard from './JobCard'
import React from 'react'
import { Grid } from '@material-ui/core';

function JobsGallery() {
    return (
        <>
            <h3 className='openPosHeader'>Open positions</h3>
            <div>
                {/* For each new job to be listed add one <Grid item xs={6}> and it's contents */}
                <Grid container spacing={4}>
                    <Grid item xs={12} md={6}>
                        <JobCard />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <JobCard />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <JobCard />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <JobCard />
                    </Grid>
                </Grid>
            </div>
        </>)
} 

export default JobsGallery;