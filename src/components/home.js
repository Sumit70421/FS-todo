import * as React from "react";
import Header from './header.js'
import { Routes, Route, Link } from "react-router-dom";
import './css/home.css'
class Home extends React.Component {
  // redirect(path){
  //   window.location.href = path;
  // }
  render() {
    return<div> 
    <h1>This is Home page</h1>;
      <div className="NavBar"><Link to="/add"><h1>ADDD</h1></Link>
      <Link to="/sub"><h1>Sub</h1></Link>
      <Link to="/mult"><h1>Mult</h1></Link>
      <Link to="/div"><h1>Div</h1></Link>
      </div>
      <Link to="/signin"><button id="signIn" id="button1" class="button1 gray">Sign In</button></Link>
      <Link to="/signup"><button id="signIn" id="button1" class="button1 gray">Sign Up</button></Link>
    </div>
  }
}

export default Home;