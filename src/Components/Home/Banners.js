import React from 'react';
import { Grid } from '@material-ui/core';
import '../../Styles/Banner.css';
import Newsletter from '../../Components/Home/Newsletter';
import Swap2 from '../../Assets/Galaxy-Swap_580x131.png';
import Laptop from '../../Assets/GalaxySwap-mobile-laptop-mock-up.png';
import Hoodies from '../../Assets/hoodie-resize.png';
import Discord from '../../Assets/Discord-art-1.png';
import Telegram from '../../Assets/Telegram-banner.png';
import Placeholder from '../../Assets/663x344.png';

const Banners = () => {
    ;
    return (
        <div>
            <div class="bannerOneContainer">
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
                    <Grid item xs={12} md={6} justify="center">
                        <div className="imageOne">
                            <img src={Laptop} alt='Laptop' className='laptop' />
                        </div>
                    </Grid>
                </Grid>
            </div>

            {/* Banner 2 */}
            <div className="bannerTwoContainer">
                <Grid container spacing={0} className='fadeRight'>
                    <Grid item xs={12} md={6}>
                        <div className="universityImage">
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
                    </Grid>
                </Grid>
            </div>

            {/* Newsletter subscription */}
            <div className='space' />
            <Newsletter />

            {/* Banner 3 */}
            <Grid container spacing={0} className='fadeRight'>
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
            {/* Banner 4 */}
            <div className="bannerFourContainer">
                <Grid container spacing={0} className='fadeLeft'>
                    <Grid item xs={12} md={6} className='gridPadding '>
                        <div className='bannerTitleContainer'>
                            <span className='banHeaderThree'>STAY CONNECTED WITH US</span>
                            <br></br>
                            <span className='banHeaderThree2'>On Telegram</span>
                        </div>
                        <span className='banDesc2'>Join our Telegram channel to keep up with the latest updates and interact with one of our developers.</span>
                        <div className='bannerButtonContainer'>
                            <button className='btnTelegram btns'>Join now</button>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        {/* <div className="telegramImg"> */}
                        <img className='telegram' src={Telegram} alt='Telegram' />
                        {/* </div> */}
                    </Grid>
                </Grid>
            </div>


            {/* Banner 5 */}
            <Grid container spacing={0} className='fadeRight'>
                <Grid item xs={12} md={6}>
                    <img src={Discord} alt='Discord' className='discord' />
                </Grid>
                <Grid item xs={12} md={6} className='gridPadding2 contentContainer'>
                    <div className='bannerTitleContainer'>
                        <span className='banHeaderThree'>STAY CONNECTED WITH US</span>
                        <br />
                        <span className='banHeaderThree2'>ON DISCORD</span>
                    </div>
                    <span className='banDesc2'>Join our Discord channel to keep up with the latest updates and news about everything we do and interact with one of our developers.</span>
                    <div className='bannerButtonContainer'>
                        <button className='btnDiscord btns'>Join now</button>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
};

export default Banners;
