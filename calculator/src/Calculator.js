import React, { useState } from "react";
import './style.css'

export const Calculator = () => {
    const [first, setFirst] = useState("");
    const [second, setSecond] = useState("");
    const [result, setResult] = useState("");
    const [operator, setOper] = useState("");
    const [process, setProcess] = useState("");



    const getNum = (e) => {
        setResult((prev) => prev + e.target.value);
        console.log("r", result)

            // 첫번째 숫자
        if(first === "" || operator === ""){
            console.log("first 입력")
            setFirst((prev) => prev + e.target.value);
        }
        // 두번째 숫자
        else{
            console.log("op=", operator);
            console.log("두번째 입력")
            setSecond((prev) => prev + e.target.value);
        }
        setProcess((prev) => prev + e.target.value);
      };
      
    const getOper = (e) => {
    console.log("res", result)
    setFirst(result);
    console.log("op F", first)
    setOper(e.target.value);
    console.log("op=", operator);
    setResult("");          
    setProcess((prev) => prev + " " + e.target.value + " ");

    }
    
    const getPoint = (e) => {
    
    }
    
    const getResult = () => {
        let num;
        console.log("F", first)
        console.log("s", second)
        console.log("o", operator)
        if(operator === "+"){
            num = (Number(first) + Number(second))
            console.log(result);
        }
        else if(operator === "-"){
            num = (Number(first) - Number(second))
        }
        else if(operator === "*"){
            num = (Number(first) * Number(second))
        }
        else if(operator === "/"){
            num = (Number(first) / Number(second))
        }
        setResult(num)

        setProcess((prev) => prev + " =");
    }

    const setZero = (e) => {
    setFirst("");
    setSecond("");
    setOper("");
    setResult("");
    setProcess("")
    }


    return (
    <div class="container">
        <div class="calculator">
            <div value={result} className="calculator__display--for-advanced">
                <div className="calculator__process">{process}</div>
                {result}
            </div>
            <div className="calculator__buttons">
                <div className="clear__and__enter">
                    <button onClick={setZero} className="clear">AC</button>
                    <button className="calculate" onClick={getResult}>Enter</button>
                </div>
                <div className="button__row">
                    <button value={9} onClick={getNum} className="number">9</button>
                    <button value={8} onClick={getNum} className="number">8</button>
                    <button value={7} onClick={getNum} className="number">7</button>
                    <button value="+" onClick={getOper} className="operator">+</button>
                </div>
                <div className="button__row">
                    <button value={4}  onClick={getNum} className="number">4</button>
                    <button value={5}  onClick={getNum} className="number">5</button>
                    <button value={6}  onClick={getNum} className="number">6</button>
                    <button value="-"  onClick={getOper} className="operator">-</button>
                </div>
                <div className="button__row">
                    <button value={1} onClick={getNum} className="number">1</button>
                    <button value={2} onClick={getNum} className="number">2</button>
                    <button value={3} onClick={getNum} className="number">3</button>
                    <button value="*" onClick={getOper} className="operator">*</button>
                </div>
                <div className="button__row">
                    <button value="." onClick={getPoint} className="decimal">.</button>
                    <button value={0} onClick={getNum} className="number double">0</button>
                    <button value="/" onClick={getOper} className="operator">/</button>
                </div>
            </div>
        </div>
    </div>
    );
}