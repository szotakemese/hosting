import React from 'react';
import './App.css';
import Calc from './components/calc.js'

function App() {
  return (
    <Calc typeName1="Number 1" typeName2="Number 2" btnName="Get sum" resultName="Result"></Calc>
  );
}

export default App;
