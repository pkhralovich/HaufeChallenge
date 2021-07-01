/*External or react libraries*/
import React from 'react';
import ReactDOM from 'react-dom';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

/*Components and pages*/
import Login from './pages/Login/Login.js';
import NotFound from './pages/NotFound/NotFound.js';
import Characters from './pages/Characters/Characters.js';

/*Others*/
import './assets/index.css';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path={["/", "/login"]} render={(props) => (<Login {...props} showLogin={true}/>)}/>
        <Route path="/signup" render={(props) => (<Login {...props} showLogin={false}/>)} />
        <Route path="/characters" component={Characters} />
        <Route component={NotFound}/>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);