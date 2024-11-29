import React, { useReducer ,useContext} from 'react'
//import {CountContext} from '../App';
const initialSate = 0
const reducer = (state, action) => {
    switch (action) {
        case 'increment':
            return state + 1
        case 'decrement':
            return state - 1
        case 'reset':
            return initialSate
        default:
            return state
    }

}
function CounterOne() {
    const [count, dispatch] = useReducer(reducer, initialSate)
    const [countTwo, dispatchTwo] = useReducer(reducer, initialSate)
    return (
        <div>
            <div>Count-{count}</div>
            <button onClick={() => dispatch('increment')}>Increment</button>
            <button onClick={() => dispatch('decrement')}>Decrement</button>
            <button onClick={() => dispatch('reset')}>Reset</button>
            {/* <div>CounterTwo-{countTwo}</div>
            <button onClick={() => dispatchTwo('increment')}>Increment</button>
            <button onClick={() => dispatchTwo('decrement')}>Decrement</button>
            <button onClick={() => dispatchTwo('reset')}>Reset</button> */}
        </div>

    )
}
export default CounterOne