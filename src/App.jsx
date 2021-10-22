import { useState } from "react";
import "./styles.css";
import { Input } from "./components/Input";
import { Incomplete } from "./components/Incomplete";
import { Complete } from "./components/Complete";

export const App = () => {
  //入力時のテキストを定義
  const [todoText, setTodoText] = useState("");
  //未完了TODOの定義。追加しやすいようにstate化
  const [incompleteTodo, setIncompleteTodo] = useState([
    "サンプル1"
  ]);
  //完了TODOの定義（同上）
  const [completeTodo, setCompleteTodo] = useState([
    "サンプ2"
  ]);

  //インプットの内容取得　event.target.valueはよく使う
  const onChangeTodoText = (event) =>
    setTodoText(event.target.value);

  //追加ボタンクリック時の関数。
  const onClickAdd = () => {
    if (todoText === "") return;
    //未完了のTODOを一度取得、取得したインプットを追加
    const newTodos = [...incompleteTodo, todoText];
    //setStateで未完了TODOを再出力
    setIncompleteTodo(newTodos);
    setTodoText("");
  };

  const onClickRemove = (index, todo) => {
    const newTodos = [...todo];
    newTodos.splice(index, 1);
    setIncompleteTodo(newTodos);
  };

  const onClickComplete = (index) => {
    const newIncompleteTodos = [...incompleteTodo];
    newIncompleteTodos.splice(index, 1);

    const newCompleteTodos = [
      ...completeTodo,
      incompleteTodo[index]
    ];

    setIncompleteTodo(newIncompleteTodos);
    setCompleteTodo(newCompleteTodos);
  };

  const onClickReturn = (index) => {
    const newCompleteTodos = [...completeTodo];
    newCompleteTodos.splice(index, 1);

    const newIncompleteTodos = [
      ...incompleteTodo,
      completeTodo[index]
    ];

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
        todos={incompleteTodo}
        onClickComplete={onClickComplete}
        onClickRemove={onClickRemove}
      />
      <Complete
        todos={completeTodo}
        onClickReturn={onClickReturn}
        onClickDelete={onClickDelete}
      />
    </>
  );
};
