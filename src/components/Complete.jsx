import React from "react";

export const Complete = (props) => {
  const { todos, onClickReturn, onClickDelete } = props;

  return (
    <div className="complete-box">
      <h2 className="title">完了したTODO</h2>
      <ul>
        {todos.map((todo, index) => {
          return (
            <li key={todo} className="list-row">
              <p>{todo}</p>
              <button onClick={() => onClickReturn(index)}>
                戻す
              </button>
              <button
                onClick={() => onClickDelete(index, todos)}
              >
                削除
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
