import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrease, increase } from './counterSlice';

CounterFeature.propTypes = {};

function CounterFeature(props) {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  const handleIncrease = () => {
    const action = increase();
    console.log(action);
    dispatch(action);
  };

  const handleDecrease = () => {
    const action = decrease();
    dispatch(action);
  };
  return (
    <div>
      Counter Feature
      <p>Count: {count}</p>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
    </div>
  );
}

export default CounterFeature;
