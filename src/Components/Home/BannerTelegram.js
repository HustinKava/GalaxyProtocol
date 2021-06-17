import React from 'react';
import { Grid } from '@material-ui/core';
import Telegram from '../../Assets/Telegram-banner.png';
import '../../Styles/BannerTelegram.css';

function Banner4() {
    return (
        <div className="bannerFourContainer" id='footerTelegram'>
            <Grid container spacing={0} className='fadeLeft'>
                <Grid item xs={12} md={6} className='gridPadding '>
                    <div className='bannerTitleContainer'>
                        <span className='banHeaderTelegram'>STAY CONNECTED WITH US</span>
                        <br></br>
                        <span className='banHeaderTelegram2'>On Telegram</span>
                    </div>
                    <span className='banDesc2'>Join our Telegram channel to keep up with the latest updates and interact with one of our developers.</span>
                    <div className='bannerButtonContainer'>
                        <button className='btnTelegram btns'>Join now</button>
                    </div>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img className='telegram' src={Telegram} alt='Telegram' />
                </Grid>
            </Grid>
        </div>
    )
}

export default Banner4
