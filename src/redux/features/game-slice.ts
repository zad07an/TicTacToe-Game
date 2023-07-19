import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import winningCombinations from "../../combinations/combinations";

interface GameStateProps {
  gameBoard: (string | null)[];
  playerScore: { playerX: number; playerO: number };
  nextPlayerTurn: boolean;
  winnerLine: { winner: { indexes: number[] } };
  isDisable: boolean;
}

const initialState: GameStateProps = {
  gameBoard: Array(9).fill(null),
  playerScore: { playerX: 0, playerO: 0 },
  nextPlayerTurn: false,
  winnerLine: { winner: { indexes: [] } },
  isDisable: false
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    handlePlay: (state, { payload }: PayloadAction<number>) => {
      const updatedGameBoard = state.gameBoard?.map((square, index: number) => {
        if (index === payload && square === null) {
          state.nextPlayerTurn = !state.nextPlayerTurn;
          return state.nextPlayerTurn ? "X" : "O";
        } else {
          return square;
        }
      });

      const checkWinner = (board: (string | null)[]) => {
        for (let i = 0; i < winningCombinations.length; i++) {
          const [a, b, c] = winningCombinations[i];
          if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            state.winnerLine.winner.indexes = winningCombinations[i];
            state.isDisable = true;
            return board[a];
          }
        }
      };

      const winnerIs = checkWinner(updatedGameBoard);

      if (winnerIs) {
        if (winnerIs === "X") {
          state.playerScore = { ...state.playerScore, playerX: state.playerScore.playerX + 1 };
        } else {
          state.playerScore = { ...state.playerScore, playerO: state.playerScore.playerO + 1 };
        }
      }

      state.gameBoard = updatedGameBoard;
    },
    handlePlayAgain: state => {
      return {
        ...state,
        gameBoard: Array(9).fill(null),
        winnerLine: { winner: { indexes: [] } },
        isDisable: false,
        nextPlayerTurn: false
      };
    },
    handleResetGame: () => {
      return initialState;
    }
  }
});

export const { handlePlay, handlePlayAgain, handleResetGame } = gameSlice.actions;
export default gameSlice.reducer;
