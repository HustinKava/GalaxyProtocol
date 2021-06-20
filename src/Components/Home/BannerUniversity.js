import React from 'react';
import { Grid, Container } from '@material-ui/core';
import Placeholder from '../../Assets/663x344.png';

function BannerUniversity() {
  return (
    <div className="banner-container" id="footerUniversity">
      <Grid container spacing={0} className="fadeRight">
        <Grid item xs={12} md={6}>
          <Container maxWidth="sm">          
              <img src={Placeholder} alt="Placeholder" className="placeholder" />
          </Container>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          className="ban-gridPadding ban-contentContainer"
        >
          <Container maxWidth="sm">
            <div className="bannerTitleContainer">
              <span className="banHeader banHeader--1">Galaxy</span>
              <span className="banHeader banHeader--2">university</span>
            </div>
            <span className="banDesc banDesc--1">
              Rest, interact & create. Galaxystation it’s designed for you to
              relax, interact with other people from our community and above all
              to show off your creative talent. Oh and earn tokens.
            </span>
            <div className="bannerButtonContainer">
              <button className="ban-button ban-button--learn">Learn more</button>
            </div>
            <div className="space" />
          </Container>
        </Grid>
      </Grid>
    </div>
  );
}

export default BannerUniversity;
