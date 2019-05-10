import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Supplier from './Supplier';
const routing = (
  <Router>
    <div>
      <Route exact path="/home" component={App} />
      <Route path="/supplier/:id" component={App} />
      <Route path="/sisense" component={App} />
      <Route path="/tableau" component={App} />
      <Route path="/clicdata" component={App} />
      <Route path="/quicksight" component={App} />
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById('root'));
//ReactDOM.render(<App />, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
