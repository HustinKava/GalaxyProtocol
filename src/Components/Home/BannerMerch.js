import React from 'react';
import { Grid } from '@material-ui/core';
import Hoodies from '../../Assets/hoodie-resize.png';

function Banner3() {
  return (
    <Grid container spacing={0} className="fadeRight" id="footerMerchandise">
      <Grid item xs={12} md={6}>
        <div className="merchImage">
          <img src={Hoodies} alt="Hoodies" className="hoodies" />
        </div>
      </Grid>
      <Grid
        item
        xs={12}
        md={6}
        className="ban-gridPadding ban-contentContainer"
      >
        <div className="bannerTitleContainer">
          <span className="banHeader banHeader--1">Galaxy</span>
          <span className="banHeader banHeader--2">Merch</span>
        </div>
        <span className="banDesc banDesc--1">
          Intergalactic merch for everybody. Shop now to get limited edition
          Galaxy pieces.
        </span>
        <div className="bannerButtonContainer">
          <button className="ban-button ban-button--merch">Shop now</button>
        </div>
        <div className="space" />
      </Grid>
    </Grid>
  );
}

export default Banner3;
