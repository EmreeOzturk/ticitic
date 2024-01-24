import Square from "./components/Square";
import { SquareArray } from "./data";
import useNextValue from "./hooks/useNextValue";
export default function App() {
  const { nextValueText, toggleNextValue } = useNextValue();

  return (
    <div className="h-screen w-screen flex justify-center items-center bg-noisy brightness-50">
      <div className="grid grid-cols-3 gap-1 ">
        {SquareArray.map((square) => {
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