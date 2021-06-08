import React from 'react'
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer';
import JobsHero from '../Components/Jobs/JobsHero';
import JobCard from '../Components/Jobs/JobCard'
import { Container, Grid, Paper, makeStyles } from '@material-ui/core';

const Jobs = () => {

    const useStyles = makeStyles((theme) => ({
        root: {
            flexGrow: 1,
        },
        paper: {
            padding: theme.spacing(1),
        },
    }));
    const classes = useStyles();

    return (
        <div className=''>
            <Navbar />
            <Container fluid>
            <JobsHero />
                <h3>Open positions</h3>
                <div>
                    {/* For each new job to be listed add one <Grid item xs={6}> and it's contents */}
                    <Grid container spacing={3}>
                        <Grid item xs={6}>
                            <JobCard />
                        </Grid>
                        <Grid item xs={6}>
                            <JobCard />
                        </Grid>
                        <Grid item xs={6}>
                            <JobCard />
                        </Grid>
                        <Grid item xs={6}>
                            <JobCard />
                        </Grid>
                    </Grid>
                </div>
            </Container>
            <Footer />
        </div>
    )
}

export default Jobs
