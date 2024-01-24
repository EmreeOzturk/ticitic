import Square from "./components/Square";

export default function App() {
  return (
    <div className="h-screen w-screen flex justify-center items-center bg-noisy">
      <div className="grid grid-cols-3 gap-1 ">
        <Square isCorner="topLeft" />
        <Square />
        <Square isCorner="topRight" />
        <Square />
        <Square />
        <Square />
        <Square isCorner="bottomLeft" />
        <Square />
        <Square isCorner="bottomRight" />
      </div>
    </div>
  )
}