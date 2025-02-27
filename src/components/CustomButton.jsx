import React from "react";
import state from "../store";
import { use } from "react";
import { useSnapshot } from "valtio";

import { getContrastingColor } from "../config/helpers";

const CustomButton = ({ type, title, customStyles, handleClick }) => {
  const snap = useSnapshot(state);
  const generateStyle = (type) => {
    if (type === "filled") {
      return {
        backgroundColor: `${snap.color}`,
        color: getContrastingColor(snap.color),
      };
    } else if (type === "outline") {
      return {
        border: `1px solid ${snap.color}`,
        color: "grey",
      };
    }
  };

  return (
    <button
      className={`px-2 py-1.5 flex-1 rouned-md ${customStyles}`}
      style={generateStyle(type)}
      onClick={handleClick}
    >
      {title}
    </button>
  );
};

export default CustomButton;
