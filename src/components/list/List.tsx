import styles from './list.module.css';
import {FaEdit} from 'react-icons/fa'
import{FaTrash} from 'react-icons/fa'

const List = () => {
    return (
        <div className={styles.listContainer}>
            <div className={styles.listItem}>
                <p>Apple</p>
                <div className={styles.buttons}>
                    <button className={styles.btn+" "+styles.editBtn}><FaEdit/></button>
                    <button className={styles.btn+" "+styles.deleteBtn}><FaTrash/></button>

                </div>
            </div>
            <div className={styles.listItem}>
                <p>Banane</p>
                <div className={styles.buttons}>
                    <button className={styles.btn+" "+styles.editBtn}><FaEdit/></button>
                    <button className={styles.btn+" "+styles.deleteBtn}><FaTrash/></button>

                </div>
            </div>

        </div>
    );
};

export default List;
