import logo from './logo.svg';
import './App.css';
import Projile from "./Projile";

import { Router, Route, Link ,NavLink, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="two">   
          <h1> Select an account </h1>
          </div>
          <div className= 'three'>
            <div className="four">
              <ul>
              <li><Link to="/Projile" >Leanne Graham</Link></li>
              <hr/>
              <li><a href="#" className="li2">Leanne Graham</a></li>
              <hr/>
              <li><a href="#" className="li3">Leanne Graham</a></li>
              <hr/>
              <li><a href="#" className="li4">Leanne Graham</a></li>
              <hr/>
              <li><a href="#" className="li5">Leanne Graham</a></li>
              <hr/>
              <li><a href="#" className="li6">Leanne Graham</a></li>
              <hr/>
              <li><a href="#" className="li7">Leanne Graham</a></li>
              <hr/>
              <li><a href="#" className="li8">Leanne Graham</a></li>
              <hr/>
              <li><a href="#" className="li9">Leanne Graham</a></li>
              <hr/>
              <li><a href="#" className="li10">Leanne Graham</a></li>
              <hr/>
              <li><a href="#"  className="li11">Leanne Graham</a></li>
              </ul>
            </div>
          </div>
      </header>
    </div>
  );
}

export default App;
