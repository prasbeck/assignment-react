import React, { Component } from "react";
import Dashboard from "./components/Dashboard";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { GAMES } from "./shared/games";

class App extends Component{

  constructor(props){
    super(props);

    this.state = {
      games : GAMES
    };
  }
  render(){
    return(
      <div className="app">
        <Navbar />
        <Home />
        <Dashboard games={this.state.games}/>
      </div>
    )
  }
}



export default App;
