import styles from './list.module.css';
import {FaEdit} from 'react-icons/fa'
import{FaTrash} from 'react-icons/fa'

const List = ({list,setItemToEdit}) => {
    return (
        <div className={styles.listContainer}>
            {list.map((item,index)=>{
                return (
                    <div className={styles.listItem} key={index}>
                        <p>{item}</p>
                        <div className={styles.buttons}>
                            <button className={styles.btn+" "+styles.editBtn} onClick={()=>setItemToEdit(index)}><FaEdit/></button>
                            <button className={styles.btn+" "+styles.deleteBtn}><FaTrash/></button>

                        </div>
                    </div>

                );
            })}



        </div>
    );
};

export default List;
