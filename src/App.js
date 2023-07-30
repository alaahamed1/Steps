import React from "react";
import { useState } from "react";

import "../src/style.css";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

function App() {
  // const step = 2;
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function handlePrevios() {
    if (step > 1) setStep(step - 1);
    // updating state based on the current state
    // setStep((s)=> s+1)
  }
  function handleNext() {
    if (step < 3) setStep(step + 1);
  }
  function handleclose() {
    setIsOpen(!isOpen);
        // updating state based on the current state
    // setStep((is)=> is+1)
  }
  return (
    <>
      <button className="close" onClick={handleclose}>&times;</button>
      {isOpen ? (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>
          <p className="message">
            step {step} : {messages[step - 1]}
          </p>
          <div className="buttons">
            <button
              style={{ background: "#7950f2", color: "#fff" }}
              onClick={handlePrevios}
            >Previos</button>
            <button
              style={{ background: "#7950f2", color: "#fff" }}
              onClick={handleNext}>
              Next</button>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default App;
