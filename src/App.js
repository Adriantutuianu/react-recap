import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("Adrian");
  console.log(name);
  return (
    <div className="App">
      <p>{name}</p>
      <button onClick={() => setName("Johnny")}>Change name to Johhny </button>
      <button onClick={() => setName("Adrian")}>
        Change name back to Adrian{" "}
      </button>
    </div>
  );
}

export default App;
