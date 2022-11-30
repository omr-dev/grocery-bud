import styles from './App.module.css';
import Heading from './components/heading/Heading';
import List from './components/list/List';
import AddBar from './components/addBar/AddBar';
import ClearBar from './components/clearBar/ClearBar';
import MessageBar from './components/messageBar/MessageBar';

function App() {


  return (
    <div className={styles.App}>
        <MessageBar/>
      <Heading/>
      <AddBar/>
      <List/>
      <ClearBar/>

    </div>
  )
}

export default App
