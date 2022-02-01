import './App.css';
import React from 'react';
import Home from './pages/HomePage';
import Check from "./pages/Check"
import Drop from "./pages/Drop"
import Radio from "./pages/Radio"
import { Switch, Route} from "react-router-dom";



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Router testing</h1>
      </header>
      
      <Switch>
        <Route exact path="/" render={(props) => <Home {...props}/>}/>
        <Route path="/Check" render={(props) => <Check {...props}/>}/>
        <Route path="/Drop" render={() => <Drop/>}/>
        <Route path="/Radio" render={() => <Radio/>}/>
      </Switch>
      <footer>
      <strong>Copyright Filip J</strong>
      </footer>
    </div>
  );
}

export default App;
