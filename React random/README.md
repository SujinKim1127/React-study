# React
프론트엔드 개발을 위한 JavaScript 오픈소스 라이브러리

<br>

### 리액트의 3가지 특징

- **선언형**
    - 하나의 파일에 명시적으로 작성할 수 있게 JSX를 활용
    - JSX(html과 javascript가 결합한 문법)
    - 코드만 보고도 웹 모양을 상상할 수 있다
- **컴포넌트 기반**
    - 리액트는 하나의 기능 구현을 위해 여러 종류의 코드를 묶어둔 컴포넌트를 기반으로 개발
    - 컴포넌트로 분리하면 서로 독립적이고 재사용이 가능
        → 기능 자체에 집중하여 개발 가능
    - 효율적
- **범용성** (다양한 곳에서 활용 가능
    - 리액트는 JavaScript 프로젝트 어디에든 유연하게 적용 가능
    - 리액트 네이티브로 모바일 개발도 가능
    - facebook에서 관리되어 안정적이고 유명함
        - 2020년 가장 유명한 프론트엔드 기술

<br>

## JSX

- javascript를 확장한 문법 → HTML과 Javascript를 한눈에 보기 가능
- JavaScript XML의 줄임말
- 이 문법을 이용해서 React 엘리먼트 만들기 가능
- javascript 코드로 변환 필요 → “Babel” 사용
- Babel
    - JSX를 브라우저가 이해할 수 있는 Javascript로 컴파일
    - 컴파일 후, Javascript를 브라우저가 읽고 화면에 렌더링 가능
- CSS, JSX 문법만을 가지고 웹 애플리케이션 개발 가능
- 한눈에 컴포넌트 확인 가능
- Javascript 만으로 마크업 형태의 코드를 작성하여 DOM에 배치 가능
- 주의! HTML 아님.

<br>


### JSX 문법

- 하나의 엘리먼트 안에 모든 엘리먼트가 포함
- 최상위에서 **opening tag** 와 **closing tag** 로 감싸줘야한다
    
    ```jsx
    <div>
    	<div>
    			<h1>Hello</h1>
    	</div>
    	<div>
    			<h2>World</h2>
    	</div>
    </div>
    ```
    
- 엘리먼트 클래스 사용시, **`className`** 으로 표기
    
    ```jsx
    <div className="~"> 
    ```
    
- JSX에서 Javascript 사용시 **중괄호 { }** 사용
    
    ```jsx
    const name = "sujin"
    <div>
    	Hello, {name}!
    </div>
    ```
    
- 사용자 정의 컴포넌트는 **대문자**로 시작
    
    ```jsx
    function Hello() { }
    ```
    
- 조건부 렌더링에는 **삼항연산자 사용**
    
    ```jsx
    (1 + 1 === 2) ? (<p>정답</p>) : (<p>탈락</p>)
    ```
    
- 여러 개의 HTML 엘리먼트를 표시할때, **`map()` 함수** 이용
    - `map()` 사용할때는 반드시 `key` JSX 속성을 넣어야한다
    
    ```jsx
    const content = posts.map((post) =>
    	<div key={post.id}>
    		<h3>{post.title}</h3>
    	</div>
    );
    ```
    

<br>


### `map()`

- 배열의 각 요소를
- 특정 논리(함수)에 의해
- 다른 요소로 지정(map)

```jsx
const posts = [
  { id: 1, title: "Hello World", content: "Welcome to learning React!" },
  { id: 2, title: "Installation", content: "You can install React via npm." },
];

function Blog() {
  return (
    <div>
      <div>
        <h3>{posts[0].title}</h3>
        <p>{posts[0].content}</p>
      </div>
      <div>
        <h3>{posts[1].title}</h3>
        <p>{posts[1].content}</p>
      </div>
    </div>
  );
}
```

→ 하드코딩

<br>


배열의 각 요소 (`post`)를 특정 논리(`postToElement` 함수)에 의해 다른 요소로 지정(`map` ) 

```jsx
function Blog() {
  const postToElement = (post) => (
    <div>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
    </div>
  );

  const blogs = posts.map(postToElement);

  return <div className="post-wrapper">{blogs}</div>;
}
```

<br>


### key 속성

key 속성값은 데이터에서 제공하는 id를 할당

```jsx
function Blog() {
  // postToElement라는 함수로 나누지 않고 아래와 같이 써도 무방
  const blogs = posts.map((post) => (
    <div key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
    </div>
  ));
  return <div className="post-wrapper">{blogs}</div>;
}
```

<br>


## Component-Based

**컴포넌트**

- 하나의 기능 구현을 위한 여러 종류의 코드 묶음
- UI를 구성하는 필수 요소

```jsx
const Component = () => {
	return (
		<>
			<div> {정의 1} </div>
		</>
	)
};	
```

<br>


**컴포넌트 기반 개발의 특징**

- 기술적인 특징이 아닌, 실제 사용자가 사용하는 기능을 기준으로 코드를 모아 개발
- 마크업, 디자인, 로직을 긴밀하게 연결하여 개발 가능
- 컴포넌트는 재사용 가능하여 효율적인 개발 가능


<br>

모든 리액트 애플리케이션은 <U>최소 한 개의 컴포넌트</U>를 가짐

→ 애플리케이션 내부적으로 근원(root)이 되는 역할

최상위 컴포넌트는 근원의 역할을 하므로 다른 자식 컴포넌트를 가질 수 있다


각각의 컴포넌트는 각자 고유의 기능을 가지고 있으면서 UI의 한 부분을 담당

이러한 컴포넌트들을 한군데로 모아 복잡한 UI를 구성 가능

더 나아가 최종적으로는 복잡한 어플리케이션도 만들기 가능