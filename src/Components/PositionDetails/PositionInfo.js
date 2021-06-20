// import JobCard from './JobCard'
import React from 'react';
import { Grid } from '@material-ui/core';

function PositionInfo() {
  return (
    <>
      <h3 className="positionDetailHeader">Job Title Here</h3>
      <div>
        <Grid container spacing={10}>
          <Grid item xs={12}>
            <img
              src="https://via.placeholder.com/1433x616"
              alt="placeholder"
            ></img>
          </Grid>
          <Grid item xs={12} md={7}>
            <h2 className="positionOverview">Overview</h2>
            <p className="positionDetailBody">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
            <p className="positionDetailBody">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the
            </p>
          </Grid>
          <Grid item xs={12} md={4}>
            <h2 className="contactInfo">
              <span className="contactInfo__span">Ready to Join Us?</span>
            </h2>
            <p className="contactDetails">
              Please have your resume/portfolio ready and send them to:
            </p>
            <p className="contactEmail">career@galaxyprotocol.io</p>
            <p className="contactEmail">
              Subject: Application for DYNAMIC JOB TITLE HERE
            </p>
            <p className="contactDetails">
              Please do not attach huge image/PDF files for your portfolio. We
              will only reivew portfolio websites.
            </p>
          </Grid>
          <Grid item xs={12} md={7}>
            <h3 className="positionDetailSubHead">Who we're looking for</h3>
            <p className="positionDetailBody">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </Grid>
          <Grid item xs={5}></Grid>
          <Grid item xs={12} md={7}>
            <h3 className="positionDetailSubHead">Areas of Responsibility</h3>
            <p className="positionDetailBody">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </Grid>
          <Grid item xs={5}></Grid>
          <Grid item xs={12} md={7}>
            <h3 className="positionDetailSubHead">
              Compensation, Situation, and Benefits
            </h3>
            <p className="positionDetailBody">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </Grid>
          <Grid item xs={5}></Grid>
          <Grid item xs={12} md={7}>
            <h3 className="positionDetailSubHead">What this position is not</h3>
            <p className="positionDetailBody">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default PositionInfo;
