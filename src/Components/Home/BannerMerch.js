import React from 'react';
import { Grid } from '@material-ui/core';
import Hoodies from '../../Assets/hoodie-resize.png';
import '../../Styles/BannerMerch.css';

function Banner3() {
    return (
        <Grid container spacing={0} className='fadeRight' id='footerMerchandise'>
            <Grid item xs={12} md={6}>
                <div className="merchImage">
                    <img src={Hoodies} alt='Hoodies' className='hoodies' />
                </div>
            </Grid>
            <Grid item xs={12} md={6} className='gridPadding contentContainer'>
                <div className='bannerTitleContainer'>
                    <span className='banHeaderTwo'>Galaxy</span>
                    <span className='banHeaderTwo2'>Merch</span>
                </div>
                <span className='banDesc'>Intergalactic merch for everybody. Shop now to get limited edition Galaxy pieces.</span>
                <div className='bannerButtonContainer'>
                    <button className='btnMerch btns'>Shop now</button>
                </div>
                <div className='space' />
            </Grid>
        </Grid>
    )
}

export default Banner3
