import React, { useState } from 'react';

function CounterFun(props) {
    const [count, setCount] = useState(0);

    const countPlus = () => {
        if(count < 5) {
            setCount(count + 1);
        }
    }
    const countMinus = () => {
       if(count > 0) {
            setCount(count - 1);
       }
    }
    return (
        <>
            <h2>Function based counter:</h2>
            <p>*This counter is working between some declered condition.</p>
            <button onClick={countPlus}>+</button>
            <span>{count}</span>
            <button onClick={countMinus}>-</button>
        </>
    );
}

export default CounterFun;