import {useGameState} from "./UseGameState";
import styles from "./game.module.css";
import {GameInfo} from "./GameInfo";
import {GameCell} from "./GameCell";

export default function Game() {

    const {
        cells,
        currentStep,
        winnerSequence,
        handleCellClick,
        handleResetClick,
        winnerSymbol,
        isDraw
    } = useGameState()

    return (
        <div className={styles.game}>
            <GameInfo
                isDraw={isDraw}
                winnerSymbol={winnerSymbol}
                currentStep={currentStep}
            />
            <div className={styles.game_field}>
                {cells.map((symbol, index) => (
                    <GameCell
                        symbol={symbol}
                        isWinner={winnerSequence?.includes(index)}
                        onClick={() => handleCellClick(index)}
                    />

                ))}
            </div>
            <button className={styles.reset} onClick={handleResetClick}>Сбросить</button>
        </div>
    )
}
