import { GameLayout } from "./ui/GameLayout";
import { BackLink } from "./ui/BackLink";
import { GameInfo } from "./ui/GameInfo";
import { GameTitle } from "./ui/GameTitle";
import { PlayerInfo } from "./ui/PlayerInfo";
import { PLAYERS } from "./constants";
import { GameMoveInfo } from "./ui/GameMoveInfo";
import { GameCell } from "./ui/GameCell";
import { useGameState } from "./model/useGameState";
import { GameOverModal } from "./ui/GameOverModal";

const PLAYERS_COUNT = 2;

export function Game() {
  const {
    cells,
    currentMove,
    nextMove,
    handleCellClick,
    winnerSymbol,
    winnerSequence,
  } = useGameState(PLAYERS_COUNT);

  const winnerPlayer = PLAYERS.find((player) => player.symbol === winnerSymbol);

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
              handleCellClick(index);
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
