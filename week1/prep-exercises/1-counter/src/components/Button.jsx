function Button({ setCount, count }) {
  const handleAddOne = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleSubtractOne = () => {
    if (count > 0) {
      setCount((prevCount) => prevCount - 1);
    }
  };

  const handleAddTwo = () => {
    setCount((prevCount) => prevCount + 2);
  };

  const handleSubtractTwo = () => {
    if (count >= 2) {
      setCount((prevCount) => prevCount - 2);
    } else if (count === 1) {
      setCount((prevCount) => prevCount - 1);
    }
  };

  return (
    <div className="button">
      <h2>Button Component</h2>
      <button onClick={handleAddOne}>Add 1</button>
      <button onClick={handleSubtractOne}>Subtract 1</button>
      <button onClick={handleAddTwo}>Add 2</button>
      <button onClick={handleSubtractTwo}>Subtract 2</button>
    </div>
  );
}

export default Button;
