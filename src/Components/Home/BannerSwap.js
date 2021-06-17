import React from 'react';
import '../../Styles/BannerSwap.css';
import { Grid } from '@material-ui/core';
import Swap2 from '../../Assets/Galaxy-Swap_580x131.png';
import Laptop from '../../Assets/GalaxySwap-mobile-laptop-mock-up.png';

function Banner1() {
    return (
        <div>
            <div className="bannerOneContainer">
                {/* Banner 1 */}
                <Grid container spacing={0} className='fadeLeft'>
                    <Grid item xs={12} md={6} className='gridPadding'>
                        <div className='bannerLogoContainer'>
                            <img src={Swap2} alt='Swap2' className='swapLogo' />
                        </div>
                        <span className='banDesc'>We present to you our newest product within the Blockchain space. Trade your favourite de-fi token in an Intergalactic way.</span>
                        <div className='bannerButtonContainer'>
                            <button className='btnSwap btns'>Use Galaxyswap</button>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <div className="imageOne">
                            <img src={Laptop} alt='Laptop' className='laptop' />
                        </div>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default Banner1
