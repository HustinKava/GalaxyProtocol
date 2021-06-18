import React from 'react';
import { Grid, Container } from '@material-ui/core';
import Hoodies from '../../Assets/hoodie-resize.png';

function Banner3() {
  return (
    <Grid container spacing={0} className="fadeRight" id="footerMerchandise">
      <Grid item xs={12} md={6}>

      <Container maxWidth="sm">
          <img src={Hoodies} alt="Hoodies" className="hoodies" />
      </Container>

      </Grid>
      <Grid
        item
        xs={12}
        md={6}
        className="ban-gridPadding ban-contentContainer"
      >

<Container maxWidth="sm" className='bannerMerchTextPadding'>

        <div className="bannerTitleContainer">
          <span className="banHeader banHeader--1">Galaxy</span>
          <span className="banHeader banHeader--2">Merch</span>
        </div>
        <span className="banDesc banDesc--1">
          Intergalactic merch for everybody. Shop now to get limited edition
          Galaxy pieces.
        </span>
        <div className="bannerMerchButtonContainer">
          <button className="ban-button ban-button--merch">Shop now</button>
        </div>
        <div className="space" />

        </Container>


      </Grid>
    </Grid>
  );
}

export default Banner3;
