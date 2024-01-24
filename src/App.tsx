import Square from "./components/Square";
import { useSquares } from "./hooks/useSquare";
export default function App() {
  const { squares, setSquares } = useSquares();
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
            />
          )
        })}
      </div>
    </div>
  )
}