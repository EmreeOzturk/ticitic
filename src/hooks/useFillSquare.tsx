import useCurrentValue from "./useCurrentValue"
import { Square } from "../types";
import { socket } from "../socket";

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
        socket.emit('receive-table-data', { id, currentValue })
    }
    return {
        fillSquare
    }
}

export default useFillSquare