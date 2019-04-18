import React, { Component} from "react";
import {hot} from "react-hot-loader";
import { BasicPieChart } from 'exercises'
import "./App.css";

class App extends Component{
  render(){
    return(
      <div className="App">
        <h1> Nivo time! </h1>
        <BasicPieChart />
      </div>
    );
  }
}

export default hot(module)(App);