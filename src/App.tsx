import Square from "./components/Square";
import useSquares from "./hooks/useSquare";
import useFillSquare from "./hooks/useFillSquare";
import { checkWinCondition } from "./helpers";
import { useEffect, useState } from "react";

import NoisyOverlay from "./components/NoisyOverlay";
import MouseProvider from "./components/MouseProvider";
import { socket } from './socket';
import { ConnectionState } from './components/ConnectionState';
import { ConnectionManager } from './components/ConnectionManager';
import { Square as sq } from "./types";
import Enter from "./components/Enter";
import LoginRegisterForm from "./components/LoginRegisterForm";
export default function App() {
  const { squares, setSquares } = useSquares();
  const { fillSquare } = useFillSquare();
  const [isConnected, setIsConnected] = useState(socket.connected);
  const [isLogged, setIsLogged] = useState(false);
  const [loginOrRegister, setLoginOrRegister] = useState("login");

  useEffect(() => {

    function onConnect() {
      setIsConnected(true);
    }

    function onDisconnect() {
      setIsConnected(false);
    }
    socket.on('connect', onConnect);
    socket.on('disconnect', onDisconnect);

    return () => {
      socket.off('connect', onConnect);
      socket.off('disconnect', onDisconnect);
    };
  }, []);
  useEffect(() => {

    function onUserConnected(name: string) {
      alert(`${name} connected`)
    }
    socket.on('user-connected', onUserConnected);

    return () => {
      socket.off('user-connected', onUserConnected);
    };
  }, [])

  useEffect(() => {
    function onReceiveTableData(squaress: { id: number, currentValue: sq["value"] }) {
      setSquares((prevSquares: sq[]) => {
        return prevSquares.map((square) => {
          if (square.id === squaress.id) {
            return {
              ...square,
              value: squaress.currentValue,
            };
          }
          return square;
        });
      }
      );
      console.log(squares)
    }
    socket.on('send-table-data', onReceiveTableData);
    return () => {
      socket.off('send-table-data', onReceiveTableData);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  console.log(squares)




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


  if (!isLogged) {
    return (
      <LoginRegisterForm loginOrRegister={loginOrRegister} setLoginOrRegister={setLoginOrRegister} />
    )
  }


  return (
    <MouseProvider
      renderCharBuffer={30}
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
      <div className="h-full w-screen flex-col flex justify-center items-center bg-black gap-12" >
        <ConnectionState isConnected={isConnected} />
        <ConnectionManager />
        <Enter />
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




