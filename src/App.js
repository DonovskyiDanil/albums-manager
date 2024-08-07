import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect, NavLink } from 'react-router-dom';
import Albums from './components/Albums/Albums';
import Users from './components/Users/Users';

import './App.css';

function App() {
  return (
    <Router>
      <div className="header">
        <ul>
          <li>
            <NavLink to='/albums'>Albums</NavLink>
          </li>
          <li>
            <NavLink to='/users' activeClassName='selected'>Users</NavLink>
          </li>
          <li>
            <NavLink to='/' activeClassName='selected'>Home</NavLink>
          </li>
        </ul>
      </div>
      <Switch>
        <Route path='/albums' component={Albums}>
        </Route>
        <Route path='/users'>
        <Users />
        </Route>
        <Route path='/' exact>
        <div className="home-footer">Home</div>
        <footer className="home-footer">2024</footer>
          </Route>
        <Route path='*'>
        <Redirect to='/users'></Redirect>
          </Route>
      </Switch>
    </Router>
  );
}

export default App;
