import styles from "./ToDoInput.module.css";

const ToDoInput = () => {
  return (
    <div className={styles.Formcontrols}>
      <div className={styles.titleContainer}>
        제목
        <input />
        내용
        <input />
      </div>
      <div>
        <button className={styles.addButton}>추가하기</button>
      </div>
    </div>
  );
};
export default ToDoInput;
