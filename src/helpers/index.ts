import { Square } from "../types";

export const checkWinCondition = (board: Square[]) => {
  const winConditions = [
    // Horizontal
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],

    // Vertical
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],

    // Diagonal
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < winConditions.length; i++) {
    const [a, b, c] = winConditions[i];
    if (
      board[a].value &&
      board[a].value === board[b].value &&
      board[a].value === board[c].value
    ) {
      return board[a].value;
    }
  }
  return null;
};
