import React, { useState } from "react";
import classes from "./Calculator.module.css";

function Calculator() {
  const [currentResult, setCurrentResult] = useState("");
  const [prevResult, setPrevResult] = useState("");
  const [choseOperand, setChoseOperand] = useState("");

  const displayNumbers = (number: string) => {
    if (number === "," && currentResult.includes(",")) {
      return;
    }
    setCurrentResult(currentResult + number);
  };

  const pickOperand = (operand: string) => {
    if (choseOperand !== "") {
      return;
    }

    setChoseOperand(operand);
    setPrevResult(currentResult);
    setCurrentResult("");
  };

  const equalHandler = () => {
    let computation: number;
    const prev = parseFloat(prevResult);
    const current = parseFloat(currentResult);

    switch (choseOperand) {
      case "/":
        computation = prev / current;
        break;
      case "*":
        computation = prev * current;
        break;
      case "-":
        computation = prev - current;
        break;
      case "+":
        computation = prev + current;
        break;
      default:
        return;
    }

    if (computation % 1 === 0) {
      setCurrentResult(Math.round(computation).toString());
    } else {
      setCurrentResult(computation.toFixed(6).toString());
    }

    setChoseOperand("");
    setPrevResult("");
  };

  const clearResult = () => {
    setCurrentResult("");
    setPrevResult("");
    setChoseOperand("");
  };

  const deleteHandler = () => {
    const newString = currentResult;

    const updatedResult = newString.slice(0, -1);
    setCurrentResult(updatedResult);
  };
  return (
    <>
      <div className={classes.result}>
        <span>{currentResult ? currentResult : "0"}</span>
      </div>
      <div className={classes.calculator}>
        <button onClick={clearResult} className={classes.top}>
          AC
        </button>
        <button className={classes.top}>%</button>
        <button onClick={deleteHandler} className={classes.top}>
          DEL
        </button>

        <button onClick={() => pickOperand("/")} className={classes.operator}>
          ÷
        </button>

        <button onClick={() => displayNumbers("7")} className={classes.number}>
          7
        </button>
        <button onClick={() => displayNumbers("8")} className={classes.number}>
          8
        </button>
        <button onClick={() => displayNumbers("9")} className={classes.number}>
          9
        </button>

        <button onClick={() => pickOperand("*")} className={classes.operator}>
          ×
        </button>

        <button onClick={() => displayNumbers("4")} className={classes.number}>
          4
        </button>
        <button onClick={() => displayNumbers("5")} className={classes.number}>
          5
        </button>
        <button onClick={() => displayNumbers("6")} className={classes.number}>
          6
        </button>

        <button onClick={() => pickOperand("-")} className={classes.operator}>
          -
        </button>

        <button onClick={() => displayNumbers("1")} className={classes.number}>
          1
        </button>
        <button onClick={() => displayNumbers("2")} className={classes.number}>
          2
        </button>
        <button onClick={() => displayNumbers("3")} className={classes.number}>
          3
        </button>

        <button onClick={() => pickOperand("+")} className={classes.operator}>
          +
        </button>

        <button onClick={() => displayNumbers("0")} className={classes.two}>
          0
        </button>
        <button onClick={() => displayNumbers(",")} className={classes.number}>
          ,
        </button>

        <button onClick={equalHandler} className={classes.operator}>
          =
        </button>
      </div>
    </>
  );
}

export default Calculator;
