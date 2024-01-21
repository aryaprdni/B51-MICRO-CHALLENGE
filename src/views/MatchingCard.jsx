import { useState } from 'react';
import styles from '../styles/MatchingCard.module.css';

const MatchingCard = () => {
    const animals = ["🐶", "🐹", "🐰", "🐺", "🐨", "🐼", "🦊", "🦁"];
    const [cards, setCards] = useState([]);
    const [flippedIndexes, setFlippedIndexes] = useState([]);
    const [matchedPairs, setMatchedPairs] = useState([]);
    const [isGameWon, setIsGameWon] = useState(false);
    const [isGameStarted, setIsGameStarted] = useState(false);

    const shuffle = (array) => {
        let currentIndex = array.length, randomIndex;
        while (currentIndex !== 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
        }
        return array;
    };

    const startGame = () => {
        const shuffledCards = shuffle([...animals, ...animals]);
        setCards(shuffledCards);
        setFlippedIndexes([]);
        setMatchedPairs([]);
        setIsGameWon(false);
        setIsGameStarted(true);
    };

    const handleCardClick = (index) => {
        if (!isGameStarted) {
            return;
        }

        if (flippedIndexes.length === 2 || flippedIndexes.includes(index) || matchedPairs.includes(cards[index])) {
            return;
        }

        const newFlippedIndexes = [...flippedIndexes, index];
        setFlippedIndexes(newFlippedIndexes);

        if (newFlippedIndexes.length === 2) {
            setTimeout(() => checkMatch(newFlippedIndexes), 1000);
        }
    };

    const checkMatch = (flippedIndexes) => {
        const [firstIndex, secondIndex] = flippedIndexes;
        const isMatch = cards[firstIndex] === cards[secondIndex];

        if (isMatch) {
            setMatchedPairs([...matchedPairs, cards[firstIndex]]);
            if (matchedPairs.length === animals.length - 1) {
                setIsGameWon(true);
            }
        }

        setTimeout(() => setFlippedIndexes([]), 500);
    };

    const handleTryAgain = () => {
        setIsGameStarted(false);
        startGame();
    };

    const handleReset = () => {
        setCards([]);
        setFlippedIndexes([]);
        setMatchedPairs([]);
        setIsGameWon(false);
        setIsGameStarted(false);
    };

    return (
        <div className={styles.container}>
            <div className={styles.gameContainer}>
                <div className={styles.gameHeader}>
                    <h1 className={styles.gameTitle}>Matching Game</h1>
                    <h5 className={styles.gameInstructions}>Match two consecutive animal images below for success!</h5>
                </div>
                <div className={styles.cardContainer}>
                    {cards.map((card, index) => (
                        <button
                            key={index}
                            className={`${styles.card} ${flippedIndexes.includes(index) || matchedPairs.includes(card) ? styles.flippedCard : ''}`}
                            onClick={() => handleCardClick(index)}
                        >
                            {flippedIndexes.includes(index) || matchedPairs.includes(card) ? card : '?'}
                        </button>
                    ))}
                </div>
                {!isGameStarted && (
                    <div className={styles.buttonContainer}>
                        <button className={styles.startButton} onClick={startGame}>
                            Start Game
                        </button>
                    </div>
                )}
                {isGameWon && (
                    <div className={styles.buttonContainer}>
                        <h3 className={styles.winMessage}>You Win!</h3>
                        <button className={styles.tryAgainButton} onClick={handleTryAgain}>
                            Try Again
                        </button>
                    </div>
                )}
            </div>
            {isGameStarted && (
                <button className={styles.tryAgainButton} onClick={handleReset}>
                    Reset Game
                </button>
            )}
        </div>
    );
};

export default MatchingCard;
