import { GameLayout } from "./ui/GameLayout";
import { BackLink } from "./ui/BackLink";
import { GameInfo } from "./ui/GameInfo";
import { GameTitle } from "./ui/GameTitle";
import { PlayerInfo } from "./ui/PlayerInfo";
import { PLAYERS } from "./constants";

export function Game() {
  return (
    <GameLayout
      backLink={<BackLink />}
      title={<GameTitle />}
      gameInfo={
        <GameInfo isRatingGame timeMode={"1 мин. на ход"} playersCount={4} />
      }
      playersList={PLAYERS.map((player, index) => (
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
    />
  );
}
