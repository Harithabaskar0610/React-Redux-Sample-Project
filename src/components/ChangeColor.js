import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { changeColor } from "../features/theme";

function ChangeColor() {
  const [color, setColor] = useState("");
  const dispatch = useDispatch();

  return (
    <div>
      <input className="button4"
        type="text"
        onChange={(event) => {
          setColor(event.target.value);
        }}
      />
      <button className="button3"
        onClick={() => {
          dispatch(changeColor(color));
        }}
      >
        CHANGE COLOR
      </button>
    </div>
  );
}

export default ChangeColor;