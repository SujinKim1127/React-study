## Redux Toolkit

https://www.udemy.com/course/best-react/
강의를 듣고 정리

```jsx
import { createStore } from "redux";

const store = createStore(counterReducer);
```

`createStore`는 **포인터**가 필요하다
리듀서 함수에서 매개변수로 -> `counterReducer` 생성하기

<br>

```jsx
import { useSelector, useDispatch } from "react-redux";
```

`useStore`: 저장소에 직접 액세스 가능

`useSelector`: 사용하기 더 편리. 저장소가 관리하는 상태 부분을 우리가 자동으로 선택 가능

함수형 컴포넌트를 사용하지 않을 경우 `connect` 사용

<br>

```jsx
const dispatch = useDispatch();
```

`redux store`에 대한 `action`을 보낸다.

<br>

```jsx
const counter = useSelector((state) => state.counter);
```

- 저장소가 관리하는 데이터에 액세스
- 함수는 `react-redux`가 실행
- 매번 최신의 데이터를 받는다

<br>

### `connect` 와 클래스

```jsx
    incrementHandler() {}

    decrementHandler() {}

    toggleCounterHandler() {}

    render() {
        return (
            <main className="classes.counter">
                <h1>Redux Counter</h1>
                <h3 className="classes.value">{counter}</h3>
                <div>
                    <button onClick={this.incrementHandler}>Increment</button>
                    <button onClick={this.decrementHandler}>decrement</button>
                </div>
                <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
            </main>
        )

    }
```

`this.incrementHandler` 처럼 `this`를 넣어줘서 제대로 Hook 하기

```jsx
import { connect } from "react-redux";
```

`connect` : 클래스 기반 컴포넌트를 리덕스에 연결하는 것을 도와준다. 함수에서도 사용이 가능하지만, 함수는 `useDispatch`를 사용하는 것이 더 좋다.

`export default connect()(Counter)`
`connect`가 실행되면 새 함수를 value로 리턴 -> 그럼 다시 실행 -> 컴포넌트를 보냄(변수로 리턴된 함수로)
커넥트는 고차원 컴포넌트

<br>

### `action` 사용하기

```jsx
if (action.type === "increment") {
  return {
    counter: state.counter + 1,
  };
}
```
-> 하드코딩

⬇⬇ 입력값에 따라 증가시키고 싶은 값을 변경시키고 싶다면 ⬇⬇

```jsx
if (action.type === "increase") {
  return {
    counter: state.counter + action.amount,
  };
}

const increseHandler = () => {
  dispatch({ type: "increse", amount: 5 });
};
```
<br>

```jsx
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
      showCounter: state.showCounter
    };
  }
```
예전 state를 덮어쓰기 때문에 state를 업데이트 할 때는 항상 다른 state를 설정해야 한다.

-> `showCounter: state.showCounter`

<br>

**잘못된 예시**
```jsx
  if (action.type === "increment") {
    state.counter++;

    return state;
  }
  ```
이렇게 작성하지 않는 이유는 기존의 state를 **절대** 변형해서는 안되기 때문이다.
- 예측 불가능한 동작 (버그) 발생 가능성
- 프로그램 디버깅 어려움

대신에, 새로운 state 객체를 반환하여 항상 재정의한다.

❗❗ **절대 state를 변형시키면 안된다.** ❗❗

중첩된 객체를 복사하거나 삭제할때는 항상 새로운 객체 반환하기
- 항상 새 값을 생성하기
- state를 업데이트하여 아무것도 변경하지 않은 새로운 객체 생성하기
- 실수로라도 기존의 state를 변경하지 않고 추가한 객체를 복사하여 변경할 수 없는 방법으로 작업 실행하기
-> 항상 새로운 객체나 배열을 만들어야 한다. (데이터를 업데이트 할때마다)


### 애플리케이션의 규모가 더 커질때의 리덕스 문제점
(리덕스가 관리하는 상태가 많을 때)
- 액션 타입에서 문제 발생 가능
  - 식별자 입력시 오타 발생하면 안됨
  - 오타 발생시 리듀서 처리 못함
  **해결 방법**
  -> 식별자들을 한 번 정의해놓고, 다음부턴 정의한 이름을 사용하기
- 많은 상태를 복사해야 한다.
  - 리덕스 파일이 거대해진다.

### 해결방법
- 상수 생성하기
```jsx
export const INCREMENT = 'increment';
```
- 여러 작은 리듀서로 나누기 (파일이 거대해지지 않도록)
-> **Redux Toolkit** 사용하기