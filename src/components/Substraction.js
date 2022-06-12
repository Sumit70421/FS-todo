import React, { Component } from 'react';
import Home from './header.js'
export class Substraction extends Component {
  
  constructor(){
      super()
      this.state = {
          result : 0,
      }
  }
  add(){
    let n1 = document.getElementById("num1").value    
    let n2 = document.getElementById("num2").value 
    this.setState ({result:parseInt(n1)-parseInt(n2)})
  }
  render() {
    return <div>
    <Home name="Substraction"/>
    <input type="Number" id="num1" />
    <input type="Number" id="num2" />
    <button onClick={this.add.bind(this)}>Sub</button>
    <p>Result is : {this.state.result}</p>
    </div>;
  }
}

export default Substraction;

// import React from 'react';
// import Home from './header.js'

// export default function Substraction() {
//   return <div>
//   <Home name="Substraction"/>
//   Hi</div>;
// }
