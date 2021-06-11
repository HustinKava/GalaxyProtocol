// import React, { useState } from 'react'
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer';
import PositionHero from '../Components/PositionDetails/PositionHero';
import PositionInfo from '../Components/PositionDetails/PositionInfo';

import { Container } from '@material-ui/core';

const PositionDetails = () => {


    return (
        <div>
            <Navbar />
            <Container fluid>
                <PositionHero />
                <PositionInfo />
            </Container>
            <div className="space" />
            <Footer />
        </div>
    )
}

export default PositionDetails;
