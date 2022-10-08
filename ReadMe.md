# React State & Props

### State

- 살면서 변할 수 있는 값
- 컴포넌트의 사용 중 컴포넌트 내부에서 변할 수 있는 값

### Props vs. State

- Props: 외부로부터 전달받은 값
- State: 내부에서 변화하는 값

### Props에 적합한 것

이름, 성별

### State에 적합한 것

나이, 현재 사는 곳, 취업 여부, 결혼/연애 여부

## Props

- 컴포넌트의 속성(property)를 의미
    - 성별, 이름처럼 변하지 않는 **외부로부터 전달받은 값**
    - 웹 애플리케이션에서 해당 컴포넌트가 가진 속성
- 부모 컴포넌트(상위 컴포넌트)로부터 전달받은 값
    - React 컴포넌트는 JavaScript 함수와 클래스로, props를 함수의 전달인자처럼 전달받아 이를 기반으로 화면에 어떻게 표시되는지를 기술하는 React 엘리먼트 반환
    - → 최초로 렌더링 될때 화면에 출력하고자 하는 데이터를 담은 초깃값으로 사용 가능
- **객체** 형태
    - props로 어떤 타입의 값도 넣어 전달할 수 있도록
- 읽기 전용
    - 외부로부터 전달받아 변하지 않는 값 → **함부로 변경될 수 없는 읽기 전용 객체**

### How to use Props

1. 하위 컴포넌트에 전달하고자 하는 값(data)과 속성을 정의
2. props를 이용하여 정의된 값과 속성 전달
3. 전달받은 props 렌더링

우선 `<Parent>` 와 `<Child>` 라는 컴포넌트 선언 후, `<Parent>` 컴포넌트 안에 `<Child>` 컴포넌트 작성

```jsx
function Parent() {
	return (
		<div className="parent">
			<h1>I'm the parent</h1>
			<Child />
		</div>
	);
};

function Child() {
	return (
		<div className="child"></div>
	);
};
```

React에서 속성 및 값을 할당하는 방법

```jsx
<Child attribute={value} />
```

전달하고자 하는 값 `{ }` 를 이용하여 감싸기 

<br>


`text` 속성을 선언하여, 안에 문자열 값 할당하기

```jsx
<Child text={"I'm child"} />
```

<br>


`<Parent>` 컴포넌트에서 전달한 `"I'm child"` 문자열 `<Child>` 컴포넌트에서 받기

함수에 인자를 전달하듯이 React 컴포넌트에 props 전달

→ 이 props가 필요한 모든 데이터 가져오기

```jsx
function Child(props) {
	return (
		<div className="child">
			<p>{props.text}</p>
		</div>
	);
};
```

props 렌더링을 하기 위해서 JSX 안에 직접 불러서 사용

props는 객체!!! 이 객체의 `{ key : value }` 는 `<Parent>` 컴포넌트에서 정의한 `{ attribute : value }` 의 형태를 가짐.

→ props의 value 또한 dot notation으로 접근 가능 

위와 같이 `props.text` 를 JSX에 중괄호와 함께 작성하면 작동!

<br>


## props.children

props를 전달하는 또 다른 방법

**여는 태그와 닫는 태그 사이에 value를 넣어 전달하는 방법**

`props.children` 을 이용하면 해당 value에 접근 가능

```jsx
function Parent() {
  return (
    <div className="parent">
        <h1>I'm the parent</h1>
        <Child>I'm the eldest child</Child>
    </div>
  );
};

function Child(props) {
  return (
    <div className="child">
        <p>{props.children}</p>
    </div>
  );
};
```

---

<br>


<br>


## State

컴포넌트 내에서 변할 수 있는 값

<br>


## useState 사용법

React에서는 `useState` 함수 제공

- `useState`를 이용하기 위해서는 React로부터 `useState` 를 불러와야 한다

```jsx
import { useState } from "react";
```

- `useState` 를 컴포넌트 안에서 호출 
useState를 호출한다 = “state” 변수를 선언하는 것
state변수는 React에 의해 함수가 끝나도 사라지지 X
- `isChecked`, `setIsChecked` 는 `useState` 의 리턴값을 구조 분해 할당한 변수

```jsx
function CheckboxExample() {
	const [isChecked, setIsChecked] = useState(false);

							↓  ↓  ↓  ↓  ↓  ↓  ↓  ↓  
	const stateHookArray = useState(false);
	const isCheckd = stateHookArray[0];
	const setIsChecked = stateHookArray[1];
}
```

