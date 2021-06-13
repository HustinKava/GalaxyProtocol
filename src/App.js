import Home from './Pages/Home'
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Jobs from './Pages/Jobs.js'
import PositionDetails from './Pages/PositionDetails.js'
import GPEcosystem from './Pages/GPEcosystem.js'
import FAQ from './Pages/FAQ.js'
import Documentation from './Pages/Documentation.js'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Jobs" component={Jobs} />
        <Route exact path="/PositionDetails" component={PositionDetails} />
        <Route exact path="/GPEcosystem" component={GPEcosystem} />
        <Route exact path="/FAQ" component={FAQ} />
        <Route exact path="/Documentation" component={Documentation} />
      </Switch>
    </Router>

  );
}

export default App;
