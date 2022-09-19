import { useState } from "react";
import "./App.css";

const App = () => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div className="App">
      <button
        onClick={() => {
          setIsVisible((v) => !v);
        }}
      >
        {isVisible ? "unmount" : "mount"}
      </button>
      <div className="container">
        {isVisible ? <div className="item" /> : ""}
      </div>
    </div>
  );
};

export default App;
