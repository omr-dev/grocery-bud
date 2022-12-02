import styles from './list.module.css';
import {FaEdit} from 'react-icons/fa'
import{FaTrash} from 'react-icons/fa'

const List = ({list,setItemToEdit, setList,showMessage}) => {
    const removeItem=(index)=>{
        const newList=[...list];
        newList.splice(index,1);
        setList(newList);
        showMessage({text:"item removed",variant:"danger"})
    }
    return (
        <div className={styles.listContainer}>
            {list.map((item,index)=>{
                return (
                    <div className={styles.listItem} key={index}>
                        <p>{item}</p>
                        <div className={styles.buttons}>
                            <button className={styles.btn+" "+styles.editBtn} onClick={()=>setItemToEdit(index)}><FaEdit/></button>
                            <button className={styles.btn+" "+styles.deleteBtn} onClick={()=>removeItem(index)}><FaTrash/></button>

                        </div>
                    </div>

                );
            })}



        </div>
    );
};

export default List;
