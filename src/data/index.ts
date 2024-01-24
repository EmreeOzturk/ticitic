import { SquareProps } from "../types";
const arr = new Array<SquareProps>(9).fill({
  value: undefined,
  corner: undefined,
});
export const SquareArray = arr.map((_, index) => {
  return {
    id: index,
    value: undefined,
    corner:
      index === 0
        ? "topLeft"
        : index === 2
        ? "topRight"
        : index === 6
        ? "bottomLeft"
        : index === 8
        ? "bottomRight"
        : undefined,
  } as SquareProps;
});
