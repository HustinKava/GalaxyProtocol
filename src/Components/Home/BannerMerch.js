import React from 'react';
import { Grid, Container, Box } from '@material-ui/core';
import Hoodies from '../../Assets/banners/merch-banner.png';
import HoodiesMobile from '../../Assets/banners/merch-banner-mobile.png';

function BannerMerch() {
  return (
    <Grid container spacing={0} className="fadeRight" id="footerMerchandise">
      <Box clone order={{ xs: 2, sm: 2, md: 1 }}>
        <Grid item xs={12} md={6}>
          <Container maxWidth="sm">
            <img src={Hoodies} alt="Hoodies" className="hoodies" />
          </Container>
          <img
            src={HoodiesMobile}
            alt="Hoodies Mobile"
            className="hoodiesMobile"
          />
          <div className="bannerButtonMobileContainer">
            <Container maxWidth="sm">
              <button className="ban-button ban-button--merch btn-mobile">
                <a
                  href="https://intergalacticmerch.myshopify.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="merch-button-link"
                >
                  Shop now
                </a>
              </button>
            </Container>
          </div>
        </Grid>
      </Box>
      <Box clone order={{ xs: 1, sm: 1, md: 1 }}>
        <Grid
          item
          xs={12}
          md={6}
          className="ban-gridPadding ban-contentContainer"
        >
          <Container maxWidth="sm" className="mobileCenter">
            <div className="bannerTitleContainer">
              <span className="banHeader banHeader--1">Galaxy</span>
              <span className="banHeader banHeader--2">Merch</span>
            </div>
            <span className="banDesc banDesc--1">
              Intergalactic merch for everybody. Shop now to get limited edition
              Galaxy pieces.
            </span>
            <div className="bannerMerchButtonContainer">
              <button className="ban-button ban-button--merch btn-desktop">
                <a
                  href="https://intergalacticmerch.myshopify.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="merch-button-link"
                >
                  Shop now
                </a>
              </button>
            </div>
            <div className="merchSpace" />
          </Container>
        </Grid>
      </Box>
    </Grid>
  );
}

export default BannerMerch;
