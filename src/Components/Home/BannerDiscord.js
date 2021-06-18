import React from 'react';
import { Grid, Container } from '@material-ui/core';
import Discord from '../../Assets/Discord-art-1.png';

function Banner5() {
  return (
    <Grid container spacing={0} className="fadeRight" id="footerDiscord">
      <Grid item xs={12} md={6}>
        <img src={Discord} alt="Discord" className="discord" />
      </Grid>
      <Grid
        item
        xs={12}
        md={6}
        className="ban-gridPadding ban-contentContainer"
      >

<Container maxWidth="sm">


        <div className="bannerTitleContainer">
          <span className="banHeader-alt banHeader-alt--1">
            STAY CONNECTED WITH US
          </span>
          <br />
          <span className="banHeader-alt banHeader-alt--2">ON DISCORD</span>
        </div>
        <span className="banDesc banDesc--2">
          Join our Discord channel to keep up with the latest updates and news
          about everything we do and interact with one of our developers.
        </span>
        <div className="bannerButtonContainer">
          <button className="ban-button ban-button--discord">Join now</button>
        </div>

</Container>

      </Grid>
    </Grid>
  );
}

export default Banner5;
