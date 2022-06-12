import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Home from './components/home.js';
import Addition from './components/Addition.js'
import Substraction from './components/Substraction.js'
import Multiplication from './components/Multiplication.js'
import Division from './components/Division.js'
import SignIn from './components/SignIn.js'
import SignUp from './components/Signup.js'
import Mylists from './components/Mylists';
function App() {
  return (
    <div className="App">
    <Link to="/home"> <h1>Home</h1> </Link>
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/add" element={<Addition />} />
      <Route path="/sub" element={<Substraction />} />
      <Route path="/mult" element={<Multiplication/>} />
      <Route path="/div" element={<Division />} />
      <Route path="/mylist" element={<Mylists />} />

    </Routes>
    </div>
  );
}

export default App;