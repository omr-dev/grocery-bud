import styles from './App.module.css';
import Heading from './components/heading/Heading';
import List from './components/list/List';
import AddBar from './components/addBar/AddBar';
import ClearBar from './components/clearBar/ClearBar';
import MessageBar from './components/messageBar/MessageBar';
import {useEffect, useRef, useState} from 'react';

function App() {
    const [list, setList] = useState([]);
    const [message, setMessage] = useState(null);
    const [itemToEdit, setItemToEdit] = useState(null);
    const isFirstRender = useRef(true);
    useEffect(() => {


        const itemsInLocal = localStorage.getItem("items");
        if (itemsInLocal) {
            setList(JSON.parse(itemsInLocal));
        }

    }, []);
    useEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false;

        } else {
            localStorage.setItem("items", JSON.stringify(list));
        }
    }, [list]);
    const showMessage = ({text, variant}) => {
        setMessage({text, variant});
        setTimeout(() => {
            setMessage(null);
        }, 3000);
    };

    return (
        <div className={styles.App}>
            {message && <MessageBar message={message}/>}
            <Heading/>
            <AddBar setList={setList} list={list} itemToEdit={itemToEdit} setItemToEdit={setItemToEdit} showMessage={showMessage}/>
            {list.length > 0 && <>
                <List list={list} setItemToEdit={setItemToEdit} setList={setList} showMessage={showMessage}/>
                <ClearBar setList={setList} showMessage={showMessage}/></>}


        </div>
    );
}

export default App
