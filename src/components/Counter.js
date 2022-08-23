import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleDecrementClick = () => {
    setCount((prevCount) => {
      if (prevCount <= 0) {
        return 0;
      }

      return prevCount - 1;
    });
  };

  const handleIncrementClick = () => {
    setCount((prevCount) => {
      if (prevCount >= 10) {
        return 10;
      }

      return prevCount + 1;
    });
  };

  return (
    <div>
      <h1>Counter</h1>
      <p>{count}</p>
      <div>
        <button onClick={handleDecrementClick}>-</button>
        <button onClick={handleIncrementClick}>+</button>
      </div>
    </div>
  );
};

export default Counter;
