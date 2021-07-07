import React from 'react';
import TeamHeader from '../Components/MeetOurTeam/TeamHeader';
import OurTeam from '../Components/MeetOurTeam/OurTeam';
// import { Container } from '@material-ui/core';

const MeetOurTeam = () => {
  return (
    // <Container maxWidth='xl'>
      <div className="mainContainer">
        <TeamHeader />
        <OurTeam />
      </div>
    // </Container>
  );
};

export default MeetOurTeam;
