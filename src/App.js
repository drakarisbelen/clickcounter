import './App.css';
import freeCodeCampLogo from "../src/images/FreeCodeCamp_logo.png"
import Button from './components/button';
import Counter from './components/Counter';
import {useState} from 'react';

function App() {

  //hook useState
  const [numClicks, setNumClicks] = useState(0);
  //funcion flecha mediante una constante
  const handleClick = () =>{
    console.log("Click")
    setNumClicks(numClicks+1) 
  };

  const resetCounter = ()=>{
    console.log("Reset")
    setNumClicks(0)
  };

  return (
    <div className="App">
      <div className="freecodecamp-logo-container">
      <img className="freecodecamp-logo"
           alt ="logo-freecode"
           src={freeCodeCampLogo}>
      </img>
      </div>
      <div className="main-container">
        <Counter numClicks={numClicks}></Counter>
        <Button texto = "Click" 
          isClickButton={true}
          handleClick={handleClick}
        >
        </Button>
        <Button texto = "Reset" 
          isClickButton={false}
          handleClick={resetCounter}
        >

        </Button>
      </div>
    </div>
  );
}

export default App;
