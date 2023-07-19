import React from "react";
import { useAppSelector } from "../redux/hooks/hooks";

const ScoreDashboard: React.FC = () => {
  const { playerScore } = useAppSelector(state => state.game);

  return (
    <div className=" flex items-center justify-center gap-6 text-2xl py-2 px-6 rounded-md border-2 border-gray-300">
      <div className=" flex items-center flex-col gap-2 text-blue-500">
        <p>Player X</p>
        <p className=" font-semibold">{playerScore.playerX}</p>
      </div>
      <div className=" flex items-center flex-col gap-2 text-red-500">
        <p>Player O</p>
        <p className=" font-semibold">{playerScore.playerO}</p>
      </div>
    </div>
  );
};

export default ScoreDashboard;
