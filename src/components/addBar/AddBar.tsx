import styles from './addBar.module.css';
import {useEffect, useState} from 'react';

const AddBar = ({list, setList,itemToEdit,setItemToEdit,showMessage}) => {
    const [input, setInput] = useState(itemToEdit?list[itemToEdit]:"");
    useEffect(()=>{
         setInput(list[itemToEdit]); //find another solution
    },[itemToEdit]);
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(input==="") return;
        if(itemToEdit!==null){
            const newList=[...list];
            newList[itemToEdit]= input;
            setList([...newList]);
            showMessage({text:"Item edited successfully.",variant:"success"});

            setItemToEdit(null);

        }else{

            setList([input,...list])
        }
        setInput("");

    }
    return (

        <form className={styles.addBar} onSubmit={handleSubmit}>

            <input type="text" className={styles.input} placeholder={"e.g. eggs"} value={input} onChange={(e) => setInput(e.target.value)}/>
            <button className={styles.btn}>{itemToEdit===null?"Submit":"Edit"}</button>
        </form>

    );
};

export default AddBar;
