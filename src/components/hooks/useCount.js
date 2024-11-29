import { useState } from 'react'
function useCount(initialCount = 0, value) {
    const [count, setCount] = useState(initialCount)
    const increment = () => {
        setCount(prevState => prevState + value)
    }
    const decrement = () => {
        setCount(prevState => prevState - value)
    }
    const reset = () => {
        setCount(0)
    }
    return [count,increment,decrement,reset]
}
export default useCount
