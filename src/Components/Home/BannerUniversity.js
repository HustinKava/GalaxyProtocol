import React from 'react';
import { Grid } from '@material-ui/core';
import '../../Styles/BannerUniversity.css';
import Placeholder from '../../Assets/663x344.png';

function Banner2() {
    return (
        <div className="bannerTwoContainer" id='footerUniversity'>
            <Grid container spacing={0} className='fadeRight'>
                <Grid item xs={12} md={6}>
                    <div>
                        <img src={Placeholder} alt='Placeholder' className='placeholder' />
                    </div>
                </Grid>
                <Grid item xs={12} md={6} className='gridPadding contentContainer'>
                    <div className='bannerTitleContainer'>
                        <span className='banHeaderTwo'>Galaxy</span>
                        <span className='banHeaderTwo2'>university</span>
                    </div>
                    <span className='banDesc'>Rest, interact & create. Galaxystation it’s designed for you to relax, interact with other people from our community and above all to show off your creative talent. Oh and earn tokens.</span>
                    <div className='bannerButtonContainer'>
                        <button className='btnLearn btns'>Learn more</button>
                    </div>
                    <div className='space' />
                </Grid>
            </Grid>
        </div>
    )
}

export default Banner2
