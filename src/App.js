import './App.css';
import Index from './components/Index';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Features from './components/Features';
import Docs from './components/Docs';

function App() {
  return (
    <div className="App">
    <Router>
      <Switch>
        <Route exact path='/' component={Index} />
        <Route path='/features' component={Features} />
        <Route path='/docs' component={Docs} />
     </Switch>
    </Router>
     </div>
  );
}

export default App;
