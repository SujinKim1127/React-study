// import { useState } from "react";
import "./App.css";
import { createStore } from "redux";
import { Provider, useSelector, useDispatch } from "react-redux";
// Provider: 사용한 컴포넌트 가장 바깥쪽에
// useSelector: number갑을 Left3에서 표시하기 위해 사용
// reducer: store의 state를 어떻게 바꿀것인지 결정
function reducer(currentState, action) {
  // 현재 state값    어떻게 바꿀것인지 요청

  if (currentState === undefined) {
    // state가 정의되지 않으면
    return {
      number: 1, // 기본값은 1이다.
    };
  }

  // 과거의 state를 복제하는 것
  const newState = { ...currentState };

  if(action.type === 'PLUS'){
    newState.number++;
  }
  // return 값은 새로운 state 값
  return newState;
}

// 변경하면 안되기 때문에 const로 선언
const store = createStore(reducer);

export default function App() {
  return (
    <div id="container">
      <h1>Root</h1>
      <div id="grid">
        <Provider store={store}>
          {/* Left1과 Right1은 store 사용 가능 */}
          <Left1></Left1>
          <Right1></Right1>
        </Provider>
      </div>
    </div>
  );
}

function Left1(props) {
  return (
    <div>
      <h1>Left1 : </h1>
      <Left2></Left2>
    </div>
  );
}

function Left2(props) {
  return (
    <div>
      <h1>Left2 : </h1>
      <Left3></Left3>
    </div>
  );
}

function Left3(props) {
  function f(state) {
      // state의 어떤값을 사용할것인지 작성
    return state.number;
  }

  // const number = useSelector(f);
  const number = useSelector((state)=>state.number);
  // useSelector는 함수를 입력받는다.
  // 화살표 함수도 가능

  return (
    <div>
      <h1>Left3 : {number}</h1>
    </div>
  );
}

function Right1(props) {
  return (
    <div>
      <h1>Right1</h1>
      <Right2></Right2>
    </div>
  );
}

function Right2(props) {
  return (
    <div>
      <h1>Right2</h1>
      <Right3></Right3>
    </div>
  );
}

function Right3(props) {
  // number값을 바꾸기 위해 dispatch 사용
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Right3</h1>
      <input type="button" value="+"
      onClick={() => {
        dispatch({type: "PLUS"})    // plus action 전달 -> reducer 호출됨
      }}  
      ></input>
    </div>
  );
}
