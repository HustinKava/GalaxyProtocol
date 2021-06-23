import React, { useState } from 'react';
import Sidebar from '../src/Components/Navbar/Sidebar';
import Navbar from '../src/Components/Navbar/Navbar';
import Home from './Pages/Home';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Jobs from './Pages/Jobs.js';
import PositionDetails from './Pages/PositionDetails.js';
import GPEcosystem from './Pages/GPEcosystem.js';
import FAQ from './Pages/FAQ.js';
import Documentation from './Pages/Documentation.js';
import GalaxyUniversity from './Pages/GalaxyUniversity.js';

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
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Jobs" component={Jobs} />
        <Route exact path="/PositionDetails" component={PositionDetails} />
        <Route exact path="/GPEcosystem" component={GPEcosystem} />
        <Route exact path="/FAQ" component={FAQ} />
        <Route exact path="/Documentation" component={Documentation} />
        <Route exact path="/GalaxyUniversity" component={GalaxyUniversity} />
      </Switch>
    </Router>
  );
}

export default App;
