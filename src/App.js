import React, { useState } from "react";
import "./App.css";
import Selector from "./Selector/Selector";
import Selection from "./Selection/Selection";

function App() {
  const [nextBackground, setnextBackground] = useState({ background: "" });
  const [getSelection, setSelection] = useState([
    { id: 0, background: "" },
    { id: 1, background: "" },
    { id: 2, background: "" }
  ]);
  const onSelectHandler = (input) => {
    setnextBackground({ background: input });
  };
  const applyColor = (index) => {
    let list = getSelection[index];
    list.background = nextBackground.background;
    setSelection([...getSelection, list]);
  };
  return (
    <div>
      <h1>Color Picker</h1>
      <div className="box1">
        <Selector onSelectHandler={onSelectHandler} Color="red" />
        <Selector onSelectHandler={onSelectHandler} Color="green" />
        <Selector onSelectHandler={onSelectHandler} Color="orange" />
      </div>
      <div className="box1">
        <Selection
          applyColor={applyColor}
          id="0"
          nextBackground={getSelection[0].background}
        />
        <Selection
          applyColor={applyColor}
          id="1"
          nextBackground={getSelection[1].background}
        />
        <Selection
          applyColor={applyColor}
          id="2"
          nextBackground={getSelection[2].background}
        />
      </div>
    </div>
  );
}

export default App;
