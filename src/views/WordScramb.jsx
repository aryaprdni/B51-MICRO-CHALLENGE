/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import styles from '../styles/WordScramb.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const WordScramble = () => {
  const initialWordList = [
    { word: 'Javascript', hint: 'A programming language for web development' },
    { word: 'Python', hint: 'A versatile and high-level programming language' },
    { word: 'React', hint: 'A JavaScript library for building user interfaces' },
    { word: 'Angular', hint: 'A TypeScript-based open-source front-end web application framework' },
    { word: 'Anies Baswedan', hint: 'Paslon 1'},
    { word: 'Prabowo Subianto', hint: 'Paslon 2'},
    { word: 'Ganjar Pranowo', hint: 'Paslon 3'},
    { word: 'Arya', hint: 'Ciri-cirinya orang gantenk dan intelek'},
    { word: 'Arya Perdana', hint: 'Orang tertamvan di dunia dan media sosial'},
    { word: 'Arya Perdana Irawan', hint: 'Ganteng-ganteng swag'}
  ];

  const [wordList, setWordList] = useState(initialWordList);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [scrambledWord, setScrambledWord] = useState('');
  const [userInput, setUserInput] = useState('');
  const [message, setMessage] = useState('');
  const [hint, setHint] = useState('');
  const [isChecking, setIsChecking] = useState(false);
  const [showTryAgain, setShowTryAgain] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    const shuffledWordList = [...initialWordList].sort(() => Math.random() - 0.5);
    setWordList(shuffledWordList);
  }, []); 

  useEffect(() => {
    const { word, hint } = wordList[currentWordIndex];
    const initialScrambledWord = word.split('').sort(() => Math.random() - 0.5).join('');
    setScrambledWord(initialScrambledWord);
    setHint(hint);
    setIsChecking(false);
  }, [wordList, currentWordIndex]);

  useEffect(() => {
    if (isChecking) {
      const originalWord = wordList[currentWordIndex].word;
      const userInputLowerCase = userInput.toLowerCase();
      const originalWordLowerCase = originalWord.toLowerCase();

      if (userInputLowerCase === originalWordLowerCase) {
        setMessage('Congratulations! You guessed it right!');
        setScore(score + 1);
      } else {
        setMessage('Opps loser, Try again!!!' + '\n' + 'The correct answer is : ' + originalWord);
      }

      setIsChecking(false);
    }
  }, [isChecking, currentWordIndex, userInput, wordList]);

  const generateScrambledWord = () => {
    const { word, hint } = wordList[currentWordIndex];
    const shuffledWord = word.split('').sort(() => Math.random() - 0.5).join('');
    setScrambledWord(shuffledWord);
    setHint(hint);
  };

  const handleCheckAnswer = () => {
    setIsChecking(true);
    setShowTryAgain(true);
  };

  const handleTryAgain = () => {
    generateScrambledWord();

    const nextWordIndex = (currentWordIndex + 1) % wordList.length;
    setCurrentWordIndex(nextWordIndex);

    setMessage('');
    setIsChecking(false);
    setShowTryAgain(false);
  };

  return (
    <div className={styles.container}>
      <div>
        <h1 className={styles.title}>Word Scramble</h1>
        <div className={styles.wordContainer}>
          <p className={styles.word}>
            Guess the word : <br />
            <FontAwesomeIcon icon={faArrowRight}/> {scrambledWord} <FontAwesomeIcon icon={faArrowLeft}/>
          </p>
          <p className={styles.hint}>Hint : {hint}</p>
        </div>

        <div className={styles.boxAnswer}>
          <label>
            <p>Enter your guess :</p>
            <input type="text" value={userInput} onChange={(e) => setUserInput(e.target.value)} />
          </label>

          <div className={styles.boxBtn}>
            <button type="button" onClick={handleCheckAnswer} disabled={isChecking}>
              Check Answer
            </button>
            {showTryAgain && (
              <button type="button" onClick={handleTryAgain}>
                Try Again
              </button>
            )}
          </div>
        </div>
      </div>
      

      <div className={styles.boxScore}>
        <p>Score : <br />{score}</p>
        <p>{message && (
          <p className={styles.message}>{message}</p>
        )}</p>
      </div>
    </div>
  );
};

export default WordScramble;
