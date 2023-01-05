import { createStore } from "redux";

const initalState = { counter: 0, showCounter: true}

const counterReducer = (state = initalState, action) => {
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
      showCounter: state.showCounter
    };
  }


  // 하드 코딩
  // if (action.type === "increaseby5") {
  //   return {
  //     counter: state.counter + 5,
  //   };
  // }

  if (action.type === "increase") {
    return {
      counter: state.counter + action.amount,
    };    // action으로부터 증가시키고자 하는 값 얻기
  }


  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
    };
  }

  if(action.type === 'toggle') {
    return {
      showCounter: !state.showCounter,
      counter: state.counter
    }
  }

  return state;
};

const store = createStore(counterReducer);
// createStore는 포인터가 필요하다
// 리듀서 함수에서 매개변수로 -> counterReducer 생성하기

export default store;