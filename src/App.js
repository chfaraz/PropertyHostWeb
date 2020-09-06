<<<<<<< HEAD
import React from "react";
import "./App.css";

import Buy from "./Components/Buy";
import Rent from "./Components/Rent";
import Sell from "./Containers/Sell";
import Nav from "./Components/Nav";
import Home from "./Components/Home";
import AgentList from "./Components/AgentList";
import MyListing from "./Containers/MyListing";
import AgentHomePage from "./Components/AgentHomePage";
import LiveSearch from "./Components/LiveSearch";
import Login from "./Components/Login";
import AgentSignUp from "./Components/AgentSignUp";
import ThreeDTourRequest from "./Components/ThreeDTourRequest";

import { Route, Switch } from "react-router-dom";
=======
import React from 'react';
import logo from './logo.svg';
import './App.css';
>>>>>>> parent of 931231c... my first commit

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
      <Nav />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/buy" exact component={Buy} />
        <Route path="/sell" component={Sell} />
        <Route path="/rent" component={Rent} />
        <Route path="/agentList" component={AgentList} />
        <Route path="/myListing" component={MyListing} />
        <Route path="/agentHomePage" component={AgentHomePage} />
        <Route path="/login" component={Login} />
        <Route path="/agentSignUp" component={AgentSignUp} />
        <Route path="/threeDTourRequest" component={ThreeDTourRequest} />
        <Route path="/liveSearch" component={LiveSearch} />
      </Switch>
=======
      <header className="App-header">
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
      </header>
>>>>>>> parent of 931231c... my first commit
    </div>
  );
}

export default App;
