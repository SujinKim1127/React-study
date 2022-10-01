import logo from './logo.svg';
import './App.css';

function App() {
  const proverbs = ['자신이 약한 건 싫지만 말이야. 자신보다 위가 잔뜩 있다는 건 엄청 두근두근 거리는구나.',     '될 때까지 하면 된다!',     '평범한 나 자신아. 아래를 내려다보고 있을 여유는 있는거냐?',     '아무리 열세라도 끝까지 싸우는 이유는 단 하나 아직 진 건 아니니까',     '패배가 약함을 증명하는 건가요? 여러분에게 있어, 패배는 시련이지 않나요? 무릎 꿇은 후에 다시 일어날 수 있느냐의 시련. 여러분이 무릎 꿇은 채 있는다면, 그것이야말로 약함을 증명하는 겁니다.',     '여러분이 약하다는 건 성장 가능성이 있다는 이야기. 이렇게 즐거운 일도 없잖아요?',     '패배는 지금 가진 힘의 인식이 될 순 있어도 약하다는 증명은 아니야. 여기서 끝나지 않아. 앞으로도 뭐든지 할 수 있어',     '때때로 즐거움은 불쑥 찾아온다. 즐거움이 나를 끌어당긴다. 배구가 즐겁다는 것을 잊었다가 또 다시 떠올린다.'];

  const random = (length) => {
    return parseInt(Math.random() * length);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code>src/App.js</code> and save to reload.
        </p>
        {proverbs[random(proverbs.length)]}
      </header>
    </div>
  );
}

export default App;
