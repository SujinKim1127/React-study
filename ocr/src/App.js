import React, { useState } from "react";

const GoogleVisionApiKey = process.env.REACT_APP_API_KEY;
console.log("googlevisio", GoogleVisionApiKey);

const App = () => {
  const [imageUrl, setImageUrl] = useState(null);
  const [result, setResult] = useState(null);

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
    } catch (error) {
      console.log(error);
    }
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
        <p>{result}</p>
      ) : (
        <button onClick={analyzeImage}>Analyze</button>
      )}
    </div>
  );
};

export default App;
