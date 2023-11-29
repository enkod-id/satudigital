import { useState } from 'react'

const useCounter = () => {
    const [count, setCount] = useState<number>(0);

    const increment = () => {
        setCount((prevState) => prevState + 1)
    }

    const decrement = () => {
        setCount((prevState) => prevState - 1)
    }

    return {
        count,
        increment,
        decrement
    }
}

export default useCounter