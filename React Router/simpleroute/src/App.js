import './App.css';
import React from 'react'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ReactDOM from 'react-dom';


// 메뉴 제작을 위해 <ul> <li> 요소 사용
// <BrowserRouter>: 웹 애플리케이션에서 HTML5의 History API를 사용해 페이지를 새로고침하지
// 않고도 주소를 변경할 수 있게 해줌
// <BrowserRouter> 가 상위에 작성되어 있어야 React Router의 컴포넌트들을 사용가능
function App() {
  return (
    <BrowserRouter>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
          <Link to="/mypage">MyPage</Link>
          </li>
          <li>
          <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>
      </nav>
      {/* 주소 경로와 작성한 3개의 컴포넌트 연결해주기
          Routes 컴포넌트는 Route 컴포넌트들을 감싸고 있어야 함  */}
      <Routes>
        {/* 경로는 path로, 컴포넌트는 element로 연결 */}
        <Route path="/" element={<Home />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App;

// Home component
// 메뉴 
function Home() {
  return <h1>Home</h1>;
}

// MyPage component
function MyPage() {
  return <h1>MyPage</h1>;
}

// Dashboard component
function Dashboard() {
  return <h1>Dashboard</h1>;
}