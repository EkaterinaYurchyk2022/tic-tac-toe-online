import { GameLayout } from "./ui/GameLayout";
import { BackLink } from "./ui/BackLink";
import { GameInfo } from "./ui/GameInfo";
import { GameTitle } from "./ui/GameTitle";
import { PlayerInfo } from "./ui/PlayerInfo";
import { PLAYERS } from "./constants";
import { GameMoveInfo } from "./ui/GameMoveInfo";
import { GameCell } from "./ui/GameCell";
import { GameOverModal } from "./ui/GameOverModal";
import {
  GAME_STATE_ACTIONS,
  gameStateReducer,
  initGameState,
} from "./model/gameStateReducer";
import { computeWinner } from "./model/computeWinner";
import { getNextMove } from "./model/getNextMove";
import { useReducer } from "react";
import { computeWinnerSymbol } from "./model/computeWinnerSymbol";

const PLAYERS_COUNT = 2;

export function Game() {
  const [gameState, dispatch] = useReducer(
    gameStateReducer,
    { playersCount: PLAYERS_COUNT },
    initGameState,
  );

  const winnerSequence = computeWinner(gameState);

  const nextMove = getNextMove(gameState);

  const winnerSymbol = computeWinnerSymbol(gameState, {
    nextMove,
    winnerSequence,
  });

  const winnerPlayer = PLAYERS.find((player) => player.symbol === winnerSymbol);

  const { cells, currentMove } = gameState;

  return (
    <>
      <GameLayout
        backLink={<BackLink />}
        title={<GameTitle />}
        gameInfo={
          <GameInfo isRatingGame timeMode={"1 мин. на ход"} playersCount={4} />
        }
        playersList={PLAYERS.slice(0, PLAYERS_COUNT).map((player, index) => (
          <PlayerInfo
            key={player.id}
            avatar={player.avatar}
            name={player.name}
            rating={player.rating}
            seconds={60}
            symbol={player.symbol}
            isRight={index % 2 === 1}
          />
        ))}
        gameMoveInfo={
          <GameMoveInfo currentMove={currentMove} nextMove={nextMove} />
        }
        gameCells={cells.map((cell, index) => (
          <GameCell
            key={index}
            disabled={!!winnerSymbol}
            isWinner={winnerSequence?.includes(index)}
            onClick={() => {
              dispatch({
                type: GAME_STATE_ACTIONS.CELL_CLICK,
                index,
              });
            }}
            symbol={cell}
          />
        ))}
      />
      <GameOverModal
        players={PLAYERS.slice(0, PLAYERS_COUNT).map((player, index) => (
          <PlayerInfo
            key={player.id}
            avatar={player.avatar}
            name={player.name}
            rating={player.rating}
            seconds={60}
            symbol={player.symbol}
            isRight={index % 2 === 1}
          />
        ))}
        winnerName={winnerPlayer?.name}
      />
    </>
  );
}
