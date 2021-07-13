import React from 'react';
import HeaderImage from '../../Assets/banners/university-img.png';

const UniversityHeader = () => {
  return (
    <div className="headerContainer">
      <div className="galaxyUniversityHeader">
        <div className="galaxyUniversityHeader__titleContainer">
          <h1 className="galaxyUniversityHeader__h1">Galaxy </h1>
          <span className="galaxyUniversityHeader__span">
            UNIVERSE&#8209;ITY
          </span>
        </div>

        <div>
          <p className="galaxyUniversityHeader__intro">
            Learn all about blockchain &#38; crypto. It doesn’t matter if you
            are a Galaxy Rookie who just started their space journey or if
            you’re a Master Chief looking to test your knowledge, we have it
            all.
          </p>
        </div>

        {/* <div className='university-button'>
            <button className="ban-button university-start btn-desktop">
              Start here
            </button>
          </div> */}
      </div>

      <div>
        <img src={HeaderImage} className="uni-headerImage" alt=""></img>
      </div>
    </div>
  );
};

export default UniversityHeader;
