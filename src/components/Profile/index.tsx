import styles from './index.module.css';

export function Profile () {
    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/JoshuaLevy029.png" alt="Joshua Levy"/>
            <div>
                <strong>Joshua Levy</strong>
                <p>
                    <img src="icons/level.svg" alt="Level"/>
                    Level 1
                </p>
            </div>
        </div>
    );
}