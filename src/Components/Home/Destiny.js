import React from 'react';
import { Container, Grid } from '@material-ui/core';
import '../../Styles/Destiny.css';

function Destiny() {
    return (
        <Container maxWidth="md">
            <div className='destCenter'>
                <span className='destHeader1'>Welcome.</span>
                <br/>
                <span className='destHeader2'>Choose your Destiny</span>
            </div>
            <div className='space'/>
            <Grid container spacing={1} className='boxGrouping'>
                <Grid item xs={6} md={6}>
                    <div className='destBox1'>
                        <span className='destBoxHeader'>Trade</span>
                        <span className='destBoxText'>Swap, stake, yield your favourite tokens on our exchange</span>
                    </div>
                </Grid>
                <Grid item xs={6} md={6}>
                    <div className='destBox2'>
                        <span className='destBoxHeader'>Merch</span>
                        <span className='destBoxText'>Get your favourite Galaxy merchandise</span>
                    </div>
                </Grid>
            </Grid>
            <div className='boxSpace'/>
            <Grid container spacing={1} className='boxGrouping'>
                <Grid item xs={6} md={6}>
                    <div className='destBox3'>
                        <span className='destBoxHeader'>Learn</span>
                        <span className='destBoxText'>We explain everything you need to know about crypto</span>
                    </div>
                </Grid>
                <Grid item xs={6} md={6}>
                    <div className='destBox4'>
                        <span className='destBoxHeader'>Jobs</span>
                        <span className='destBoxText'>We explain everything you need to know about crypto</span>
                    </div>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Destiny
