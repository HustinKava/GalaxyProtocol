import Home from './Pages/Home'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Jobs from './Pages/Jobs.js'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Jobs" component={Jobs} />
      </Switch>
    </Router>

  );
}

export default App;
