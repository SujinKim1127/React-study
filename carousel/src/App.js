import "./App.css";
import styled from "styled-components";
import { useRef, useState } from "react";

function App() {
  const posters = [
    `${process.env.PUBLIC_URL}/event_cover.jpeg`,
    `${process.env.PUBLIC_URL}/poster.jpg`,
    `${process.env.PUBLIC_URL}/event_cover.jpeg`,
    `${process.env.PUBLIC_URL}/poster.jpg`,
  ];
  const [select, setSelect] = useState(0);
  const number = useRef(0);

  const selectHandler = (idx) => {
    number.current = idx;
    setSelect(idx);
    console.log(number.current);
  };
  return (
    <div className="App">
      <h1>Carousel</h1>
      <SliderBox>
        <ul className="imgs">
          {posters.map((el, idx) => {
            return (
              <li key={idx}>
                {idx === select ? <img alt={idx} src={el}></img> : ""}
              </li>
            );
          })}
        </ul>
      </SliderBox>
      <CircleBox>
        {posters.map((el, idx) => {
          return (
            <CircleList
              onClick={() => selectHandler(idx)}
              key={idx}
              className={select === idx ? "select" : "unselect"}
            ></CircleList>
          );
        })}
      </CircleBox>
    </div>
  );
}

const SliderBox = styled.div`
  width: 500px;
  height: 600px;
  margin: 0 auto;
  overflow: hidden;
  ul {
    list-style: none;
  }

  li {
    position: absolute;
    transition-delay: 1s;
    padding: 0;
    margin: 0;
  }
  img {
    width: 400px;
  }
`;

const CircleBox = styled.div`
  position: absolute;
  transform: translateX(-50%);
  z-index: 2;
  left: 420px;

  .select {
    border-radius: 50%;
    background-color: transparent;
    border: 2px solid rgba(0, 0, 0, 0.55);
    width: 7px;
    height: 7px;
    margin: 0 5px;
  }
  .unselect {
    border-radius: 50%;
    background-color: rgba(0, 0, 0, 0.55);
    width: 10px;
    height: 10px;
    margin: 0 5px;
    cursor: pointer;
  }
`;

const CircleList = styled.div`
  display: inline-block;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.55);
  width: 10px;
  height: 10px;
  margin: 0 5px;
  cursor: pointer;
`;

export default App;
