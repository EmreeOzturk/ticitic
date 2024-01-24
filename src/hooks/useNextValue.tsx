import { useState } from "react"
const useNextValue = () => {
    const [nextValue, setNextValue] = useState<boolean>(false)
    const toggleNextValue = () => {
        setNextValue(!nextValue)
    }

    const nextValueText = nextValue ? "O" : "X";
    return {
        nextValueText,
        toggleNextValue
    }
}

export default useNextValue

// X => False
// O => True
