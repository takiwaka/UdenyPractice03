import React from "react";

export const Incomplete = (props) => {
  const { todos, onClickComplete, onClickRemove } = props;

  return (
    <div className="incomplete-box">
      <h2 className="title">未完了のTODO</h2>
      <ul>
        {todos.map((todo, index) => {
          return (
            <li key={todo} className="list-row">
              <p>{todo}</p>
              <button
                onClick={() => onClickComplete(index)}
              >
                完了
              </button>
              <button
                onClick={() => onClickRemove(index, todos)}
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
