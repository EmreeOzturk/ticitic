export type SquareProps = {
  id?: number;
  value?: "X" | "O";
  corner?: "topLeft" | "topRight" | "bottomLeft" | "bottomRight" | undefined;
};

export type PlayerProps = {
  name: string;
  score: number;
  symbol: "X" | "O";
  isTurn: boolean;
};
