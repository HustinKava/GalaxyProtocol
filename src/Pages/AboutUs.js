import React from 'react';
import AboutUsHeader from '../Components/AboutUs/AboutUsHeader';
import AboutUsInfoCard from '../Components/AboutUs/AboutUsInfoCard';
import { aboutUsContent } from '../Components/AboutUs/aboutUsContent';

const AboutUs = () => {
  return (
    <div className="mainContainer">
      <AboutUsHeader />
      <AboutUsInfoCard content={aboutUsContent.mission} />
      <AboutUsInfoCard content={aboutUsContent.vision} />

      <h3 className="about-us-h3">Values</h3>

      <AboutUsInfoCard content={aboutUsContent.transparency} />
      <AboutUsInfoCard content={aboutUsContent.community} />
      <AboutUsInfoCard content={aboutUsContent.growth} />
      <AboutUsInfoCard content={aboutUsContent.abundance} />
      <AboutUsInfoCard content={aboutUsContent.fun} />
    </div>
  );
};

export default AboutUs;
