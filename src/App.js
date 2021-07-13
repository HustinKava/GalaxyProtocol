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

// import Article from './Pages/Articles/Article.js';

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
// import DLTandBlockchain from './Pages/Articles/DLTandBlockchain'

import HistoryofDefi from './Pages/Articles/HistoryofDeFi';
import Staking from './Pages/Articles/Staking';
import ImpermanentLoss from './Pages/Articles/ImpermanentLoss';
import CeFiVsDeFi from './Pages/Articles/CeFiVsDeFi';
import DLTandBlockchain from './Pages/Articles/DLTandBlockchain';
import ETHvsBTC from './Pages/Articles/ETHvsBTC';
// import Farming from './Pages/Articles/Farming';
// import LiquidityandLPTokens from './Pages/Articles/LiquidityandLPTokens';
import SmartContractsEthVM from './Pages/Articles/SmartContractsEthVM';
// import ChartReading from './Pages/Articles/ChartReading';
// import ChartPatterns from './Pages/Articles/ChartPatterns';
import FlashLoans from './Pages/Articles/FlashLoans';
import OwnNFTs from './Pages/Articles/OwnNFTs';
import Bridging from './Pages/Articles/Bridging';
import CryptoWallets from './Pages/Articles/CryptoWallets';
import Slippage from './Pages/Articles/Slippage';
import BeginnerChart from './Pages/Articles/BeginnerChart';
import BinanceSmart from './Pages/Articles/BinanceSmart';

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
        <Route exact path="/HistoryofDefi" component={HistoryofDefi} />
        <Route exact path="/Staking" component={Staking} />
        <Route exact path="/ImpermanentLoss" component={ImpermanentLoss} />
        <Route exact path="/ETHvsBTC" component={ETHvsBTC} />
        {/* <Route exact path="/Farming" component={Farming} /> */}
        {/* <Route exact path="/LiquidityandLPTokens" component={LiquidityandLPTokens} /> */}
        {/* <Route exact path="/ChartReading" component={ChartReading} /> */}
        {/* <Route exact path="/ChartPatterns" component={ChartPatterns} /> */}
        <Route exact path="/FlashLoans" component={FlashLoans} />
        <Route exact path="/OwnNFTs" component={OwnNFTs} />
        <Route exact path="/Bridging" component={Bridging} />
        <Route exact path="/CryptoWallets" component={CryptoWallets} />
        <Route exact path="/CeFiVsDeFi" component={CeFiVsDeFi} />
        <Route exact path="/DLTandBlockchain" component={DLTandBlockchain} />
        <Route exact path="/slippage" component={Slippage} />
        <Route exact path="/beginnerchart" component={BeginnerChart} />
        <Route exact path="/binancesmart" component={BinanceSmart} />
        <Route
          exact
          path="/SmartContractsandtheEthereumVirtualMachine"
          component={SmartContractsEthVM}
        />

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
