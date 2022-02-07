import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("Adrian");
  const [isActive, setIsActive] = useState(false);
  console.log(name);
  return (
    <div className="App">
      <p style={{ color: isActive ? "red" : "green" }}>{name}</p>
      <button onClick={() => setName("Johnny")}>Change name to Johhny </button>
      <button onClick={() => setName("Adrian")}>
        Change name back to Adrian{" "}
      </button>
    </div>
  );
}

export default App;
