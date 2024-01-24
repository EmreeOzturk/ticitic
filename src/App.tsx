import Square from "./components/Square";
import useSquares from "./hooks/useSquare";
import useFillSquare from "./hooks/useFillSquare";
export default function App() {
  const { squares, setSquares } = useSquares();
  const { fillSquare } = useFillSquare();

  return (
    <div className="h-screen w-screen flex justify-center items-center bg-noisy brightness-50">
      <div className="grid grid-cols-3 gap-1 ">
        {squares.map((square) => {
          console.log(square)
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
  )
}