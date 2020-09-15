import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [input, setInput] = useState("");
  const [resultText, setResultText] = useState("");

  let [operand1, setOperand1] = useState(0);
  let [check1, setCheck1] = useState(false);
  let [operand2, setOperand2] = useState(0);
  let [check2, setCheck2] = useState(false);
  let [operand3, setOperand3] = useState(0);
  let [check3, setCheck3] = useState(false);

  let checkCount = 0;

  const addCheck = () => {
    
  }
  const validate = () => {
    console.log(check1)
    console.log(check2)
    console.log(check3)
    if ((check1 && check2) || (check2 && check3) || (check1 && check3)){
      return true;
    }
    alert("minimum active operand is 2!")
    return false;
  }

  const calculate = (operator) => {
    if (!validate()) {
      return;
    }
    operand1 = parseInt(operand1)
    operand2 = parseInt(operand2)
    operand3 = parseInt(operand3)

    switch (operator) {
          case '+':
            if (check1 && check2 && check3) {
              setResultText(operand1 + operand2 + operand3);
            } else if (check1 && check2 && !check3) {
              setResultText(operand1 + operand2);
            } else if (check1 && !check2 && check3) {
              setResultText(operand1 + operand3);
            } else if (!check1 && check2 && check3) {
              setResultText(operand2 + operand3);
            }
            break;
          case '-':
            if (check1 && check2 && check3) {
              setResultText(operand1 - operand2 - operand3);
            } else if (check1 && check2 && !check3) {
              setResultText(operand1 - operand2);
            } else if (check1 && !check2 && check3) {
              setResultText(operand1 - operand3);
            } else if (!check1 && check2 && check3) {
              setResultText(operand2 - operand3);
            }
            break;
          case '*':
            if (check1 && check2 && check3) {
              setResultText(operand1 * operand2 * operand3);
            } else if (check1 && check2 && !check3) {
              setResultText(operand1 * operand2);
            } else if (check1 && !check2 && check3) {
              setResultText(operand1 * operand3);
            } else if (!check1 && check2 && check3) {
              setResultText(operand2 * operand3);
            }
            break;
          case '/':
            if (check1 && check2 && check3) {
              setResultText(operand1 / operand2 / operand3);
            } else if (check1 && check2 && !check3) {
              setResultText(operand1 / operand2);
            } else if (check1 && !check2 && check3) {
              setResultText(operand1 / operand3);
            } else if (!check1 && check2 && check3) {
              setResultText(operand2 / operand3);
            }
            break;
    }
  };
  

  return (
    <div className="App">
      <div className="calc">
        <div className="textFields">
          <input type="text" value={operand1} onChange={(e) => setOperand1(e.target.value)} /> <input type="checkbox" value={check1} onChange={(e) => setCheck1(e.target.checked)} />  <br/>
          <input type="text" value={operand2} onChange={(e) => setOperand2(e.target.value)} /> <input type="checkbox" value={check2} onChange={(e) => setCheck2(e.target.checked)} />  <br/>
          <input type="text" value={operand3} onChange={(e) => setOperand3(e.target.value)} /> <input type="checkbox" value={check3} onChange={(e) => setCheck3(e.target.checked)} />  <br/>
        </div>
        <div className="buttons">
          <button onClick={() => calculate("+")}>+</button>
          <button onClick={() => calculate("-")}>-</button>
          <button onClick={() => calculate("*")}>x</button>
          <button onClick={() => calculate("/")}>/</button>
        </div>
        <div className="result">
        <label>Hasil:</label> <input disabled value={resultText} />
        </div>
      </div>
    </div>

  );
}

export default App;
