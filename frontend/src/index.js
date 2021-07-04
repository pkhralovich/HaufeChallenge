/*External or react libraries*/
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

/*Components and pages*/
import Login from './pages/Login/Login.js';
import NotFound from './pages/NotFound/NotFound.js';
import Characters from './pages/Characters/Characters.js';

/*State*/
import store from './services/store.js';

/*Others*/
import './assets/index.css';

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <Router>
        <Switch>
          <Route exact path={["/", "/login"]} render={(props) => (<Login {...props} showLogin={true}/>)}/>
          <Route path="/signup" render={(props) => (<Login {...props} showLogin={false}/>)} />
          <Route path="/characters" component={Characters} />
          <Route component={NotFound}/>
        </Switch>
      </Router>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);