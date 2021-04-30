import React from "react";
import withCounter from "./withCounter";

function HoverCounter({ count, countHandler }) {
  return (
    <div style={{ backgroundColor: "lightgrey" }}>
      <p onMouseOver={countHandler}>Hover Counter: Hovered {count} times</p>
    </div>
  );
}

export default withCounter(HoverCounter);
