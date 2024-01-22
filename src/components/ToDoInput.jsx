import styles from "./ToDoInput.module.css";

const ToDoInput = () => {
  return (
    <div className={styles.Formcontrols}>
      <div>
        제목
        <input />
        내용
        <input />
      </div>
      <div>
        <button>추가하기</button>
      </div>
    </div>
  );
};
export default ToDoInput;
