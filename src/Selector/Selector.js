import React from "react";
import "./Selector.css";

const Selector = (props) => {
  return (
    <div>
      <div
        onClick={() => props.onSelectHandler(props.Color)}
        style={{ backgroundColor: props.Color }}
        className="selector"
      >
        <label>{props.Color}</label>
      </div>
    </div>
  );
};
export default Selector;
