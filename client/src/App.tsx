import { useState } from "react";
import apiService from "./services/apiService";

function App() {
  const [content, setContent] = useState("API Content Here");
  const [path, setPath] = useState<string | null>("path1");

  const handleClick = async () => {
    if (path != null) {
      const data = await apiService.get(path);
      setContent(data.message);
    } else {
      console.error("Path has a value of null");
    }
  };

  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <h1 className="m-2 rounded-md border-4 p-2">{content}</h1>
      <select
        className="p-2"
        name="selectApi"
        id=""
        onChange={(event) => setPath(event.target.value)}
      >
        <option value="path1">Path 1</option>
        <option value="path2">Path 2</option>
      </select>
      <button className="m-2 rounded-md border-4 p-2" onClick={handleClick}>
        Fetch from API
      </button>
    </div>
  );
}

export default App;
