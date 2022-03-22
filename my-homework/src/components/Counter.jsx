import React, { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const MAX_COUNTER = 27;
  const MIN_COUNTER = 0;
  return (
    <div>
      <h1>"Вы нажали {counter} раз"</h1>

      <button
        name="Increment"
        onClick={() => {
          setCounter(Math.min(counter + 1, MAX_COUNTER));
        }}
      >
        +
      </button>

      <button
        name="Decrement"
        onClick={() => {
          setCounter(Math.max(counter - 1, MIN_COUNTER));
        }}
      >
        -
      </button>
    </div>
  );
};

export default Counter;
