import styles from './App.module.css';
import Heading from './components/heading/Heading';
import List from './components/list/List';
import AddBar from './components/addBar/AddBar';
import ClearBar from './components/clearBar/ClearBar';
import MessageBar from './components/messageBar/MessageBar';
import { useState} from 'react';

function App() {
    const[list,setList]=useState([]);
    const [message,setMessage]=useState(null);
    const[itemToEdit,setItemToEdit]=useState(null);

const showMessage=({text,variant})=>{
        setMessage({text,variant})
        setTimeout(()=>{setMessage(null)},3000);
    }

  return (
    <div className={styles.App}>
        {message&& <MessageBar message={message}/> }
      <Heading/>
      <AddBar setList={setList} list={list} itemToEdit={itemToEdit} setItemToEdit={setItemToEdit} showMessage={showMessage}/>
        {list.length>0&&<List list={list} setItemToEdit={setItemToEdit}/>}
      <ClearBar setList={setList}/>

    </div>
  )
}

export default App
