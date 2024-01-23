import { useState } from "react";
import styles from "./ToDoInput.module.css";

const ToDoInput = () => {
  const [list, setList] = useState([
    { id: 0, title: "", content: "", isDone: false },
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
      isDone: false,
    };

    setList([...list, newList]);
    setTitle("");
    setContent("");
  };

  const removeBtnHandler = (id) => {
    const newList = list.filter((item) => item.id !== id);
    setList(newList);
  };

  const toggleCompleteHandler = (id) => {
    const newList = list.map((item) =>
      item.id === id ? { ...item, isDone: !item.isDone } : item
    );
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
        <div>
          <h2>
            <strong>Working...</strong>
          </h2>
          {list
            .filter((item) => !item.isDone)
            .map((item) => (
              <div key={item.id}>
                <p>
                  {item.title} {item.content}
                </p>
                <button onClick={() => removeBtnHandler(item.id)}>삭제</button>
                <button onClick={() => toggleCompleteHandler(item.id)}>
                  완료
                </button>
              </div>
            ))}
        </div>
        <div>
          <h2>
            <strong>Done!</strong>
          </h2>
          {list
            .filter((item) => item.isDone)
            .map((item) => (
              <div key={item.id}>
                <p>
                  {item.title} {item.content}
                </p>
                <button onClick={() => toggleCompleteHandler(item.id)}>
                  취소
                </button>
                <button onClick={() => removeBtnHandler(item.id)}>삭제</button>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ToDoInput;
