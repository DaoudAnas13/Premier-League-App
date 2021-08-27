import './App.css';
import HomePage from './Components/HomePage/HomePage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Standings from './Components/Standings/Standings';
import Teams from './Components/Teams/Teams';
import Scores from './Components/Scores/Scores';
import Highlights from './Components/Highlights/Highlights';

function App() {

  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/" exact >
            <HomePage />
          </Route>
          <Route path="/teams">
            <Teams />
          </Route>
          <Route path="/standings">
            <Standings />
          </Route>
          <Route path="/scores">
            <Scores />
          </Route>
          <Route path="/highlights">
            <Highlights />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
