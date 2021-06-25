import React from 'react';
import { Grid, Container, Box } from '@material-ui/core';
import Discord from '../../Assets/Discord-art-1.png';

function BannerDiscord() {
  return (
    <Grid container spacing={0} className="fadeRight" id="footerDiscord">
      <Box clone order={{ xs: 2, sm: 2, md: 1 }}>
        <Grid item xs={12} md={6}>
          <div className='centered-images'>
            <img src={Discord} alt="Discord" className="discord" />
          </div>
          <div className="bannerButtonMobileContainer">
            <Container maxWidth="sm">
              <a href="https://discord.com/invite/dq7m6R7UAz" target="_blank" rel="noreferrer">
                <button className="ban-button ban-button--discord btn-mobile">
                  Join now
                </button>
              </a>
            </Container>
          </div>
        </Grid>
      </Box>
      <Box clone order={{ xs: 1, sm: 1, md: 2 }}>
        <Grid item xs={12} md={6} className="ban-gridPadding ban-contentContainer">
          <Container maxWidth="sm" className='mobileCenter'>
            <div className="bannerTitleContainer2">
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
              <a href="https://discord.com/invite/dq7m6R7UAz" target="_blank" rel="noreferrer">
                <button className="ban-button ban-button--discord btn-desktop">Join now</button>
              </a>
            </div>
          </Container>
        </Grid>
      </Box>
    </Grid>
  );
}

export default BannerDiscord;
