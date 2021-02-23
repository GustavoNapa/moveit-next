import styles from '../styles/components/ExperienceBar.module.css';

interface experience {
    current: number,
    minValue: number,
    maxValue: number,
}

export function ExperienceBar(props: experience) {

    const currentValue = props.maxValue * (props.current / 100);

    return (
        <header className={styles.experienceBar}>
            <span> {props.minValue} xp </span>
            <div>
                <div style={{ width: props.current + '%' }} />
                <span className={styles.currentExperience} style={{ left: props.current + '%' }}>
                    {currentValue}xp
                </span>
            </div>
            <span> {props.maxValue} xp </span>
        </header>
    );
}