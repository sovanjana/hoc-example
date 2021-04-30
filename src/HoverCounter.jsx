import React from "react";
import withCounter from "./withCounter";

function HoverCounter({ count, countHandler }) {
  return <h2 onMouseOver={countHandler}>Clicked {count} times</h2>;
}

export default withCounter(HoverCounter);
