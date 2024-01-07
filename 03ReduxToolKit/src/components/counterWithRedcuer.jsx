import React, { useReducer } from "react";
import counterReducer from "../stores/reducer/counterReducer";
const CounterWithReducer = () => {
    const [countWithReducer, dispatch] = useReducer(counterReducer, 0);
    const decrementHandler = () => {
        dispatch({ type: 'remove', payload: { name: 'Test', Id: 1, age: 20 } })
    }
    const incrementHandler = () => {
        dispatch({ type: 'Add', payload: { name: 'Test', Id: 1, age: 20 } })
    }
    return (
        <>
            <button onClick={decrementHandler}>-</button>
            {countWithReducer}
            <button onClick={incrementHandler}>+</button>
        </>
    )
}

export default CounterWithReducer;