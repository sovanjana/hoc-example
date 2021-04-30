import React, { useState } from "react";

export default function withCounter(Component) {
  const NewComponent = () => {
    const [count, setCount] = useState(0);
    const incrementCount = () => setCount((prevState) => prevState + 1);

    return <Component count={count} countHandler={incrementCount} />;
  };

  return NewComponent;
}
