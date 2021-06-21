import React from 'react';
import { Grid, Container, Box } from '@material-ui/core';
import Placeholder from '../../Assets/663x344.png';

function BannerUniversity() {
  return (
    <div className="banner-container" id="footerUniversity">
      <Grid container spacing={0} className="fadeRight">
          <Box clone order={{ xs: 2, sm: 2, md: 1 }}>
            <Grid item xs={12} md={6}>
                  <img src={Placeholder} alt="Placeholder" className="placeholder" />
                  <div className="bannerButtonMobileContainer">
                    <Container maxWidth="sm">
                      <button className="ban-button ban-button--learn btn-mobile">
                        Learn more
                      </button>
                    </Container>
                  </div>
            </Grid>
          </Box>

          <Box clone order={{ xs: 1, sm: 1, md: 2 }}>
            <Grid item xs={12} md={6} className="ban-gridPadding ban-contentContainer">
              <Container maxWidth="sm" className='mobileCenter'>
                <div className="bannerTitleContainer universityText">
                  <span className="banHeader banHeader--1">Galaxy</span>
                  <span className="banHeader banHeader--2">university</span>
                </div>
                <span className="banDesc banDesc--1">
                  Rest, interact & create. Galaxystation it’s designed for you to
                  relax, interact with other people from our community and above all
                  to show off your creative talent. Oh and earn tokens.
                </span>
                <div className="bannerButtonContainer">
                  <button className="ban-button ban-button--learn btn-desktop">Learn more</button>
                </div>
                <div className="universitySpace" />
              </Container>
            </Grid>
          </Box>
      </Grid>
    </div>
  );
}

export default BannerUniversity;
