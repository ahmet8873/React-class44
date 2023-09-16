import { useState } from "react";
import Count from "./Count";
import Button from "./Button";

function Counter() {
  const [count, setCount] = useState(0);

  const feedback = count > 10 ? "It's higher than 10!" : "Keep counting...";

  return (
    <div className="counter">
      <h1>Counter</h1>
      <p>Count: {count}</p>
      <p>{feedback}</p>
      <Count count={count} />
      <Button setCount={setCount} count={count} />
    </div>
  );
}

export default Counter;
