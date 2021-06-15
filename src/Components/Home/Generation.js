import React from 'react';
import { Container } from '@material-ui/core';
import '../../Styles/Generation.css';
import Background from '../../Assets/GP-Emblem.png';

const Generation = () => {
    return (
        // <Container maxWidth="md" style={styles}>
        <Container maxWidth="md">
            <div className='genBackgroundContainer'>
                <img src={Background} alt='background' className='genBackground'/>
                <h1 className='genHeader'>The next Generation De-fi protocol</h1>
                <p className='genText'>Create, trade, learn & interact</p>
                <div className='genButtons'>
                    <button className='genBtn1'>Learn</button>
                    <br className='responsiveButtons'/>
                    <button className='genBtn2'>Read Documents</button>
                </div>
            </div>

        </Container>
    )
}

export default Generation
