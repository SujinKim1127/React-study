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