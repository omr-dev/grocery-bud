import styles from './App.module.css';
import Heading from './components/heading/Heading';
import ButtonBar from './components/buttonbar/ButtonBar';
import List from './components/list/List';
import AddBar from './components/addBar/AddBar';

function App() {


  return (
    <div className={styles.App}>
      <Heading/>
      <AddBar/>
      <List/>
      <ButtonBar/>

    </div>
  )
}

export default App
