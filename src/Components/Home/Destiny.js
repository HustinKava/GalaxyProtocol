import React from 'react';
import { Container } from '@material-ui/core';
import Trade from '../../Assets/SafeGalaxy-icon.png';
import Learn from '../../Assets/Learn-icon.png';
// import Rocket from '../../Assets/Rocket-icon.png';
// import Wallet from '../../Assets/Wallet-icon.png';
// import Jobs from '../../Assets/Jobs-icon.png';
import Merch from '../../Assets/Merch-icon.png';
import { NavLink } from 'react-router-dom';

function Destiny() {
  return (
    <div className="home-sub-container">
      <Container maxWidth="md">
        <div className="destCenter">
          <span className="destHeader destHeader--1">Welcome.</span>
          <br />
          <span className="destHeader destHeader--2">Choose your Destiny</span>
        </div>
      </Container>

      {/* Boxes */}
      <div className="boxGrouping-container">
        <div className="boxGrouping">

          <div className="destBox-container">
            <div className="destBox destBox--1">
              <img src={Trade} alt="Trade" className="destBox__image destBox__safeGalaxyImg" />
              <span className="destBox__header">Buy SafeGalaxy</span>
              <span className="destBox__text">
              Get in on the on the Galaxia Presale: Buy SafeGalaxy
              </span>
            </div>
          </div>

          <NavLink to='/GalaxyUniversity' className='test'>
            <div className="destBox-container">
              <div className="destBox destBox--2">
                <img src={Learn} alt="Learn" className="destBox__image" />
                <span className="destBox__header">Learn</span>
                <span className="destBox__text">
                  We explain everything you need to know about crypto
                </span>
              </div>
            </div>
          </NavLink>

          {/* <div className="destBox-container">
            <div className="destBox destBox--3">
              <img src={Rocket} alt="Launch" className="destBox__image" />
              <span className="destBox__header">Launch</span>
              <span className="destBox__text">
                Launch your own token. It’s easier than you think
              </span>
            </div>
          </div> */}

          {/* <div className="destBox-container">
            <div className="destBox destBox--4">
              <img src={Wallet} alt="Wallet" className="destBox__image" />
              <span className="destBox__header">Wallet</span>
              <span className="destBox__text">
                Create your own Galaxy Wallet and store GALAXIA
              </span>
            </div>
          </div> */}

          {/* <div className="destBox-container">
            <div className="destBox destBox--5">
              <img src={Jobs} alt="Jobs" className="destBox__image" />
              <span className="destBox__header">Jobs</span>
              <span className="destBox__text">
                Get your favourite <br /> Galaxy Merch
              </span>
            </div>
          </div> */}

          <div className="destBox-container">
            <div className="destBox destBox--6">
              <img src={Merch} alt="Merch" className="destBox__image" />
              <span className="destBox__header">Merch</span>
              <span className="destBox__text">
                Get your favourite Galaxy merchandise
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Destiny;
