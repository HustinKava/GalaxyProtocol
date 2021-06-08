import Home from './Pages/Home'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Jobs from './Pages/Jobs.js'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/jobs" component={Jobs} />
      </Switch>
    </Router>

  );
}

export default App;
