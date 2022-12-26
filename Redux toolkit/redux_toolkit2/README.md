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
    const counter = useSelector(state => state.counter); 
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