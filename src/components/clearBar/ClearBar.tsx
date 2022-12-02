import styles from './clearBar.module.css';
import {Message} from '../../App';
type PropsClearBar={
    setList:(list:null)=>void,
    showMessage:(message:Message)=>void,
}
const ClearBar = ({setList, showMessage}:PropsClearBar) => {
    const clearItems=()=>{
        setList(null);
        showMessage({text:"Empty List", variant:"danger"})
    }
    return (
        <div className={styles.clearBar}>
            <button className={styles.clrBtn} onClick={clearItems}>Clear Items</button>
        </div>
    );
};

export default ClearBar;
