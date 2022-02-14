import React, { useState } from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import Sidebar from './Components/Navbar/Sidebar';
import Navbar from './Components/Navbar/Navbar';
import MobileNav from './Components/Navbar/MobileNav';
// import { Modal as MainModal } from './Components/Modal/Modal';
// import { modalContent } from './Components/Modal/modalContent';
import Footer from './Components/Footer';

import Home from './Pages/Home';
// import Jobs from './Pages/Jobs.js';
// import PositionDetails from './Pages/PositionDetails.js';

// import GPEcosystem from './Pages/GPEcosystem.js';
import FAQ from './Pages/FAQ';
import GalaxyUniversity from './Pages/GalaxyUniversity';
import MeetOurTeam from './Pages/MeetOurTeam';
import AboutUs from './Pages/AboutUs';
import MigrationDocs from './Pages/MigrationDocs';
import Buyback from './Pages/Buyback';
import Whitepaper from './Pages/Whitepaper';
// import Presskit from './Pages/Presskit';

// Importing articles
import ArticlePage from './Pages/Articles4Search/ArticlePage';

import './sass/main.scss';

function App() {
  // useState to determine if the mobile menu has been toggled
  const [isOpen, setIsOpen] = useState(false);

  // If the toggle has been activated it will change the state to true or back to false on second click
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <Router>
      {/* <MainModal modalContent={modalContent.mainModal} /> */}
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar />
      <MobileNav toggle={toggle} />
      <Switch>
        <Route exact path="/" component={Home} />
        {/* <Route exact path="/Jobs" component={Jobs} /> */}
        {/* <Route exact path="/PositionDetails" component={PositionDetails} /> */}
        {/* <Route exact path="/GPEcosystem" component={GPEcosystem} /> */}
        <Route exact path="/FAQ" component={FAQ} />
        <Route exact path="/GalaxyUniversity" component={GalaxyUniversity} />
        {/* <Route exact path="/Article" component={Article} /> */}
        <Route exact path="/buyback1234" component={Buyback} />

        {/* Articles */}

        <Route path="/articles/:articleId" component={ArticlePage} />

        <Route exact path="/meetourteam" component={MeetOurTeam} />
        <Route exact path="/aboutus" component={AboutUs} />
        <Route exact path="/migrationdocumentation" component={MigrationDocs} />
        <Route exact path="/whitepaper" component={Whitepaper} />
        {/* <Route exact path="/presskit" component={Presskit} /> */}
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
