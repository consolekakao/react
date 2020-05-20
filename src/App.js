import React, { Component } from 'react';
import './App.css';
import aa from './TOC.js';

class Subject extends Component{
 

  btclick = () => {
    document.writeln(aa());
  }
  render(){
    return(
        <button onClick={this.btclick}>click</button>
    );
  }
}

function App() {  

  return (
    
     <div className="App-frame">
     <input type="text"/><br></br>
     <input type="text"/><br></br>
     <Subject></Subject>
    </div>
  );
}

export default App;

