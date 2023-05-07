import React, { useRef, useState } from "react";
import axios from "axios";

const GoogleVisionApiKey = process.env.REACT_APP_API_KEY;

const App = () => {
  const [imageUrl, setImageUrl] = useState(null);
  const [result, setResult] = useState(null);

  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");

  const analyzeImage = async () => {
    try {
      const body = JSON.stringify({
        requests: [
          {
            features: [{ type: "TEXT_DETECTION" }],
            image: {
              content: imageUrl.split(",")[1],
            },
          },
        ],
      });
      const response = await fetch(
        `https://vision.googleapis.com/v1/images:annotate?key=${GoogleVisionApiKey}`,
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          method: "POST",
          body: body,
        }
      );
      const responseJson = await response.json();
      setResult(responseJson.responses[0].fullTextAnnotation.text);
      setMessage(
        responseJson.responses[0].fullTextAnnotation.text +
          "\n 여기서 주최, 장소, 일시, 대학교, 연락처, 시작시간, 끝나는 시간, 설명 을 JSON 형식으로 알려줘"
      );
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:3001/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message }),
    })
      .then((res) => res.json())
      .then((data) => setResponse(data.message));
  };

  const handleChooseFile = async (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setImageUrl(reader.result);
    };
    reader.onerror = (error) => {
      console.log(error);
    };
  };

  // ChatGPT

  return (
    <div>
      {imageUrl ? (
        <img
          src={imageUrl}
          alt="Selected Image"
          style={{ width: "200px", height: "200px" }}
        />
      ) : (
        <input type="file" onChange={handleChooseFile} />
      )}
      {result ? (
        <>
          <p>{result}</p>
          <form onSubmit={handleSubmit}>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <button type="submit">Submit</button>
          </form>
          <div>{response}</div>
        </>
      ) : (
        <button onClick={analyzeImage}>Analyze</button>
      )}
    </div>
  );
};

export default App;
