import { useState } from "react";
import { Square } from "../types";
import { SquareArray } from "../data";
const useSquares = () => {
    const [squares, setSquares] = useState<Square[]>(SquareArray);
    return { squares, setSquares };
};

export default useSquares;