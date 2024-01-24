import useCurrentValue from "./useCurrentValue"
import { Square } from "../types";
const useFillSquare = () => {
    const { currentValue, toggleCurrentValue } = useCurrentValue();

    const fillSquare = (id: number, callback: React.Dispatch<React.SetStateAction<Square[]>>
    ) => {
        callback((prevSquares: Square[]) => {
            return prevSquares.map((square) => {
                if (square.id === id) {
                    return {
                        ...square,
                        value: currentValue as "X" | "O" | undefined,
                    };
                }
                return square;
            });
        });
        toggleCurrentValue();
    }
    return {
        fillSquare
    }
}

export default useFillSquare