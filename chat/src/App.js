import { useCallback, useEffect } from "react";

const { Configuration, OpenAIApi } = require("openai");

function App() {
  // OpenAI API 호출
  const fetchOpenApi = useCallback(() => {
    const configuration = new Configuration({
      apiKey: process.env.REACT_APP_OPENAI_API_KEY,
    });

    new OpenAIApi(configuration)
      .createCompletion({
        model: "text-davinci-003",
        prompt: "Say this is a test",
        temperature: 0,
        max_tokens: 7,
      })
      .then((res) => {
        const { data } = res;

        console.log(data);
      });
  }, []);

  useEffect(() => {
    fetchOpenApi(); // Mount 시 호출한다.
  }, []);

  return <div className="App">openai</div>;
}

export default App;

// import React, { useState } from "react";
// import "./App.css";

// function App() {
//   const [message, setMessage] = useState("");
//   const [response, setResponse] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     fetch("http://localhost:3001/", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ message }),
//     })
//       .then((res) => res.json())
//       .then((data) => setResponse(data.message));
//   };

//   return (
//     <div className="App">
//       <form onSubmit={handleSubmit}>
//         <textarea
//           value={message}
//           onChange={(e) => setMessage(e.target.value)}
//         ></textarea>
//         <button type="submit">Submit</button>
//       </form>
//       <div>{response}</div>
//     </div>
//   );
// }

// export default App;
