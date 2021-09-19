import React, { Component } from "react";
import Header from './Components/Header/Header.js';
//We use the below statement to link css to our html files
import './App.css';

class App extends Component{
  render(){
    return(
      <div className='body'>
        <Header />
      </div>
    )
  }
}

export default App;
