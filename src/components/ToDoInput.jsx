import { useState } from "react";
import styles from "./ToDoInput.module.css";

const ToDoInput = () => {
  const [list, setList] = useState([
    { id: 1, title: "리액트공부", content: "리액트1강듣기" },
  ]);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const titleChangeHandler = (e) => {
    setTitle(e.target.value);
  };

  const contentChangeHandler = (e) => {
    setContent(e.target.value);
  };

  const addToDoHandler = () => {
    const newList = {
      id: list.length + 1,
      title: title,
      content: content,
    };

    setList([...list, newList]);
    setTitle("");
    setContent("");
  };

  const removeBtnHandler = (id) => {
    const newList = list.filter((item) => item.id !== id);
    setList(newList);
  };

  return (
    <div>
      <div className={styles.Formcontrols}>
        <div className={styles.titleContainer}>
          제목
          <input type="text" value={title} onChange={titleChangeHandler} />
          내용
          <input type="text" value={content} onChange={contentChangeHandler} />
        </div>
        <div>
          <button className={styles.addButton} onClick={addToDoHandler}>
            추가하기
          </button>
        </div>
      </div>
      <div>
        {list.map((item) => (
          <div>
            <p key={item.id}>
              {item.title}, {item.content}
            </p>
            <button onClick={() => removeBtnHandler(item.id)}>삭제</button>
          </div>
        ))}
      </div>
    </div>
  );
};
export default ToDoInput;
