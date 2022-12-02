import styles from './addBar.module.css';
import {FormEvent, useEffect, useState} from 'react';
import { Message } from '../../App';
type PropsAddBar={
    list:string[]|null,
    setList:(newList:string[])=>void,
    itemToEdit:number|null,
    setItemToEdit:(id:number|null)=>void,
    showMessage:(message:Message)=>void
}

const AddBar = ({list, setList,itemToEdit,setItemToEdit,showMessage}:PropsAddBar) => {
    const [input, setInput] = useState((itemToEdit&&list)?list[itemToEdit]:"");
    useEffect(()=>{
        if(list && itemToEdit) setInput(list[itemToEdit]); //find another solution
    },[itemToEdit]);
    const handleSubmit=(e:FormEvent)=>{
        e.preventDefault();
        if(input==="") return;
        if(list){
        if(itemToEdit!==null){
            const newList=[...list];
            newList[itemToEdit]= input;
            setList([...newList]);
            showMessage({text:"Item edited successfully.",variant:"success"});

            setItemToEdit(null);

        }else{

            setList([input,...list])
            showMessage({text:"Item added successfully.",variant:"success"});

        }
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
