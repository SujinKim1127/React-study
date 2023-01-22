### Redux

> 생활코딩 https://youtu.be/yjuwpf7VH74 보고 정리


```jsx
export default function App() {
  const [number, setNumber] = useState(1);

  return (
    <div id="container">
      <h1>Root</h1>
      <Left1 number={number}></Left1>
    </div>
  );
}

function Left1(props) {
  return (
    <div>
      <h1>Left1 : {props.number}</h1>
      <Left2 number={props.number} ></Left2>
    </div>
  );
}

function Left2(props) {
  return (
    <div>
      <h1>Left2 : {props.number}</h1>
      <Left3 number={props.number}></Left3>
    </div>
  );
}

function Left3(props) {
  return (
    <div>
      <h1>Left3 : {props.number}</h1>
    </div>
  );
}
```
최상위에 있는 `number`를 Left3에 전달해주기 위해 Left1, Left2에서 사용하지 않음에도 불구하고 Left3을 위해 내려주는 불필요한 코드를 작성


![props](./public/props.PNG)

Left3: 1의 값을 바꾸기 위해 Right3 -> 2 -> 1-> Root -> left1 -> 2 -> 3 을 거쳐야만 한다.

Right3과 Left3을 무선으로 연결시켜주는 것이 **Redux**

<br> 

```jsx
import { Provider, useSelector, useDispatch } from "react-redux";
```
**Provider**: 사용한 컴포넌트 가장바깥쪽에 선언
```jsx
<Provider store={store}>
    {/* Left1과 Right1은 store 사용 가능 */}
    <Left1></Left1>
    <Right1></Right1>
</Provider>
```

<br>

**useSelector** : number값을 Left3에서 표시하기 위해 사용
함수를 입력받음 (이때, 화살표 함수도 가능하다)
```jsx
function Left3(props) {
  function f(state) {
      // state의 어떤값을 사용할것인지 작성
    return state.number;
  }

  const number = useSelector(f);
    // -- 또는 --
  const number = useSelector((state)=>state.number);

  return (
    <div>
      <h1>Left3 : {number}</h1>
    </div>
  );
}
```

<br>

**useDispatch** : number값을 바꾸기 위해 사용
```jsx
function Right3(props) {
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Right3</h1>
      <input type="button" value="+"
      onClick={() => {
        dispatch({type: "PLUS"}) 
      }}  
      ></input>
    </div>
  );
}
```
`dispatch`에 입력한 type action을 전달하여 `reducer`를 호출한다.


<br>

**reducer** : store의 state를 어떻게 바꿀것인지 결정하는 함수
```jsx
function reducer(currentState, action) {
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
```
`currentState`: 현재 state 값

`action` : 어떻게 바꿀것인지에 대한 요청