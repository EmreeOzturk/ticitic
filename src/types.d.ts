export type SquareComponentProps = {
  id?: number;
  value?: "X" | "O";
  corner?: "topLeft" | "topRight" | "bottomLeft" | "bottomRight" | undefined;
  fillSquare: (id, callback) => void;
  setSq: React.Dispatch<React.SetStateAction<Square[]>>;
};



export type Square = {
  id?: number;
  value?: "X" | "O" | undefined;
  corner?: "topLeft" | "topRight" | "bottomLeft" | "bottomRight" | undefined;
};

export type PlayerProps = {
  name: string;
  score: number;
  symbol: "X" | "O";
  isTurn: boolean;
};
