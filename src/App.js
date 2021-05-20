import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';

import EventTable from './components/Dashboard/EventTable';
import Homepage from './components/Home/HomePage';
import FormAddEvent from './components/AddEvent/FormAddEvent';
import DataTable from './Pages/DataTable/index';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route exact path="/home">
            <Homepage />
          </Route>
          <Route exact path="/add-event">
            <FormAddEvent />
          </Route>
          <Route exact path="/dashboard">
          {/* <EventTable /> */}
            <DataTable />
          </Route>
        </Switch>

      </Router>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
