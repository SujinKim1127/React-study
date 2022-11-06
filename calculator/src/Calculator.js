import React, { useState } from "react";
import { Display } from "./Components/Display";
import { Buttons } from "./Components/Buttons";
import './style.css'

function calculate(n1, operator, n2) {
    let rst = 0;
    if(operator === "+"){
        rst = Number(n1) + Number(n2);
    }
    else if(operator === "-"){
        rst = Number(n1) - Number(n2);
    }
    else if(operator === "*"){
        rst = Number(n1) * Number(n2);
    }
    else if(operator === "/"){
        rst = Number(n1) / Number(n2);
    }
    return rst;
  }
  
  let point = 0;      // 소수점 연속으로 눌림 방지
  let cnt = 0;        // 연속으로 enter 눌렀을때 계산

export const Calculator = () => {
    const [first, setFirst] = useState("");
    const [second, setSecond] = useState("");
    const [result, setResult] = useState("");
    const [operator, setOper] = useState("");



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
      };
      
    const getOper = (e) => {
        setFirst(result);
        setOper(e.target.value);
        setResult("");          
        point = 0;
    }
    
    const getPoint = (e) => {
        if(point === 0) setResult('.');
        if(first === "") setResult('.');
        point++;
      }
    
    const getResult = () => {
        cnt++;
        let num;
        console.log("F", first)
        console.log("s", second)
        console.log("o", operator)
        // 첫번째 계산
        if(cnt === 1) num = calculate(first, operator, second);
        // enter 여러번 누르면
        if(cnt > 1) num = calculate(result, operator, second);

        setResult(num)
    }

    const setZero = (e) => {
        setFirst("");
        setSecond("");
        setOper("");
        setResult("");
        cnt = 0;
    }


    return (
    <div class="container">
        <div class="calculator">
            <Display result={result}/>
            <Buttons setZero={setZero} getResult={getResult} getNum={getNum} getOper={getOper} getPoint={getPoint} />
        </div>
    </div>
    );
}