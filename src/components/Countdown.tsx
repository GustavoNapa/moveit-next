import { useState, useEffect } from 'react';
import styles from '../styles/components/Countdown.module.css';

let countdownTimeout: NodeJS.Timeout;

export function Countdown() {
    const [time, setTime] = useState(0.1 * 60);
    const [isActive, setisActive] = useState(false);
    const [hasFinished, setHasFinished] = useState(false);

    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

    const [textButton, setTextButton] = useState("Iniciar um ciclo")

    function startCountDown() {
        // Ideia que eu criei no meio do caminho para dar pause no contador
        if (isActive) {
            setisActive(false);
            return;
        }
        setisActive(true);
    }

    function resetCountDown() {
        clearTimeout(countdownTimeout);
        setisActive(false);
        setTime(.1 * 60);
    }

    useEffect(() => {
        if (isActive && time > 0) {
            countdownTimeout = setTimeout(() => {
                setTime(time - 1)
            }, 1000);
        } else if (isActive && time === 0) {
            setHasFinished(true);
            setisActive(false);
        }
    }, [isActive, time])

    return (
        <div>
            <div className={styles.countdownContainer}>
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRight}</span>
                </div>

                <span>:</span>

                <div>
                    <span>{secondLeft}</span>
                    <span>{secondRight}</span>
                </div>
            </div>

            { hasFinished ? (
                <button disabled className={styles.countdownButton}>
                    Ciclo encerrado
                </button>
            ) : (
                <>
                    { isActive ? (
                        <button className={`${styles.countdownButton} ${styles.countdownButtonIsActive}`} onClick={resetCountDown}>
                            Abandonar ciclo
                        </button>
                    ) : (
                        <button className={`${styles.countdownButton}`} onClick={startCountDown}>
                            Iniciar um ciclo
                        </button>
                    )}
                </>
            )}
        </div>
    );
}