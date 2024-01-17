import { useState, useEffect } from 'react';
import styles from '../styles/CountDuration.module.css';

const CountDuration = () => {
    const [startDateTime, setStartDateTime] = useState('');
    const [counting, setCounting] = useState(false);
    const [remainingDuration, setRemainingDuration] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleDateTimeChange = (event) => {
        setStartDateTime(event.target.value);
    };

    const handleCount = () => {
        if (!startDateTime) {
            alert('Please select a start date and time.');
            return;
        }

        setLoading(true);

        setTimeout(() => {
            setCounting(true);
            setLoading(false);
        }, 1000);
    };

    const handleReset = () => {
        setStartDateTime('');
        setCounting(false);
        setRemainingDuration(null);
    };

    useEffect(() => {
        let intervalId;

        if (counting && startDateTime) {
            const inputTime = new Date(startDateTime).getTime();

            intervalId = setInterval(() => {
                const currentTime = new Date().getTime();
                const remainingDurationInMillis = Math.max(0, inputTime - currentTime);

                setRemainingDuration(remainingDurationInMillis);
            }, 1000);
        } else {
            setRemainingDuration(null);
        }

        return () => {
            clearInterval(intervalId);
        };
    }, [counting, startDateTime]);

    const formatTime = (timeInMillis) => {
        const seconds = Math.floor((timeInMillis / 1000) % 60);
        const minutes = Math.floor((timeInMillis / (1000 * 60)) % 60);
        const hours = Math.floor((timeInMillis / (1000 * 60 * 60)) % 24);
        const days = Math.floor(timeInMillis / (1000 * 60 * 60 * 24));

        return { days, hours, minutes, seconds };
    };

    return (
        <div>
            <h1> Count Duration</h1>
            <div className={styles.container}>
                <label>
                    <p>Input Count Duration</p>
                    <input type="datetime-local" value={startDateTime} onChange={handleDateTimeChange} />
                </label>
                <div className={styles.buttons}>
                    <button onClick={handleCount} disabled={loading}>
                        {loading ? 'Counting...' : 'Count'}
                    </button>
                    <button onClick={handleReset}>Reset</button>
                </div>
                {remainingDuration !== null && (
                    <div className={styles.resultContainer}>
                        <p>Remaining Duration:</p>
                        <div className={styles.result}>
                            <div className={styles.timeBox}>
                                <div className={styles.time}>{formatTime(remainingDuration).days}</div>
                                <div className={styles.label}>days</div>
                            </div>
                            <div className={styles.timeBox}>
                                <div className={styles.time}>{formatTime(remainingDuration).hours}</div>
                                <div className={styles.label}>hours</div>
                            </div>
                            <div className={styles.timeBox}>
                                <div className={styles.time}>{formatTime(remainingDuration).minutes}</div>
                                <div className={styles.label}>minutes</div>
                            </div>
                            <div className={styles.timeBox}>
                                <div className={styles.time}>{formatTime(remainingDuration).seconds}</div>
                                <div className={styles.label}>seconds</div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CountDuration;
