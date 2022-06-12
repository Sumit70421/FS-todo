import React from 'react';
import { Link } from "react-router-dom";
import './css/signup.css'
import config from './../config.json';
import axios from 'axios';
function signupHit(){
    var FirstN = document.getElementById('Fname').value;
    var LastN = document.getElementById('Lname').value;
    var Eadd= document.getElementById('Email').value;
    var userN = document.getElementById('uName').value;
    var pass = document.getElementById('password').value;
    axios.post(config.signUpReq,{
      "First_name": FirstN,
      "last_name": LastN,
      "emailadd": Eadd,
      "username": userN,
      "password": pass
  }).then(function (response) {
    console.log(response)
  })
  .catch(function (error) {
    console.log(error);
  });

}

export default function Signup() {
  return <div>
    <section class="login">
  <div class="container">
    <h3 class="title">Sign up</h3>
    
  
    <p class="separator"><span>&nbsp;</span>Or<span>&nbsp;</span></p>
  
    <div class="form-group">
        <label for="Fname"></label>
        <input  id="Fname" placeholder="First Name"/>          
      </div>
      <div class="form-group">
        <label for="Lname"></label>
        <input  id="Lname" placeholder="Last Name"/>          
      </div>
      <div class="form-group">
        <label for="Email"></label>
        <input type="Email" id="Email" placeholder="Email Address"/>          
      </div>
      <div class="form-group">
        <label for="Uname"></label>
        <input  id="uName" placeholder="UserName"/>          
      </div>
      <div class="form-group">
        <label for="password"></label>
        <input type="password" id="password" placeholder="Password"/>          
      </div>
      
      
      <button onClick={signupHit}>Sign up</button>
    
    
    <p class="additional-act">Already have an account? <Link to="/signin"><span> Sign in </span></Link></p>
    
    
  </div>
</section>
  </div>;
}
