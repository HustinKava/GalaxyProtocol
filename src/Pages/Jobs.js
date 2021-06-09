import React, { useState } from 'react'
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer';
import JobsHero from '../Components/Jobs/JobsHero';
import JobsGallery from '../Components/Jobs/JobsGallery';
import PositionDetails from '../Components/Jobs/PositionDetails';

import { Container } from '@material-ui/core';

import '../Styles/JobHero.css';




const Jobs = () => {

    const [jobSelected, setJobSelected] = useState(false)

    return (
        <div className='background'>
            <Navbar />
            <Container fluid>
                <JobsHero />
                {!jobSelected ? <JobsGallery /> : <PositionDetails />}

            </Container>
            <div className="space" />
            <Footer />
        </div>
    )
}

export default Jobs
