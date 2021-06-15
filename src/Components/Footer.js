import React from 'react';
import Grid from '@material-ui/core/Grid';
import '../Styles/Footer.css';

import { NavLink } from 'react-router-dom';
import Logo from '../Assets/logo-white_1_25.png';

import ScrollIntoView from './ScrollIntoView'
function Footer() {

    return (


        <div>
            <ScrollIntoView>
                <Grid container spacing={1} className="footerSectionContainer">

                    {/* Footer company logo and name */}
                    <Grid item xs={12} md={4} >
                        <div>
                            <img src={Logo} alt='Logo' className='footerLogo' />
                            <p className="footerAddress">Country name here </p>
                            <p className="footerAddress">Address line here, ZIP CODE</p>
                        </div>
                    </Grid>

                    {/* Footer items */}
                    <Grid item xs={12} md={2} >
                        <hr className="footerDivider"/>
                        <p className='footerHeading'>Products</p>
                        {/* <br /> */}
                        <p className='footerText'>SafeGalaxy</p>
                        <p className='footerText'>GalaxySwap</p>
                        <p className='footerText'>GalaxyStation</p>
                        <p className='footerText'>Nebula Launchpad</p>
                        <p className='footerText'>Galaxy University</p>
                        <p className='footerText'>Galaxy Merchandise</p>
                    </Grid>
                    <Grid item xs={12} md={2}>
                        <hr />
                        <p className='footerHeading'>Developers</p>
                        {/* <br /> */}
                        <p className='footerText'>Documentation</p>
                        <p className='footerText'>Whitepaper V1</p>
                        <p className='footerText'>Audit</p>
                        <p className='footerText'>Partnership Overview</p>
                        <p className='footerText'>Terms & Conditions</p>
                        <p className='footerText'>Privacy & Policy</p>
                    </Grid>
                    <Grid item xs={12} md={2}>
                        <hr />
                        <p className='footerHeading'>Community</p>
                        {/* <br /> */}
                        <p className='footerText'>Discord</p>
                        <p className='footerText'>Telegram</p>
                        <p className='footerText'>Twitter</p>
                    </Grid>
                    <Grid item xs={12} md={2}>
                        <hr />
                        <p className='footerHeading'>About</p>
                        {/* <br /> */}
                        <p className='footerText'>About Us</p>
                        <p className='footerText'>Meet Our Team</p>
                        <NavLink to='/jobs' className='footLinks'>
                            <p className='footerText'>Jobs</p>
                        </NavLink>
                        <p className='footerText'>FAQ</p>
                        <p className='footerText'>Presskit</p>
                    </Grid>
                </Grid>
            </ScrollIntoView>
            <div className='space' />
            <p className='copyright'>Copyright © {new Date().getFullYear()} Cryptonite Technologies LLC</p>
        </div>
    )
};

export default Footer;