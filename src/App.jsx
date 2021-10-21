import { useState } from "react";
import "./styles.css";
import { Input } from "./components/Input";
import { Incomplete } from "./components/Incomplete";

export const App = () => {
  //入力時のテキストを定義
  const [todoText, setTodoText] = useState("");
  //未完了TODOの定義。追加しやすいようにstate化
  const [incompleteTodo, setIncompleteTodo] = useState(["サンプル"]);
  //完了TODOの定義（同上）
  const [completeTodo, setCompleteTodo] = useState(["サンプル"]);

  //インプットの内容取得　event.target.valueはよく使う
  const onChangeTodoText = (event) => setTodoText(event.target.value);

  //追加ボタンクリック時の関数。
  const onClickAdd = () => {
    if (todoText === "") return;
    //未完了のTODOを一度取得、取得したインプットを追加
    const newTodos = [...incompleteTodo, todoText];
    //setStateで未完了TODOを再出力
    setIncompleteTodo(newTodos);
    setTodoText("");
  };

  const onClickRemove = (index) => {
    const newTodos = [...incompleteTodo];
    newTodos.splice(index, 1);
    setIncompleteTodo(newTodos);
  };

  const onClickComplete = (index) => {
    const newIncompleteTodos = [...incompleteTodo];
    newIncompleteTodos.splice(index, 1);

    const newCompleteTodos = [...completeTodo, incompleteTodo[index]];

    setIncompleteTodo(newIncompleteTodos);
    setCompleteTodo(newCompleteTodos);
  };

  const onClickReturn = (index) => {
    const newCompleteTodos = [...completeTodo];
    newCompleteTodos.splice(index, 1);

    const newIncompleteTodos = [...incompleteTodo, completeTodo[index]];

    setCompleteTodo(newCompleteTodos);
    setIncompleteTodo(newIncompleteTodos);
  };

  const onClickDelete = (index) => {
    const newTodos = [...completeTodo];
    newTodos.splice(index, 1);
    setCompleteTodo(newTodos);
  };

  return (
    <>
      <Input
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
      />

      <Incomplete
        todo={incompleteTodo}
        onClickComplete={onClickComplete}
        onClickRemove={onClickRemove}
      />

      <div className="complete-box">
        <h2 className="title">完了したTODO</h2>
        <ul>
          {completeTodo.map((todo, index) => {
            return (
              <li key="todo" className="list-row">
                <p>{todo}</p>
                <button onClick={() => onClickReturn(index)}>戻す</button>
                <button onClick={() => onClickDelete(index)}>削除</button>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};
