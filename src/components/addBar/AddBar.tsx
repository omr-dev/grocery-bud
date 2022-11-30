import styles from './addBar.module.css';

const AddBar = () => {
    return (
        <div className={styles.addBar}>
            <input type="text" className={styles.input} placeholder={"e.g. eggs"}/>
            <button className={styles.btn}>Submit</button>
        </div>
    );
};

export default AddBar;
