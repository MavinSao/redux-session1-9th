import React from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { asyncIncrease, decrease, increase } from "../redux/actions/counterAction";

const Counter = () => {
  const dispatch = useDispatch();

  const onDecrease  = bindActionCreators(decrease,dispatch)
  const onIncrease  = bindActionCreators(increase,dispatch)
  const onAsyncInc  = bindActionCreators(asyncIncrease,dispatch)

  return (
    <div>
      <button onClick={onIncrease}>Increase</button>{" "}
      <button onClick={onDecrease}>Decrease</button>{" "}
      <button onClick={onAsyncInc}>Async Increase</button>
    </div>
  );
};

export default Counter;
