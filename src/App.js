import React, { Component } from 'react';
import './App.css';
import background from "../src/pictures/background.jpg"
import github from '../src/pictures/github.png'; 
import linkedin from '../src/pictures/linkedin.png'; 



class App extends Component {
  render () {
  return (
    <>
    <div className="App" style={{ backgroundImage: `url(${background})` }}
    >
      <p id="links">
      
      <a href="https://github.com/oddtomas"><img src={github} alt="github" width="50" height="50" /></a>
      
        <a href="https://www.linkedin.com/in/thomas-nguyen-9665761a7/"> <img src={linkedin} alt="linkedin" width="50" height="50" /></a>
    </p>
      <h1 id="head">DEV.</h1>
</div>
</>
  )
  }
}

export default App;
