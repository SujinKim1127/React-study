import React, { useRef, useState, useEffect } from "react";
import axios from "axios";
import openai from "openai";

const GoogleVisionApiKey = process.env.REACT_APP_API_KEY;

const App = () => {
  const [response, setResponse] = useState("");
  const [prompt, setPrompt] = useState("");

  const apiKey = process.env.REACT_APP_CHATGPT_API;

  useEffect(() => {
    openai.Completion.create({
      engine: "text-davinci-002",
      prompt: prompt,
    }).then((response) => {
      console.log(response);
      setResponse(response.choices[0].text);
    });
  }, [prompt]);

  const handleSubmit = (e) => {
    e.preventDefault();
    openai.Completion.create({
      engine: "text-davinci-002",
      prompt: prompt,
    }).then((response) => {
      console.log(response);
      setResponse(response.choices[0].text);
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      <div>{response}</div>
    </>
  );
};

export default App;
