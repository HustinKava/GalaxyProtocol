import React from 'react';
import Grid from '@material-ui/core/Grid';
import '../Styles/Footer.css';
import { HashLink as Link } from 'react-router-hash-link';
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
                        {/* <NavLink to='/safegalaxy' className='footLinks'>     */}
                            <p className='footerText'>SafeGalaxy</p>
                        {/* </NavLink> */}
                        {/* <NavLink to='/galaxyswap' className='footLinks'> */}
                            <p className='footerText'>GalaxySwap</p>
                        {/* </NavLink> */}
                        {/* <NavLink to='/galaxystation' className='footLinks'> */}
                            <p className='footerText'>GalaxyStation</p>
                        {/* </NavLink> */}
                        {/* <NavLink to='/nebulalaunchpad' className='footLinks'> */}
                            <p className='footerText'>Nebula Launchpad</p>
                        {/* </NavLink> */}
                        <Link to='/#footerUniversity' className='footLinks'>
                            <p className='footerText'>Galaxy University</p>
                        </Link>
                        <Link to='/#footerMerchandise' className='footLinks'>
                            <p className='footerText'>Galaxy Merchandise</p>
                        </Link>
                    </Grid>

                    <Grid item xs={12} md={2}>
                        <hr />
                        <p className='footerHeading'>Developers</p>
                        <NavLink to='/documentation' className='footLinks'>
                            <p className='footerText'>Documentation</p>
                        </NavLink>
                        {/* <NavLink to='/whitepaperv1' className='footLinks'> */}
                            <p className='footerText'>Whitepaper V1</p>
                        {/* </NavLink> */}
                        {/* <NavLink to='/audit' className='footLinks'> */}
                            <p className='footerText'>Audit</p>
                        {/* </NavLink> */}
                        <NavLink to='/partnershipoverview' className='footLinks'>
                            <p className='footerText'>Partnership Overview</p>
                        </NavLink>
                        {/* <NavLink to='/terms&conditions' className='footLinks'> */}
                            <p className='footerText'>Terms & Conditions</p>
                        {/* </NavLink> */}
                        {/* <NavLink to='/privacy&policy' className='footLinks'> */}
                            <p className='footerText'>Privacy & Policy</p>
                        {/* </NavLink> */}
                    </Grid>

                    <Grid item xs={12} md={2}>
                        <hr />
                        <p className='footerHeading'>Community</p>
                        <Link to='/#footerDiscord' className='footLinks'>
                            <p className='footerText'>Discord</p>
                        </Link>
                        <Link to='/#footerTelegram' className='footLinks'>
                            <p className='footerText'>Telegram</p>
                        </Link>
                        {/* <Link to='/footerTwitter' className='footLinks'> */}
                            <p className='footerText'>Twitter</p>
                        {/* </Link> */}
                    </Grid>
                    <Grid item xs={12} md={2}>
                        <hr />
                        <p className='footerHeading'>About</p>
                        {/* <NavLink to='/aboutus' className='footLinks'> */}
                            <p className='footerText'>About Us</p>
                        {/* </NavLink> */}
                        {/* <NavLink to='/meetourteam' className='footLinks'> */}
                            <p className='footerText'>Meet Our Team</p>
                        {/* </NavLink> */}
                        <NavLink to='/jobs' className='footLinks'>
                            <p className='footerText'>Jobs</p>
                        </NavLink>
                        <NavLink to='/faq' className='footLinks'>
                            <p className='footerText'>FAQ</p>
                        </NavLink>
                        {/* <NavLink to='/presskit' className='footLinks'> */}
                            <p className='footerText'>Presskit</p>
                        {/* </NavLink> */}
                    </Grid>
                </Grid>
            </ScrollIntoView>
            <div className='space' />
            <p className='copyright'>Copyright © {new Date().getFullYear()} Cryptonite Technologies LLC</p>
        </div>
    )
};

export default Footer;