import "./App.css";
import MultipleElementsFading from "./components/MultipleElementsFading";
import OneElementFading from "./components/OneElementFading";
import SequenceAnimations from "./components/StaggeredAnimation";

const App = () => {
  return (
    <div className="App">
      <OneElementFading />
      <MultipleElementsFading />
      <SequenceAnimations />
    </div>
  );
};

export default App;
