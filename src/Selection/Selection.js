import { checkPropTypes } from "prop-types";
import React from "react";
import "./Selection.css";

const Selection = (props) => {
  return (
    <div>
      <div
        onClick={() => props.applyColor(props.id)}
        style={{ background: props.nextBackground }}
        className="selection"
      ></div>
    </div>
  );
};
export default Selection;
