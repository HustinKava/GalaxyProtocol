import React from 'react';
import { Grid, Container } from '@material-ui/core';
import Swap2 from '../../Assets/Galaxy-Swap_580x131.png';
import Laptop from '../../Assets/GalaxySwap-mobile-laptop-mock-up.png';
import { NavLink } from 'react-router-dom';


function BannerSwap() {

  return (
    <div>
      <div className="banner-container">
        <Grid container spacing={0} className="fadeLeft">
          <Grid item xs={12} md={6} className="ban-gridPadding">
            <Container maxWidth="sm" className='mobileCenter'>
              <div className="bannerLogoContainer">
                <img src={Swap2} alt="Swap2" className="swapLogo" />
              </div>
              <span className="banDesc banDesc--1">
                We present to you our newest product within the Blockchain space.
                Trade your favourite de-fi token in an Intergalactic way.
              </span>
              <br />
              <div className="bannerButtonContainer">

                <NavLink to="/#">
                  <button className="ban-button ban-button--swap btn-desktop">
                    Coming Soon
                  </button>          
                  </NavLink>

              </div>
            </Container>
          </Grid>
          <Grid item xs={12} md={6}>
            <div className='centered-images'>
              <img src={Laptop} alt="Laptop" className="laptop" />
            </div>
            <div className="bannerButtonMobileContainer">
              <Container maxWidth="sm">
                <button className="ban-button ban-button--swap btn-mobile">
                Coming Soon
                </button>
              </Container>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default BannerSwap;
