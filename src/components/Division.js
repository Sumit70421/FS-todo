import React, { Component } from 'react';
import Home from './header.js'
export class Division extends Component {
  
  constructor(){
      super()
      this.state = {
          result : 0,
      }
  }
  add(){
    let n1 = document.getElementById("num1").value    
    let n2 = document.getElementById("num2").value 
    this.setState ({result:parseInt(n1)/parseInt(n2)})
  }
  render() {
    return <div>
    <Home name="Division"/>
    <input type="Number" id="num1" />
    <input type="Number" id="num2" />
    <button onClick={this.add.bind(this)}>Multiply</button>
    <p>Result is : {this.state.result}</p>
    </div>;
  }
}

export default Division;

// import React from 'react';
// import Home from './header.js'

// export default function Division() {
//   return <div>
//   <Home name="Division"/>
//   Hi</div>;
// }
