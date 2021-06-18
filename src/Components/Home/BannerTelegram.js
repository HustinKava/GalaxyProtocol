import React from 'react';
import { Grid } from '@material-ui/core';
import Telegram from '../../Assets/Telegram-banner.png';

function Banner4() {
  return (
    <div className="banner-container" id="footerTelegram">
      <Grid container spacing={0} className="fadeLeft">
        <Grid item xs={12} md={6} className="ban-gridPadding ">
          <div className="bannerTitleContainer">
            <span className="banHeader-alt banHeader-alt--1">
              STAY CONNECTED WITH US
            </span>
            <br></br>
            <span className="banHeader-alt banHeader-alt--2">On Telegram</span>
          </div>
          <span className="banDesc banDesc--2">
            Join our Telegram channel to keep up with the latest updates and
            interact with one of our developers.
          </span>
          <div className="bannerButtonContainer">
            <button className="ban-button ban-button--telegram">
              Join now
            </button>
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <img className="telegram" src={Telegram} alt="Telegram" />
        </Grid>
      </Grid>
    </div>
  );
}

export default Banner4;