- `useState` 를 호출하면 배열을 반환.
    - 배열의 0번째 요소는 **현재 state 변수**
    - 1번째 요소는 **이 변수를 갱신할 수 있는 함수**
    - `useState` 의 인자로 넘겨주는 값은 **state의 초깃값**
    
    ```jsx
    const [state 저장 변수, state 갱신 함수] = useState(상태 초기 값);
    ```
    
                                                                 ⬇  ⬇  
    
    ```jsx
    function CheckboxExample() {
    	const [isChecked, setIsChecked] = useState(false);
    ```
    
    - `isChecked` : state를 저장하는 변수
    - `setIsChecked` : state `isChecked` 를 변경하는 함수
    - `useState` : state hook
    - `false` : state 초깃값
- 이 state 변수에 저장된 값을 사용하려면 JSX 엘리먼트 안에 직접 불러서 사용
`isChecked` 가 boolean 값을 가지기 때문에 `true` or `false` 여부에 따라 다른 결과가 보이도로고 삼항 연사자 사용

```jsx
<span>{isChecked ? "Checked~~!!" : "Unchecked"}</span>
```

<br>


## state 갱신하기

- state 변수를 갱신할 수 있는 함수인 `setIsChecked` 호출
- `input[type=checkbox]` JSX 엘리먼트의 값 변경에 따라서 `isChecked` 가 변경되어야 함
    
    브라우저에서 `checked` 로 값이 변경되면, React의 `isChecked` 도 변경되어야 함!
    
- `input[type=checkbox]` 엘리먼트의 값이 변경되면 `onChange` 이벤트 발생
- React 에서는 사용자가 체크박스 값을 변경하면, `onChange` 이벤트가 이벤트 핸들러 함수인 `handleChecked` 를 호출, 이 함수가 `setIsChecked` 를 호출
`setIsChecked`가 호출되면 호출된 결과에 따라 `isChecked` 변수가 갱신됨
React는 새로운 `isChecked` 변수를 `CheckboxExample` 컴포넌트에 넘겨 해당 컴포넌트 다시 렌더링
    
    ```jsx
    function CheckboxExample() {
      const [isChecked, setIsChecked] = useState(false);
    
      const handleChecked = (event) => {
        setIsChecked(event.target.checked);
      };
    
      return (
        <div className="App">
          <input type="checkbox" checked={isChecked} onChange={handleChecked} />
          <span>{isChecked ? "Checked!!" : "Unchecked"}</span>
        </div>
      );
    }
    ```
    

<br>


### 주의점

- react 컴포넌트는 state가 변경되면 새롭게 호출되고, 리렌더링 된다
- React state는 상태 변경 함수 호출로 변경해야 한다 (강제로 하면 X)
상태변경함수 사용은 React와 개발자의 약속이기 때문에 지켜야 함

<br>

## 이벤트 처리

React는 DOM 이벤트 처리 방식과 유사

- React에서 이벤트는 소문자 대신 카멜 케이스 (camelCase)를 사용
- JSX를 사용하여 문자열이 아닌 함수로 이벤트 처리 함수(Event handler)를 전달

```jsx
HTML 
<button onclick="hanldEvent()">Event</button>

React
<button onClick={handleEvent}>Event</button>
```

<br>

### onChange

`<input>` `<textarea>` `<select>` 와 같은 form 엘리먼트는 사용자의 입력값을 제어하는데 사용

React에서는 이러한 **변경될 수 있는 입력값** 을 일반적으로 **컴포넌트의 state로 관리**하고 업데이트

`onChange` 이벤트가 발생하면 `e.target.value` 를 통해 이벤트 객체에 담겨있는 `input` 값을 읽기 가능

컴포넌트 return 문 안의 `input` 태그에 `value`와 `onChange`  넣기

`onChange`는 `input`  의 텍스트가 바뀔때마다 발생하는 이벤트

이벤트 발생시 `handleChange` 함수 작동 → 이벤트 객체에 담긴 `input` 값을 `setState` 를 통해 새로운 state로 갱신

```jsx
function NameForm() {
  const [name, setName] = useState("");

  const handleChange = (e) => {
    setName(e.target.value);
  }

  return (
    <div>
      <input type="text" value={name} onChange={handleChange}></input>
      <h1>{name}</h1>
    </div>
  )
};
```

<br>

### onClick

사용자가 클릭이라는 행동을 하였을때 발생하는 이벤트

