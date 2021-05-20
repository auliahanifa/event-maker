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
    </div>
  );
}

export default App;
