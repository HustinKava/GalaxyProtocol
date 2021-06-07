import React from 'react';
import { Container } from '@material-ui/core';
import '../../Styles/Generation.css';

const Generation = () => {
    return (
        <Container maxWidth="md">
            <h1 className='genHeader'>The next Generation De-fi protocol</h1>
            <p className='genText'>Create, trade, learn & interact</p>
            <div className='genButtons'>
                <button className='genBtn1'>Learn</button>
                <button className='genBtn2'>Read Documents</button>
            </div>
        </Container>
    )
}

export default Generation