주로 사용자의 행동에 따라 애플리케이션이 반응해야 할 때 자주 사용하는 이벤트

버튼 클릭시 `input` tage에 입력한 이름이 `alert`을 통해 알림 창이 팝업 되도록 코드 추가

```jsx
function NameForm() {
  const [name, setName] = useState("");

  const handleChange = (e) => {
    setName(e.target.value);
  }

  return (
    <div>
      <input type="text" value={name} onChange={handleChange}></input>
      <button onClick={alert(name)}>Button</button>
      <h1>{name}</h1>
    </div>
  );
};
```

→ `onClick` 이벤트에 함수를 전달할 때는 리턴문 안에서 함수를 정의하거나 리턴문 외부에서 함수를 정의한 후 이벤트에 함수 자체를 전달

두가지 방법 모두 **arrow function**을 사용하여 함수를 정의해야 해당 컴포넌트가 가진 state에 함수들이 접근 가능

```jsx
// 함수 정의하기
return (
	<div>
		<button onClick={() => alert(name)}>Button</button>
	</div>
	);
};

// 함수 자체를 전달하기
const handleClick = () => {
	alert(name);
};

return ( 
	<div>
		<button onClick={hanldeClick}>Button</button>
	</div>
	);
};
```

<br>

## `<select>`

`select tag` 는 사용자가 drop down 목록을 열어 그중 한 가지 옵션을 선택하면, 선택된 옵션이 state 변수에 갱신. 


```jsx
import React, { useState } from "react";
import "./styles.css";

function SelectExample() {
  const [choice, setChoice] = useState("apple");

  const fruits = ["apple", "orange", "pineapple", "strawberry", "grape"];
  const options = fruits.map((fruit) => {
    return <option value={fruit}>{fruit}</option>;
  });
  const handleFruit = (event) => {
    setChoice(event.target.value)
  };

  return (
    <div className="App">
      <select onChange={handleFruit}>{options}</select>
      <h3>You choose "{choice}"</h3>
    </div>
  );
}

export default SelectExample;
```

<br>

## `<Pop up>`

Pop up 의 open과 close를 state를 통해 관리 가능

```jsx
import React, { useState } from "react";
import "./styles.css";

function App() {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(showPopup ? false : true)
  };

  return (
    <div className="App">
      <h1>Fix me to open Pop Up</h1>
      <button className="open" onClick={togglePopup}>Open me</button>
      {showPopup ? (
        <div className="popup">
          <div className="popup_inner">
            <h2>Success!</h2>
            <button className="close" onClick={togglePopup}>
              Close me
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default App;
```

---

<br>

## React 데이터 흐름

- React 개발 방식의 큰 특징: 컴포넌트 단위로 시작

- 먼저 컴포넌트를 만들고, 다시 페이지 조립

- 상향식으로 앱을 만든다.


- 컴포넌트는 컴포넌트 바깥에서 props를 이용해 데이터를 마치 인자 혹은 속성처럼 전달받을 수 있다


- 데이터 전달 주체는 부모 컴포넌트 ⇒ 데이터 흐름이 하향식(top-down)이기 때문

- 단방향 데이터 흐름 (one-way data flow)

- 컴포넌트는 props를 통해 전달받은 데이터가 어디서 왔는지 전혀 모름

<br>

### 데이터 정의

**Twittler 애플리케이션이 갖고 있는 상태**

- 전체 트윗 목록
- 사용자가 작성 중인 새로운 트윗 내용

> 모든 데이터를 상태로 둘 필요X

> 상태는 최소화하는것이 best

❌ 부모로부터 props를 통해 전달?   

❌ 시간이 지나도 변하지 않나?         

❌ 컴포넌트 안의 다른 state나 props를 가지고 계산 가능?   

→ 다 state가 아님

<br>

### 상태 위치 정하기

상태가 특정 컴포넌트에서만 유의미하다면, 특정 컴포넌트에 두면 된다

하지만 하나의 상태를 기반으로 두 컴포넌트가 영향을 받으면 **공통 소유 컴포넌트**를 찾아 <U>그곳에 상태를 위치</U>

두 개의 자식 컴포넌트가 하나의 상태에 접근하고자 할때 두 자식의 **공통 부모 컴포넌트**에 상태 위치

- 전체 트윗 목록은 Tweets에서 필요로 하는 데이터
- SingleTweet 컴포넌트들은 모두 전체 트윗 목록에 의존
- Tweets은 SingleTweet 컴포넌트들의 부모