import React from 'react';
import ProfileCard from './ProfileCard';
import { profileInfo } from './profileInfo';

const OurTeam = () => {
  return (
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
  );
};

export default OurTeam;
