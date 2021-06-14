import React from 'react';
import { Grid } from '@material-ui/core';
import '../../Styles/Banner.css';
import Newsletter from '../../Components/Home/Newsletter';
import Swap2 from '../../Assets/Galaxy-Swap_580x131.png';
import Laptop from '../../Assets/GalaxySwap-mobile-laptop-mock-up.png';
import Hoodies from '../../Assets/Hoodies.png';
import Discord from '../../Assets/Discord-art-1.png';
import Telegram from '../../Assets/Telegram-banner.png';
import Placeholder from '../../Assets/663x344.png';

const Banners = () => {;
    return (
        <div>
            {/* Banner 1 */}
            <Grid container spacing={0} className='fadeLeft'>
                <Grid item xs={6} className='gridPadding'>
                    <div className='banTopSpace'/>
                    <img src={Swap2} alt='Swap2' className='swapLogo'/>
                    <div className='banSpace'/>
                    <span className='banDesc'>We present to you our newest product within the Blockchain space. Trade your favourite de-fi token in an Intergalactic way.</span>
                    <div className='banSpace'/>
                    <button className='btnSwap'>Use Galaxyswap</button>
                    <div className='banOutSpace'/>
                </Grid>
                <Grid item xs={6}>
                    <div className='imageOne'>
                        <img src={Laptop} alt='Laptop' />
                    </div>
                </Grid>
            </Grid>

            {/* Banner 2 */}
            <Grid container spacing={0} className='fadeRight'>
                <Grid item xs={6}>
                    <img src={Placeholder} alt='Placeholder' className='placeholder'/>
                </Grid>
                <Grid item xs={6} className='gridPadding'>
                    <div className='banOutSpace'/>
                    <div className='moveTextRight'>
                    <span className='banHeaderTwo'>Galaxy</span>
                    <span className='banHeaderTwo2'>university</span>
                    <div className='banSpace'/>
                    <span className='banDesc'>Rest, interact & create. Galaxystation it’s designed for you to relax, interact with other people from our community and above all to show off your creative talent. Oh and earn tokens.</span>
                    <div className='banSpace'/>
                    <button className='btnLearn'>Learn more</button>
                    <div className='banOutSpace'/>
                    </div>
                </Grid>
            </Grid>

            {/* Newsletter subscription */}
            <div className='space'/>
            <Newsletter/>

            {/* Banner 3 */}
            <Grid container spacing={0} className='fadeRight'>
                <Grid item xs={6}>
                    <img src={Hoodies} alt='Hoodies' className='hoodies'/>
                </Grid>
                <Grid item xs={6} className='gridPadding'>
                    <div className='banMerchSpace'/>
                    <div className='moveTextRight'>
                    <span className='banHeaderTwo'>Galaxy</span>
                    <span className='banHeaderTwo2'>Merch</span>
                    <div className='banSpace'/>
                    <span className='banDesc'>Intergalactic merch for everybody. Shop now to get limited edition Galaxy pieces.</span>
                    <div className='banSpace'/>
                    <button className='btnMerch'>Shop now</button>
                    <div className='banMerchSpace'/>
                    </div>
                </Grid>
            </Grid>

            {/* Banner 4 */}
            <Grid container spacing={0} className='fadeLeft'>
                <Grid item xs={6} className='gridPadding'>
                    <div className='banOutSpace'/>
                    <span className='banHeaderThree'>STAY CONNECTED WITH US</span>
                    <br/>
                    <span className='banHeaderThree2'>ON TELEGRAM</span>
                    <div className='banSpace'/>
                    <span className='banDesc2'>Join our Telegram channel to keep up with the latest updates and interact with one of our developers.</span>
                    <div className='banSpace'/>
                    <button className='btnTelegram'>Join now</button>
                    <div className='banOutSpace'/>
                </Grid>
                <Grid item xs={6}>
                    <img className='telegram' src={Telegram} alt='Telegram'/>
                </Grid>
            </Grid>

            {/* Banner 5 */}
            <Grid container spacing={0} className='fadeRight'>
                <Grid item xs={6}>
                    <img src={Discord} alt='Discord' className='discord'/>
                </Grid>
                <Grid item xs={6} className='gridPadding2'>
                    <div className='banDiscordSpace'/>
                    <div className='moveTextRight'>
                    <span className='banHeaderThree'>STAY CONNECTED WITH US</span>
                    <br/>
                    <span className='banHeaderThree2'>ON DISCORD</span>
                    <div className='banSpace'/>
                    <span className='banDesc2'>Join our Discord channel to keep up with the latest updates and news about everything we do and interact with one of our developers.</span>
                    <div className='banSpace'/>
                    <button className='btnDiscord'>Join now</button>
                    <div className='banOutSpace'/>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
};

export default Banners;
