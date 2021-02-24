import { useState } from 'react';
import styles from '../styles/components/ChallengeBox.module.css';

export default function ChallengeBox() {
    const [hasChallengeIsActive, setHasChallengeIsActive] = useState(true);


    return (
        <div className={styles.challengeBoxContainer}>
            {hasChallengeIsActive ? (
                <div className={styles.challengeActive}>
                    <header>Ganhe 400 xp</header>

                    <main>
                        <img src="icons/body.svg" />
                        <strong>Novo desafio</strong>
                        <p>Levante e faça uma caminhada de 3 minutos</p>
                    </main>

                    <footer>
                        <button type="button" className={styles.challengeFailedButton}>Falhei</button>
                        <button type="button" className={styles.challengeSuccededButton}>Completei</button>
                    </footer>
                </div>
            ) : (
                <div className={styles.challengeNotActive}>
                    <strong>Finalize um ciclo para receber um desafio.</strong>
                    <p>
                        <img src="icons/level-up.svg" alt="Level Up" />
                            Avance de Level completando desafios
                        </p>
                </div>
            )}
        </div>

    )
}