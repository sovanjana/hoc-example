import React from "react";
import withCounter from "./withCounter";

function ClickCounter({ count, countHandler }) {
  return (
    <div>
      <span>Click Counter: </span>
      <button onClick={countHandler}>Click</button>
      <span> {count} times</span>
    </div>
  );
}

export default withCounter(ClickCounter);
