import { useState } from "react"
const useCurrentValue = () => {
    const [currValue, setCurrentValue] = useState<boolean>(false)
    const toggleCurrentValue = () => {
        console.log(currentValue);
        setCurrentValue(!currValue)
    }

    const currentValue = currValue ? "O" : "X";
    return {
        currentValue,
        toggleCurrentValue
    }
}

export default useCurrentValue

// X => False
// O => True
