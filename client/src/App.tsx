import React, { useState } from "react";
import apiService from "./services/apiService";

function App() {
  const [content, setContent] = useState("API Content Here");

  const handleClick = () => {};

  return (
    <div>
      <h1>{content}</h1>
      <button onClick={handleClick}>Fetch from API</button>
    </div>
  );
}

export default App;
