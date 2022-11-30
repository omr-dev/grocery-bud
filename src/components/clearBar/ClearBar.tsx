import styles from './clearBar.module.css';

const ClearBar = () => {
    return (
        <div className={styles.clearBar}>
            <button className={styles.clrBtn}>Clear Items</button>
        </div>
    );
};

export default ClearBar;
