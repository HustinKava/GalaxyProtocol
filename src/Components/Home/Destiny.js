import React from 'react';
import { Container, Grid } from '@material-ui/core';
import '../../Styles/Destiny.css';
import Trade from '../../Assets/Trade-icon.png';
import Learn from '../../Assets/Learn-icon.png';
import Rocket from '../../Assets/Rocket-icon.png';
import Wallet from '../../Assets/Wallet-icon.png';
import Jobs from '../../Assets/Jobs-icon.png';
import Merch from '../../Assets/Merch-icon.png';

function Destiny() {
    return (
        <Container maxWidth="lg">
            <div className='destCenter'>
                <span className='destHeader1'>Welcome.</span>
                <br/>
                <span className='destHeader2'>Choose your Destiny</span>
            </div>
            <div className='space'/>

            {/* Boxes */}
            <Grid container spacing={1} className='boxGrouping'>
                <Grid item xs={6} md={4} className='boxBottomSpace'>
                    <div className='destBox1'>
                        <div className='boxSpace'/>
                        <img src={Trade} alt='Trade' className='imgTrade'/>
                        <span className='destBoxHeader'>Trade</span>
                        <span className='destBoxText'>Swap, stake, yield your favourite tokens on our exchange</span>
                    </div>
                </Grid>
                <Grid item xs={6} md={4}>
                    <div className='destBox2'>
                        <img src={Learn} alt='Trade' className='imgLearn'/>
                        <span className='destBoxHeader'>Learn</span>
                        <span className='destBoxText'>We explain everything you need to know about crypto</span>
                    </div>
                </Grid>

            <Grid item xs={6} md={4}>
                <div className='destBox3'>
                    <img src={Rocket} alt='Trade' className='imgRocket'/>
                    <span className='destBoxHeader'>Launch</span>
                    <span className='destBoxText'>Launch your own token. It’s easier than you think</span>
                </div>
            </Grid>

            <Grid item xs={6} md={4}>
                <div className='destBox4'>
                    <img src={Wallet} alt='Trade' className='imgWallet'/>
                    <span className='destBoxHeader'>Wallet</span>
                    <span className='destBoxText'>Create your own Galaxy Wallet and store GALAXIA</span>
                </div>
            </Grid>

            <Grid item xs={6} md={4}>
                <div className='destBox5'>
                    <img src={Jobs} alt='Trade' className='imgJobs'/>
                    <span className='destBoxHeader'>Jobs</span>
                    <span className='destBoxText'>Get your favourite Galaxy Merch</span>
                </div>
            </Grid>
            <Grid item xs={6} md={4}>
                <div className='destBox6'>
                    <img src={Merch} alt='Trade' className='imgMerch'/>
                    <span className='destBoxHeader'>Merch</span>
                    <span className='destBoxText'>Get your favourite Galaxy merchandise</span>
                </div>
            </Grid>

            </Grid>
        </Container>
    )
}

export default Destiny
