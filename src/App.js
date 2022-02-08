import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("Adrian");
  const [isActive, setIsActive] = useState(false);
  const [age, setAge] = useState(33);
  const [fruits, setFruits] = useState(["banana", "kiwi", "pineapple"]);

  const resetAge = () => {
    setAge(33);
  };

  const displayedFruits = fruits.map((fruit) => {
    return fruit;
  });
  return (
    <div className="App">
      <p style={{ color: isActive ? "red" : "green" }}>{name}</p>

      <button onClick={() => setName("Johnny")}>Change name to Johhny </button>

      <button onClick={() => setName("Adrian")}>
        Change name back to Adrian{" "}
      </button>

      <button onClick={() => setIsActive(!isActive)}>Toggle active</button>

      <p>Adrian is {age} years old.</p>
      <p>Next year Adrian will be {age + 1}.</p>
      {age === 33 && <p>This is visible.</p>}

      <button onClick={() => setAge(20)}>Make Adrian younger.</button>
      <button onClick={() => resetAge()}>Reset Age</button>
      {displayedFruits}

      <button onClick={() => setFruits([fruits, "pear"])}>Add pear</button>
    </div>
  );
}

export default App;
