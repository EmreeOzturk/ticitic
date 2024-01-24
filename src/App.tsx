import Square from "./components/Square";
import useSquares from "./hooks/useSquare";
import useFillSquare from "./hooks/useFillSquare";
import { checkWinCondition } from "./helpers";
import { useEffect } from "react";
import NoisyOverlay from "./components/NoisyOverlay";
import MouseProvider from "./components/MouseProvider";

export default function App() {
  const { squares, setSquares } = useSquares();
  const { fillSquare } = useFillSquare();

  useEffect(() => {
    const squares = JSON.parse(localStorage.getItem("squares") || "[]");
    console.log(squares)
    if (squares.length > 0) {
      setSquares(squares);
    }
  }, [setSquares]);

  useEffect(() => {
    localStorage.setItem("squares", JSON.stringify(squares));
  }, [squares]);

  const isWin = checkWinCondition(squares);
  if (isWin) {
    return (
      <div className="h-screen w-screen flex justify-center items-center bg-noisy brightness-50" >
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-9xl font-bold">
          <h1 className="text-red-500">You Win! {isWin}</h1>
        </div>
      </div>
    )
  }

  return (
    <MouseProvider
      renderImageBuffer={50}
      rotationRange={25}
      chars={[
        "T",
        "I",
        "C",
        "T",
        "A",
        "C",
        "T",
        "O",
        "E",
      ]}>
      <div className="h-screen w-screen flex-col flex justify-center items-center bg-black gap-12" >
        <h2 className="text-center text-7xl font-thin text-indigo-400">
          {"TiiiiiiiiiiiicTaaaaaaaacToe".split("").map((child, idx) => (
            <span className="hoverText" key={idx}>
              {child}
            </span>
          ))}
        </h2>
        <div className="grid grid-cols-3 gap-1 ">
          {squares.map((square) => {
            return (
              <Square
                key={square.id}
                id={square.id}
                value={square.value}
                corner={square?.corner}
                setSq={setSquares}
                fillSquare={fillSquare}
              />
            )
          })}
        </div>
      </div>
      <NoisyOverlay />
    </MouseProvider>
  )
}




