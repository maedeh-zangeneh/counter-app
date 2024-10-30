

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, reset } from "./redux/actions";
import './App.css'; 
function App() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>{count}</h1>
      <div className="buttons">
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        <button onClick={() => dispatch(reset())}>Reset</button>
      </div>
    </div>
  );
}

export default App;
