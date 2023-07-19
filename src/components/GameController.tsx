import React from "react";
import { useAppDispatch } from "../redux/hooks/hooks";
import { handlePlayAgain, handleResetGame } from "../redux/features/game-slice";

const GameController: React.FC = () => {
  const dispatch = useAppDispatch();

  const dispatchPlayAgain = () => dispatch(handlePlayAgain());
  const dispatchResetGame = () => dispatch(handleResetGame());

  return (
    <div className=" flex items-center justify-center gap-4 py-2 px-6 rounded-md border-2 border-gray-300">
      <button onClick={dispatchResetGame} className=" rounded-sm bg-red-500 text-white px-4 py-1">
        Reset
      </button>
      <button onClick={dispatchPlayAgain} className=" rounded-sm bg-blue-500 text-white px-4 py-1">
        Play again
      </button>
    </div>
  );
};

export default GameController;
