import React from "react";
import Tesseract from "tesseract.js";

const App = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [image, setImage] = React.useState("");
  const [text, setText] = React.useState("");
  const [progress, setProgress] = React.useState(0);

  const handleSubmit = () => {
    setIsLoading(true);
    Tesseract.recognize(image, "kor+eng", {
      logger: (m) => {
        console.log(m);
        if (m.status === "recognizing text") {
          setProgress(parseInt(m.progress * 100));
        }
      },
    })
      .catch((err) => {
        console.error(err);
      })
      .then((result) => {
        console.log(result.data);
        setText(result.data.text);
        setIsLoading(false);
      });
  };
  <div></div>;
  return (
    <div style={{ height: "100vh" }}>
      <div>
        <div>
          {!isLoading && <h1>Image To Text</h1>}
          {isLoading && (
            <>
              <progress value={progress} max="100">
                {progress}%{" "}
              </progress>{" "}
              <p>Converting:- {progress} %</p>
            </>
          )}
          {!isLoading && !text && (
            <>
              <input
                type="file"
                onChange={(e) =>
                  setImage(URL.createObjectURL(e.target.files[0]))
                }
              />
              <input type="button" onClick={handleSubmit} value="Convert" />
            </>
          )}
          {!isLoading && text && (
            <>
              <textarea
                rows="30"
                value={text}
                onChange={(e) => setText(e.target.value)}
              ></textarea>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
