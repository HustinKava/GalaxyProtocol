import React from 'react';
import ProfileCard from './ProfileCard';
import { profileInfo } from './profileInfo';
// import { Container } from '@material-ui/core';

const OurTeam = () => {
  return (
        // <Container maxWidth='xl'>

    <div className="team-container">
      {profileInfo.map((profile) => {
        return (
          <ProfileCard
            name={profile.name}
            image={profile.image}
            jobTitle={profile.jobTitle}
            linkedIn={profile.linkedIn}
            alt={`${profile.name} linkedIn`}
          />
        );
      })}
    </div>
        // </Container>

  );
};

export default OurTeam;
