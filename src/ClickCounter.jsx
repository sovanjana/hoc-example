import React from "react";
import withCounter from "./withCounter";

function ClickCounter({ count, countHandler }) {
  return <button onClick={countHandler}>Clicked {count} times</button>;
}

export default withCounter(ClickCounter);
