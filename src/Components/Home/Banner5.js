import React from 'react';
import { Grid } from '@material-ui/core';
import Discord from '../../Assets/Discord-art-1.png';
import '../../Styles/Banner5.css';

function Banner5() {
    return (
        <Grid container spacing={0} className='fadeRight'>
            <Grid item xs={12} md={6}>
                <img src={Discord} alt='Discord' className='discord' />
            </Grid>
            <Grid item xs={12} md={6} className='gridPadding contentContainer'>
                <div className='bannerTitleContainer'>
                    <span className='banHeaderDiscord'>STAY CONNECTED WITH US</span>
                    <br />
                    <span className='banHeaderDiscord2'>ON DISCORD</span>
                </div>
                <span className='banDesc2'>Join our Discord channel to keep up with the latest updates and news about everything we do and interact with one of our developers.</span>
                <div className='bannerButtonContainer'>
                    <button className='btnDiscord btns'>Join now</button>
                </div>
            </Grid>
        </Grid>
    )
}

export default Banner5
