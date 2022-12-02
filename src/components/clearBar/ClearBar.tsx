import styles from './clearBar.module.css';

const ClearBar = ({setList, showMessage}) => {
    const clearItems=()=>{
        setList([]);
        showMessage({text:"Empty List", variant:"danger"})
    }
    return (
        <div className={styles.clearBar}>
            <button className={styles.clrBtn} onClick={clearItems}>Clear Items</button>
        </div>
    );
};

export default ClearBar;
