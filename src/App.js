import React, { useState } from 'react';
import './App.css';



const Button = (props) => {
  return (
    <button style={{backgroundColor:"red", margin:"10px"}} onClick={props.textKey}
    className="btn">Tab {props.incrementValue}</button>
  );
} 

const Display = (props) => {
  return (
    <div style={{margin:"10px", fontSize:"50px", paddingBottom:"30px", fontFamily:"Courier", backgroundColor:"white"}} className="display">
      {props.message}
    </div>
  );
}

function App() {
  const [textNumber, setTextNumber ] = useState([0]);
  const changeLogger = (incValue) => {
    setTextNumber(incValue)
  }
  const textOptions = [
    'Tab',
    'Project',
    'Using',
    'React'
  ]
  return (
    <div className="App container">
      <Button textKey={() => changeLogger(0)} incrementValue="A"/>
      <Button textKey={() => changeLogger(1)} incrementValue="B"/>
      <Button textKey={() => changeLogger(2)} incrementValue="C"/>
      <Button textKey={() => changeLogger(3)} incrementValue="D"/>
      <Display message={textOptions[textNumber]} />
    </div>
  );
}

export default App;
