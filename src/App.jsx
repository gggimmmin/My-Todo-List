import styles from "./App.module.css";
import Header from "./components/Header";
import ToDoInput from "./components/ToDoInput";

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <ToDoInput />
    </div>
  );
}

export default App;
