import { useState } from "react";
import { SquareProps } from "../types";
import { SquareArray } from "../data";
export const useSquares = () => {
    const [squares, setSquares] = useState<SquareProps[]>(SquareArray);
    return { squares, setSquares };
};
