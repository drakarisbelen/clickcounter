import logo from './logo.svg';
import './App.css';
import freeCodeCampLogo from "../src/images/FreeCodeCamp_logo.png"
function App() {
  return (
    <div className="App">
      <div className="logo-container">
      <img className="freecodecamp-logo"
           alt ="logo-freecode"
           src={freeCodeCampLogo}>
      </img>
      </div>
    </div>
  );
}

export default App;
