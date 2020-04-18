import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './css/App.scss';
import Home from './pages/Home'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Main from './pages/Main'
import Edit from './pages/Edit'


function App() {
  return (
    <Router>
      <Switch>
        <Route path='/edit/:id'>
          <Edit />
        </Route>
        <Route path='/dashboard'>
          <Main />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
  </Router>
  );
}

export default App;
