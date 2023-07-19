import React, { useMemo } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks/hooks";
import Square from "./Square";
import { handlePlay } from "../redux/features/game-slice";

const Board: React.FC = () => {
  const dispatch = useAppDispatch();
  const { gameBoard, isDisable } = useAppSelector(state => state.game);

  const dispatchPlayGame = (squareId: number) => dispatch(handlePlay(squareId));

  const memoizedGameBoard = useMemo(() => {
    return gameBoard?.map((square, index: number) => {
      return (
        <Square key={index} onClick={() => dispatchPlayGame(index)} disabled={isDisable}>
          {square}
        </Square>
      );
    });
  }, [gameBoard]);

  return (
    <div className=" grid grid-cols-[repeat(3,_160px)] gap-1 border-2 border-gray-300 rounded-md p-1">
      {memoizedGameBoard}
    </div>
  );
};

export default Board;
