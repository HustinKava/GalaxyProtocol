import React from 'react';
import { Grid, Container, Box } from '@material-ui/core';
import UniversityImage from '../../Assets/university-img.png';
import UniversityIcon from '../../Assets/Learn-icon.png'; 

function BannerUniversity() {
  return (
    <div className="banner-container" id="footerUniversity">
      <Grid container spacing={0} className="fadeRight">
          <Box clone order={{ xs: 2, sm: 2, md: 1 }}>
            <Grid item xs={12} md={6}>
              <Container maxWidth="sm">
                <img src={UniversityImage} alt="University Logo" className="university-image" />
              </Container>
                    <div className="bannerButtonMobileContainer">
                <Container maxWidth="sm">
                <a href="#/galaxyUniversity" className='ban-university-link'>
                  <button className="ban-button ban-button--learn btn-mobile">
                    Learn more
                  </button>
                  </a>
                </Container>
              </div>
            </Grid>
          </Box>

          <Box clone order={{ xs: 1, sm: 1, md: 2 }}>
            <Grid item xs={12} md={6} className="ban-gridPadding ban-contentContainer">
              <Container maxWidth="sm" className='mobileCenter'>
                <div className="bannerTitleContainer universityText">
                  <img src={UniversityIcon} alt='University icon' className='universityIcon'/>
                  <span className="banUniversityHeader banUniversityHeader--1">Galaxy</span>
                  <span className="banUniversityHeader banUniversityHeader--2">university</span>
                </div>
                <span className="banDesc banDesc--1">
                  Rest, interact & create. Galaxystation is designed for you to
                  relax, interact with other people from our community and above all
                  to show off your creative talent. Oh and earn tokens.
                </span>
                <div className="bannerButtonContainer">
                  <a href="#/galaxyUniversity">
                  <button className="ban-button ban-button--learn btn-desktop">Learn more</button>
                  </a>
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
