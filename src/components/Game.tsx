import React from "react";
import Board from "./Board";
import ScoreDashboard from "./ScoreDashboard";
import GameController from "./GameController";

const Game: React.FC = () => {
  return (
    <div className=" w-full h-screen flex items-center justify-center flex-col gap-6">
      <ScoreDashboard />
      <Board />
      <GameController />
    </div>
  );
};

export default Game;
