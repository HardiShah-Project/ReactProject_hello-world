import React from 'react'
import useCount from './useCount'
function CustomCount() {
    const [count, increment, decrement, reset] = useCount(10, 10)
    return (
        <div>
            <h2>count-{count}</h2>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}
export default CustomCount