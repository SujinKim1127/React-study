# React Router

## 라우트 준비
페이지 표시 컴포넌트 만들기
```jsx
function Home() {
  return <h1>Home</h1>;
}
```

<br>

## 메뉴 만들기
메뉴 제작을 위해 `<ul>` `<li>` 요소 사용

<br>

## 주소에 따라 페이지 뷰 다르게 만들기
* Home 페이지의 주소 `"/"`
* MyPage 페이지의 주소 `"/mypage"`
* Dashboard 페이지의 주소 `"/dashboard"`

### BrowserRouter
* `<BrowserRouter>`: 웹 애플리케이션에서 HTML5의 History API를 사용해 페이지를 새로고침하지 않고도 주소를 변경할 수 있게 해줌
* `<BrowserRouter>` 가 상위에 작성되어 있어야 React Router의 컴포넌트들 사용 가능

<br>


### Routes, Route
경로 매칭 컴포넌트
* `<Routes>` 컴포넌트는 여러 `<Route>` 컴포넌트를 감싸서 그 중 경로가 일치하는 단 하나의 라우터만 렌더링
    -> `<Routes>`를 사용하지 않으면 매칭되는 모든 요소 렌더링
* `<Route>` 컴포넌트는 `path` 속성을 지정하여 해당 `path` 에서 어떤 컴포넌트를 보여줄지 결정
    -> `<Link>` 컴포넌트가 정해주는 URL 경로와 일치하는 경우에만 작동
* 만약 사용자가 지정된 주소 이외의 주소로 접근하게 되면 `path="*"` 속성 사용. 이 속성이 설정되어 있는 컴포넌트 보여줌

```jsx
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div className="App">
          {/* Routes와 Route 컴포넌트를 이용하여 경로(path)를 설정하고 
            Tweets, Mypage, About 컴포넌트 연결하기 */}
          <Routes>
            <Route path="/" element={<Tweets />}/>
            <Route path="/mypage" element={<MyPage />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

```
<br>


### Link
경로를 연결 컴포넌트
페이지 전환을 통해 페이지를 새로 불러오지 않고 애플리케이션을 그대로 유지하여 HTML5 History API를 이용하여 페이지 조소만 변경

ReactDOM으로 렌더를 시키면 `<Link>` 컴포넌트는 `<a>` 요소로 바뀜
React Router에서 `<Link>`를 사용하는 이유
* `<a>` 요소는 페이지 전환하는 과정에서 페이지를 불러오기 때문에 다시 처음부터 렌더링 -> 새로고침 발생
* `<Link>` 컴포넌트는 페이지 전환 방지 기능 내장. -> SPA 구현 가능
```jsx
const Sidebar = () => {
  return (
    <section className="sidebar">
      {/* Link 컴포넌트를 작성 후, to 속성을 이용하여 path 연결하기 */}
      <Link to="/">
        <i className="far fa-comment-dots"></i>
      </Link>

      <Link to="/about">
        <i className="far fa-question-circle"></i>
      </Link>

      <Link to="/mypage">
        <i className="far fa-user"></i>
      </Link>
    </section>
  );
};
```

