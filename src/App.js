import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("Adrian");
  console.log(name);
  return (
    <div className="App">
      <p>{name}</p>
    </div>
  );
}

export default App;
