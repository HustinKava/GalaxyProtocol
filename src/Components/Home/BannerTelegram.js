import React from 'react';
import { Grid, Container } from '@material-ui/core';
import Telegram from '../../Assets/Telegram-banner.png';

function BannerTelegram() {
  return (
    <div className="banner-container" id="footerTelegram">
      <Grid container spacing={0} className="fadeLeft">
        <Grid item xs={12} md={6} className="ban-gridPadding ">
          <Container maxWidth="sm" className='mobileCenter'>
            <div className="bannerTitleContainer2">
              <span className="banHeader-alt banHeader-alt--1">
                STAY CONNECTED WITH US
              </span>
              <br></br>
              <span className="banHeader-alt banHeader-alt--2">ON TELEGRAM</span>
            </div>
            <span className="banDesc banDesc--2">
              Join our Telegram channel to keep up with the latest updates and
              interact with one of our developers.
            </span>
            <div className="bannerButtonContainer">
              <button className="ban-button ban-button--telegram btn-desktop">
                Join now
              </button>
            </div>
          </Container>
        </Grid>
        <Grid item xs={12} md={6}>
          <img className="telegram" src={Telegram} alt="Telegram" />
          <div className="bannerButtonMobileContainer">
            <Container maxWidth="sm">
              <button className="ban-button ban-button--telegram btn-mobile">
                Join Now
              </button>
            </Container>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default BannerTelegram;
