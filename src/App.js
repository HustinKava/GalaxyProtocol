import Home from './Pages/Home'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Jobs from './Pages/Jobs.js'
import PositionDetails from './Pages/PositionDetails.js'
import GPEcosystem from './Pages/GPEcosystem.js'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Jobs" component={Jobs} />
        <Route exact path="/PositionDetails" component={PositionDetails} />
        <Route exact path="/GPEcosystem" component={GPEcosystem} />
      </Switch>
    </Router>

  );
}

export default App;
