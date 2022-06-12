import React from 'react';
import './css/signin.css'
import axios from 'axios';
import config from './../config.json';
function signinreq(){
  var str,pass,
  userName = document.getElementById('userEmail'),
  passWord = document.getElementById('userPass'); 
if (userName != null) {
    str = userName.value;
    pass = passWord.value;
}
else {
    str = null;
}
console.log(str,pass);
  axios.post(config.signInReq,{
      "username": str,
      "password": pass
  }).then(function (response) {
    console.log(response)
    if(response.data.error){
      alert(response.data.message);
      console.log("error")

    }else{
      let token = response.data.data.token;
      window.localStorage.token = token;
      window.location.href = "mylist";
    }
 
  })
  .catch(function (error) {
    console.log(error);
  });

}
export default function SignIn() {
  return <div>
    <div classNameName="content">
  <div className="head">
    <h1>Login</h1>
  </div>
  <div className="inputs">
    <input type="email" id="userEmail" placeholder="Email" /><br/>
    <input type="password" id="userPass" placeholder="password" /><br/>
    <input type="submit" onClick={signinreq} value="Login"/>
  </div>
</div>
  </div>;
}
