import './App.css';
import Navbar from './components/Navbar';
import MainBody from './components/MainBody';
import Register from './components/Register';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Login from './components/Login';
import ToDo from './components/ToDo';
// import Register from './components/Register';

function App() {
  return (
    <>
    <Router>
    <div className="bgIMG">
      <Navbar/>
      <Routes>
        <Route exact path="/" element = {<MainBody/>}/>
        <Route exact path = "/Register" element = {<Register/>}/>
        <Route exact path = "/Login" element = {<Login/>}/>
        <Route exact path = "/ToDo" element = {<ToDo/>}/>
        </Routes>
      </div>
    </Router>
    </>

  );
}

export default App;
