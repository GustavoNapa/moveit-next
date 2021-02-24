import { useContext } from 'react';
import { challengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/ExperienceBar.module.css';

interface experience {
    current: number,
    minValue: number,
    maxValue: number,
}

export function ExperienceBar() {
    const { currentExperience, experienceToNextLevel } = useContext(challengesContext);

    const minValue = 0

    const percentToNextLevel = Math.round(currentExperience * 100) / experienceToNextLevel;

    return (
        <header className={styles.experienceBar}>
            <span> {minValue} xp </span>
            <div>
                <div style={{ width: percentToNextLevel + '%' }} />
                <span className={styles.currentExperience} style={{ left: percentToNextLevel + '%' }}>
                    {currentExperience}xp
                </span>
            </div>
            <span> {experienceToNextLevel} xp </span>
        </header>
    );
}