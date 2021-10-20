import { useState } from "react";
import "./styles.css";

export const App = () => {
  const [incompleteTodo, setIncompleteTodo] = useState(["aaa", "bbbb"]);
  const [completeTodo, setCompleteTodo] = useState(["ccccc", "dddddd"]);

  return (
    <>
      <div className="input-box">
        <input type="text" placeholder="TODO入力" />
        <button>追加</button>
      </div>

      <div className="incomplete-box">
        <h2 className="title">未完了のTODO</h2>
        <ul>
          {incompleteTodo.map((todo) => {
            return (
              <li key={todo} className="list-row">
                <p>{todo}</p>
                <button>完了</button>
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
