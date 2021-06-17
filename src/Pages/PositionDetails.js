// import React, { useState } from 'react'
import Footer from '../Components/Footer';
import PositionHero from '../Components/PositionDetails/PositionHero';
import PositionInfo from '../Components/PositionDetails/PositionInfo';

import { Container } from '@material-ui/core';

const PositionDetails = () => {


    return (
        <div>
            <Container fluid className="mainContainer">
                <PositionHero />
                <PositionInfo />
            </Container>
            <div className="space" />
            <Footer />
        </div>
    )
}

export default PositionDetails;
