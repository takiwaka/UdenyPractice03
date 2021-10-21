import { useState } from "react";
import "./styles.css";

export const App = () => {
  const [todoText, setTodoText] = useState("");
  const [incompleteTodo, setIncompleteTodo] = useState([]);
  const [completeTodo, setCompleteTodo] = useState([
    "ccccc",
    "dddddd"
  ]);

  const onChangeTodoText = (event) =>
    setTodoText(event.target.value);

  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...incompleteTodo, todoText];
    setIncompleteTodo(newTodos);
    setTodoText("");
  };

  return (
    <>
      <div className="input-box">
        <input
          placeholder="TODO入力"
          value={todoText}
          onChange={onChangeTodoText}
        />
        <button onClick={onClickAdd}>追加</button>
      </div>

      <div className="incomplete-box">
        <h2 className="title">未完了のTODO</h2>
        <ul>
          {incompleteTodo.map((todo) => {
            return (
              <li key={todo} className="list-row">
                <p>{todo}</p>
                <button onClick={null}>完了</button>
                <button>削除</button>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="complete-box">
        <h2 className="title">完了したTODO</h2>
        <ul>
          {completeTodo.map((todo) => {
            return (
              <li key="todo" className="list-row">
                <p>{todo}</p>
                <button>戻す</button>
                <button>削除</button>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};
